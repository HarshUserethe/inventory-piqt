# Career Application + Resend Email Flow

This document explains how a visitor applies for a job on the Careers page, how the resume
reaches the recruitment inbox, and how the applicant receives a confirmation email. Read this
first before changing anything in the application flow.

---

## 1. What the feature does

When a candidate submits the form at `/careers#resume-upload`:

1. The browser collects the form fields and the resume file.
2. The resume plus candidate details are sent to the Next.js Route Handler `POST /api/apply`.
3. The server validates the data and the file.
4. The server sends **two emails through Resend**:
   - A **recruiter notification** to the company careers inbox, with the resume attached.
   - A **confirmation email** to the applicant's email address.
5. Only when both emails are accepted by Resend does the UI show the success screen.

No database is used. The resume is never written to local disk; it exists only in memory during
the request and is forwarded to Resend as an email attachment.

---

## 2. High-level flow

```
┌──────────────────────────────┐
│ Browser                      │
│ Careers page                 │
│ ResumeUploadSection.tsx      │
└──────────────┬───────────────┘
               │ multipart/form-data
               │ name, email, phone, position,
               │ experience, coverNote, resume
               ▼
┌──────────────────────────────┐
│ Next.js Route Handler        │
│ POST /api/apply              │
│ route.ts                     │
│                              │
│ 1. Parse FormData            │
│ 2. Validate fields           │
│ 3. Validate resume type/size │
│ 4. Build Buffer attachment   │
└──────────────┬───────────────┘
               │ Promise.allSettled
               │
       ┌───────┴────────────────────────┐
       ▼                                ▼
┌──────────────────────┐      ┌──────────────────────┐
│ sendCompany...       │      │ sendCandidate...     │
│ to CAREERS_EMAIL     │      │ to applicant email   │
│ resume attached      │      │ thank-you template   │
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
  Recruiter inbox                Candidate inbox
  (resume attached)              (confirmation)
```

---

## 3. File map

| File | Responsibility |
| --- | --- |
| `src/components/careers/ResumeUploadSection.tsx` | Client form UI, file validation, `fetch("/api/apply")`, success/error states. |
| `src/app/api/apply/route.ts` | HTTP endpoint. Parses multipart data, validates, builds the attachment, sends both emails. |
| `src/lib/resend.ts` | Resend client, sender/recipient config, and the two email-sending functions. |
| `src/components/email-template/thankyou-template.tsx` | HTML email sent to the applicant. |
| `src/components/email-template/company-application-template.tsx` | HTML email sent to the recruitment team. |
| `src/config/site.ts` | Source of the default `careersEmail` and company name. |
| `.env.example` | Required environment variables (never commit real keys). |

Useful entry points:

- Form submit handler: `ResumeUploadSection.tsx:91`
- `fetch` call to the API: `ResumeUploadSection.tsx:112`
- Route Handler: `src/app/api/apply/route.ts:54`
- Resume validation: `src/app/api/apply/route.ts:28`
- Both emails dispatched: `src/app/api/apply/route.ts:87`
- Resend client and config: `src/lib/resend.ts:60`
- Candidate email function: `src/lib/resend.ts:72`
- Recruiter email function: `src/lib/resend.ts:92`

---

## 4. API contract

### Request

`POST /api/apply`

Content type: `multipart/form-data`

| Field | Required | Notes |
| --- | --- | --- |
| `name` | Yes | Full name. |
| `email` | Yes | Must match a basic email pattern. Also used as `replyTo` on the recruiter email. |
| `phone` | No | Shown as "Not provided" when empty. |
| `position` | Yes | Selected role. |
| `experience` | No | Included when present. |
| `coverNote` | No | Included in the recruiter email. |
| `resume` | Yes | PDF, DOC, or DOCX. Maximum 10 MB. |

### Success response

Status: `200`

```json
{
  "success": true,
  "message": "Application submitted successfully.",
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
  "message": "Please attach your resume before submitting."
}
```

### Email delivery error

Status: `502`

Returned when Resend rejects either email. The message tells the user which email failed.
The server logs the underlying error with `console.error`.

### Unexpected error

Status: `500` with a generic message. Details stay in the server logs.

The UI treats any non-2xx response as a failure and shows `message`. On success it switches to the
confirmation screen.

---

## 5. Backend behaviour in detail

### 5.1 Parsing

The handler uses the Web `FormData` API:

```ts
const formData = await request.formData();
```

Text fields are read and trimmed through the `field()` helper. The file is read through
`readResume()`.

### 5.2 Validation

