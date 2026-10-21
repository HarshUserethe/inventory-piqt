# Contact Us Inquiry + Resend Email Flow

This document explains how the Contact Us form works: how the inquiry reaches the company
inbox, how the visitor receives a thank-you email, and where to change each part. It follows the
same architecture as the careers application flow documented in
`backend-arch/career-application-flow.md`.

---

## 1. What the feature does

When a visitor submits the form at `/contact#contact-form`:

1. The browser collects the form fields as JSON.
2. The JSON is sent to the Next.js Route Handler `POST /api/contact`.
3. The server validates the fields.
4. The server sends **two emails through Resend**:
   - A **team notification** to the company contact inbox, containing the complete form data.
   - A **thank-you email** to the visitor confirming that the inquiry was received.
5. Only when both emails are accepted by Resend does the UI show the success screen.

No database is used. The inquiry exists only for the duration of the request.

---

## 2. High-level flow

```
┌──────────────────────────────┐
│ Browser                      │
│ Contact page                 │
│ ContactFormSection.tsx       │
└──────────────┬───────────────┘
               │ application/json
               │ firstName, lastName, email, company,
               │ jobTitle, phone, inquiryType,
               │ employees, message, consent
               ▼
┌──────────────────────────────┐
│ Next.js Route Handler        │
│ POST /api/contact            │
│ route.ts                     │
│                              │
│ 1. Parse JSON                │
│ 2. Validate required fields  │
│ 3. Build ContactEmailData    │
└──────────────┬───────────────┘
               │ Promise.allSettled
               │
       ┌───────┴────────────────────────┐
       ▼                                ▼
┌──────────────────────┐      ┌──────────────────────┐
│ sendCompanyContact.. │      │ sendContactThankYou..│
│ to CONTACT_EMAIL     │      │ to visitor email     │
│ full form data       │      │ thank-you template   │
└──────────┬───────────┘      └──────────┬───────────┘
           │                             │
           └─────────────┬───────────────┘
                         ▼
                 ┌───────────────┐
                 │ Resend API    │
                 └───────┬───────┘
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
   Company inbox                  Visitor inbox
   (complete inquiry)             (thank you)
```

---

## 3. File map

| File | Responsibility |
| --- | --- |
| `src/components/contact/ContactFormSection.tsx` | Client form UI, `fetch("/api/contact")`, success/error states. |
| `src/app/api/contact/route.ts` | HTTP endpoint. Parses JSON, validates, sends both emails. |
| `src/lib/resend.ts` | Shared Resend client plus `sendContactThankYouEmail` and `sendCompanyContactEmail`. |
| `src/components/email-template/contact-thankyou-template.tsx` | Thank-you email sent to the visitor. |
| `src/components/email-template/company-contact-template.tsx` | Team notification containing all form data. |
| `src/config/site.ts` | Source of the default contact email and company name. |
| `.env.example` | Required environment variables (never commit real keys). |

Useful entry points:

- Form submit handler: `ContactFormSection.tsx:36`
- `fetch` call to the API: `ContactFormSection.tsx:42`
- Route Handler: `src/app/api/contact/route.ts:25`
- Both emails dispatched: `src/app/api/contact/route.ts:65`
- Contact email config: `src/lib/resend.ts:68`
- Visitor thank-you function: `src/lib/resend.ts:129`
- Team notification function: `src/lib/resend.ts:152`

---

## 4. API contract

### Request

`POST /api/contact`

Content type: `application/json`

| Field | Required | Notes |
| --- | --- | --- |
| `firstName` | Yes | Visitor first name. |
| `lastName` | Yes | Visitor last name. |
| `email` | Yes | Must match a basic email pattern. Also used as `replyTo` on the team email. |
| `company` | Yes | Company name. |
| `inquiryType` | Yes | One of the options in the form. |
| `consent` | Yes | Must be `true`. |
| `phone` | No | Shown as "Not provided" when empty. |
| `jobTitle` | No | Shown as "Not provided" when empty. |
| `employees` | No | Company size range. |
| `message` | No | Free-text challenge description. |

### Success response

Status: `200`

```json
{
  "success": true,
  "message": "Inquiry submitted successfully.",
  "emails": {
    "company": "resend-email-id",
    "candidate": "resend-email-id"
  }
}
```

### Validation error

Status: `400`

```json
{
  "success": false,
  "message": "Please enter a valid email address."
}
```

### Email delivery error

Status: `502`

Returned when Resend rejects either email. The message tells the user which email failed.
The server logs the underlying error with `console.error`.

### Unexpected error

Status: `500` with a generic message. Details stay in the server logs.

The UI treats any non-2xx response as a failure and displays `message`. On success it switches to
the "Message Received!" screen.

---

## 5. Backend behaviour in detail

### 5.1 Parsing

```ts
const body = await request.json();
```

`request.json()` is wrapped with `.catch(() => null)` so malformed bodies return a clean `400`
instead of an unhandled exception.

### 5.2 Validation

Server-side validation is mandatory because the endpoint is public.

- `firstName`, `lastName`, `email`, `company`, and `inquiryType` must be non-empty.
- Email must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- `consent` must be exactly `true`.

Optional fields are converted from empty strings to `undefined` so the templates can show
"Not provided".

### 5.3 Timestamp

The team email includes a submission time formatted for India Standard Time:

```ts
new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
}).format(new Date());
```

Change `timeZone` if the team needs a different reference timezone.

### 5.4 Sending strategy

Both emails are started together with `Promise.allSettled`:

- If both succeed, return `200`.
- If either fails, return `502` and report which one failed.

This matches the careers flow. The trade-off is that a partial failure followed by a retry can
create a duplicate on the successful side.

### 5.5 Sender and recipients

- **From:** `process.env.RESEND_FROM_EMAIL`, falling back to `onboarding@resend.dev`.
- **Team recipient:** `process.env.CONTACT_EMAIL`, falling back to `siteConfig.email`.
- **Visitor recipient:** the `email` field submitted in the form.
- **Team email `replyTo`:** the visitor's email, so the team can reply directly.
- **Visitor email `replyTo`:** the company contact inbox.

---

## 6. Email templates

Templates are React components rendered to HTML with `render()` from `@react-email/render`.

### Visitor template

`src/components/email-template/contact-thankyou-template.tsx`

Props:

```ts
{
  firstName: string;
  inquiryType: string;
}
```

Contents: thank-you message, confirmation of the inquiry type, 2-business-hour response promise,
and contact details.

### Team template

`src/components/email-template/company-contact-template.tsx`

Props:

```ts
{
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  inquiryType: string;
  employees?: string;
  message?: string;
  submittedAt: string;
}
```

Contents: a table with the complete form data, the optional message, and the submission time.

---

## 7. Environment variables and Resend setup

Copy `.env.example` to `.env.local` and fill in the values.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Authenticates requests to Resend. |
| `RESEND_FROM_EMAIL` | No | Sender address. Defaults to `onboarding@resend.dev`. |
| `CONTACT_EMAIL` | No | Team inbox for contact inquiries. Defaults to `support@processiqtechconsulting.com`. |

Production requires a domain verified in Resend. Set `RESEND_FROM_EMAIL` to an address on that
domain.

### Local testing

`onboarding@resend.dev` can only send to the Resend account owner's email. For local testing:

```env
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your-resend-account-email@gmail.com
```

Then enter the same account email in the form's **Work Email** field. Both emails will arrive in
that inbox, which is expected in test mode.

---

## 8. Running and testing locally

```bash
npm install
npm run dev
```

1. Open http://localhost:3000/contact#contact-form.
2. Fill in all required fields and check the consent box.
3. Submit and watch the terminal for Resend errors.
4. Check the team inbox and the visitor inbox.

Quick manual API test with PowerShell:

```powershell
$body = @{
  firstName   = "Test"
  lastName    = "User"
  email       = "your-resend-account@example.com"
  company     = "Acme Corporation"
  inquiryType = "BPM Consulting"
  employees   = "201-1000"
  phone       = "+91 90000 00000"
  jobTitle    = "COO"
  message     = "Testing the contact flow"
  consent     = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/contact" -Method Post -ContentType "application/json" -Body $body
```

Expected result: `success: true`.

---

## 9. How to modify common things

### Change the team inbox

Preferred: update `CONTACT_EMAIL` in `.env.local` or the hosting environment.

Fallback: change `email` in `src/config/site.ts`, which is used when the env var is absent.

### Send to multiple team members

In `src/lib/resend.ts`, `sendCompanyContactEmail` passes `to: getContactEmail()`. `to` accepts a
string array:

```ts
to: getContactEmail().split(",").map((value) => value.trim()),
```

Then set `CONTACT_EMAIL=first@example.com,second@example.com`.

### Add a new form field

1. Add it to the state in `ContactFormSection.tsx`.
2. Add an input/select in the form JSX.
3. It is automatically included in the JSON body because the whole `formData` object is sent.
4. Read it with `value("fieldName")` in `src/app/api/contact/route.ts`.
5. Add it to `ContactEmailData` and pass it to the templates.
6. Add a prop and row to `company-contact-template.tsx` (and the visitor template if relevant).

### Change the inquiry types

Edit the `inquiryTypes` array at the top of `src/components/contact/ContactFormSection.tsx`.
The server accepts any non-empty `inquiryType`, so no backend change is required.

### Change email copy or styling

Edit the templates in `src/components/email-template/`. Keep inline styles and keep prop names in
sync with `src/lib/resend.ts`.

---

## 10. Failure modes and troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `502` "team notification" | `CONTACT_EMAIL` invalid or from-domain not verified | Verify the domain in Resend, check `RESEND_FROM_EMAIL`. |
| `502` "confirmation" | Recipient not allowed in Resend test mode, or invalid address | Verify the domain, or test with the Resend account owner's email. |
| `400` "Please accept the privacy policy" | `consent` was not `true` | Ensure the checkbox is checked and the body sends a boolean. |
| `400` "Please enter a valid email address" | Email format is wrong | Correct the email input. |
| `500` | `RESEND_API_KEY` missing, or unexpected runtime error | Check server logs and `.env.local`. |
| No emails but `200` | Unlikely; check Resend dashboard delivery logs | Inspect the Resend dashboard and spam folders. |

Resend errors are logged with their original message by the API route.

---

## 11. Security notes

- Never commit `.env.local` or real API keys.
- Validate every field on the server; client validation is only for UX.
- The endpoint is public. Add rate limiting and/or a CAPTCHA if spam becomes an issue.
- Do not log full inquiry contents. The current code logs only error objects.
- The consent checkbox is enforced on the server, not just in the UI.

---

## 12. Known limitations and possible next steps

- No persistence: inquiries are not stored in a database or CRM.
- No rate limiting or spam protection.
- A partial failure can produce a duplicate on retry.
- No analytics or lead-source tracking.

Reasonable next steps:

1. Add rate limiting and a CAPTCHA.
2. Store inquiries in a database or CRM.
3. Add Resend webhooks for delivered/bounced events.
4. Add automated tests for validation and the API response contract.