Server-side validation is mandatory even though the client validates too, because anyone can call
the endpoint directly.

- `name`, `email`, and `position` must be present.
- Email must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- Resume must exist and be non-empty.
- MIME type must be one of:
  - `application/pdf`
  - `application/msword`
  - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- Size must be `<= 10 * 1024 * 1024` bytes.

Limits live in `src/app/api/apply/route.ts`:

```ts
const MAX_RESUME_BYTES = 10 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([...]);
```

The client mirrors the same rules in `validateAndSetFile()` in `ResumeUploadSection.tsx`.

### 5.3 Attachment handling

The uploaded `File` is converted to a Node `Buffer`:

```ts
content: Buffer.from(await resume.arrayBuffer())
```

This is required because Resend's Node SDK accepts `content: Buffer` (or a base64 string) for
attachments. The route declares `export const runtime = "nodejs"` so this works reliably.

The resume is **not stored anywhere**. It is attached to the recruiter email and discarded when the
request finishes.

### 5.4 Sending strategy

Both emails are started together with `Promise.allSettled`, so one failure does not prevent the
other from being attempted. After both settle:

- If both succeed, return `200`.
- If either fails, return `502` and report which one failed.

This means "success" in the UI requires both the recruiter notification and the candidate
confirmation to be accepted by Resend.

Trade-off: if Resend accepts one email but rejects the other, a retry can create a duplicate on the
successful side. Duplicate applications are harmless compared with silently losing the resume.

### 5.5 Sender and recipients

- **From:** `process.env.RESEND_FROM_EMAIL`, falling back to `onboarding@resend.dev`.
- **Recruiter recipient:** `process.env.CAREERS_EMAIL`, falling back to `siteConfig.careersEmail`.
- **Candidate recipient:** the `email` field submitted by the applicant.
- **Recruiter email `replyTo`:** the applicant's email, so the recruiter can reply directly.
- **Candidate email `replyTo`:** the company careers inbox.

The Resend client is created lazily and reused. If `RESEND_API_KEY` is missing, the send functions
throw a clear configuration error.

---

## 6. Email templates

Templates are React components rendered to an HTML string with `render()` from
`@react-email/render`. That package is the supported renderer for Resend/React Email and avoids
the Next.js restriction on importing `react-dom/server` inside Route Handlers.

### Candidate template

`src/components/email-template/thankyou-template.tsx`

Props:

```ts
{
  fullname: string;
  position: string;
}
```

Contents: greeting, confirmation that the application was received, next-steps copy, careers email
link, and signature from the Talent Acquisition Team.

### Recruiter template

`src/components/email-template/company-application-template.tsx`

Props:

```ts
{
  name: string;
  email: string;
  phone?: string;
  position: string;
  experience?: string;
  coverNote?: string;
  resumeFileName?: string;
}
```

Contents: a table of candidate details plus the optional cover note. The actual resume is attached
as a file, not embedded in the HTML.

Both templates use inline styles because many email clients ignore `<style>` blocks and external
CSS.

---

## 7. Environment variables and Resend setup

Copy `.env.example` to `.env.local` and fill in the values.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Authenticates requests to Resend. Create one at https://resend.com/api-keys. |
| `RESEND_FROM_EMAIL` | No | Sender address. Defaults to `onboarding@resend.dev`. |
| `CAREERS_EMAIL` | No | Recruiter inbox. Defaults to `careers@processiqtechconsulting.com`. |

### Domain verification (production)

Resend only lets you send to arbitrary recipients from a **verified domain**.

1. Add your domain in the Resend dashboard.
2. Add the DNS records Resend provides.
3. Wait for verification.
4. Set `RESEND_FROM_EMAIL` to an address on that domain, for example
   `"Process IQ Tech Careers <careers@yourdomain.com>"`.

### Test mode (local development)

`onboarding@resend.dev` can only send to the email address that owns the Resend account. In local
development:

- Set `CAREERS_EMAIL` to the Resend account owner's email.
- Enter the same account email in the form so the candidate confirmation also succeeds.

Without a verified domain, entering an unrelated applicant email will make the candidate email fail
and the API will return `502`.

---

## 8. Running and testing locally

```bash
npm install
npm run dev
```

Then:

1. Open http://localhost:3000/careers#resume-upload.
2. Fill in the form, attach a PDF/DOC/DOCX under 10 MB, and submit.
3. Watch the terminal for Resend errors logged by the API route.
4. Check the recruiter inbox and the applicant inbox.

Quick manual API test with PowerShell:

```powershell
curl.exe -X POST http://localhost:3000/api/apply `
  -F "name=Test Candidate" `
  -F "email=your-resend-account@example.com" `
  -F "phone=+91 90000 00000" `
  -F "position=Operations Manager" `
  -F "experience=3-5 years" `
  -F "coverNote=Testing the application flow" `
  -F "resume=@C:\path\to\resume.pdf"
```

Expected result: `200` with `success: true`.

---

## 9. How to modify common things

### Change the recruiter inbox

Preferred: update `CAREERS_EMAIL` in `.env.local` / hosting environment.

Fallback: change `careersEmail` in `src/config/site.ts`, which is what the code uses when the env
var is absent.

### Send to multiple recruiters

In `src/lib/resend.ts`, `sendCompanyApplicationEmail` currently passes `to: getCareersEmail()`.
`to` accepts a string array, so change it to something like:

```ts
to: getCareersEmail().split(",").map((value) => value.trim()),
```

Then set `CAREERS_EMAIL=recruiter1@example.com,recruiter2@example.com`.

### Add a new form field

1. Add the field to the state in `ResumeUploadSection.tsx`.
2. Add an input in the form JSX.
3. Append it to the `FormData` inside `handleSubmit`.
4. Read it with `field(formData, "...")` in `src/app/api/apply/route.ts`.
5. Add it to `ApplicationEmailData` and pass it to the templates.
6. Add a prop and row to the relevant template.

### Change file limits or allowed types

Update both places so the client and server agree:

- `MAX_RESUME_BYTES` and `ALLOWED_RESUME_TYPES` in `src/app/api/apply/route.ts`.
- `validateAndSetFile()` in `src/components/careers/ResumeUploadSection.tsx`.
- The `accept` attribute on the file input.

Keep the limit at or below Resend's 40 MB per-email attachment limit. The current 10 MB limit is
intentional.

### Change email copy or styling

Edit the template files in `src/components/email-template/`. Keep inline styles. Keep prop names in
sync with `src/lib/resend.ts`.

### Change the sender name/address

Set `RESEND_FROM_EMAIL`. The value can include a display name:
`"Process IQ Tech Careers <careers@yourdomain.com>"`.

### Return success when only one email fails

In `src/app/api/apply/route.ts`, adjust the `failures` block. For example, if the recruiter email
must succeed but the confirmation is best-effort, only return `502` when the company email
rejected. Record the decision in this document when you change it.

---

## 10. Failure modes and troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `502` with "recruiter notification" | `CAREERS_EMAIL` invalid or from-domain not verified | Verify the domain in Resend, check `RESEND_FROM_EMAIL`. |
| `502` with "candidate confirmation" | Recipient is not allowed in Resend test mode, or address is invalid | Verify the domain, or test with the Resend account owner's email. |
| `400` "Please attach your resume" | File input empty or field name changed | Ensure the form appends the file as `resume`. |
| `400` invalid file type | Browser reported a different MIME type | Add the MIME type to `ALLOWED_RESUME_TYPES` after confirming it is safe. |
| `500` | `RESEND_API_KEY` missing, or unexpected runtime error | Check server logs and `.env.local`. |
| Both emails send but the resume is missing | Attachment was not passed to `attachments` | Confirm `data.resume` is set and `content` is a `Buffer`. |

Resend errors are logged with their original message by the API route. Read the server terminal
first when debugging.

---

## 11. Security notes

- Never commit `.env.local` or real API keys. Only `.env.example` belongs in git.
- Validate every field and file on the server; client validation is only for UX.
- The endpoint is public by design. If abuse becomes a problem, add rate limiting (for example per
  IP) and/or a CAPTCHA before parsing the file.
- Do not reflect raw user input as HTML outside React's escaping. Templates receive props and React
  escapes them.
- Do not log resume contents or full personal data. The current code logs only error objects.
- Consider antivirus scanning or object storage for resumes if compliance requires retaining files.

---

## 12. Known limitations and possible next steps

- No persistence: there is no application record, audit trail, or retry queue.
- No rate limiting or spam protection.
- Email sending is synchronous within the request. Large files and Resend latency can approach
  hosting function timeouts.
- A partial failure can produce a duplicate on retry.
- No analytics or tracking of application counts.

Reasonable next steps:

1. Add rate limiting and a CAPTCHA.
2. Store applications in a database or CRM (and optionally the resume in object storage).
3. Move email sending to a background job with retries.
4. Add Resend webhooks to track delivered/bounced events.
5. Add automated tests for validation and the API response contract.
