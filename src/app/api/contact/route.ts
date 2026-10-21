import {
  sendCompanyContactEmail,
  sendContactThankYouEmail,
  type ContactEmailData,
} from "@/lib/resend";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return Response.json({ success: false, message }, { status: 400 });
}

function formatSubmittedAt(): string {
  const formatted = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  return `${formatted} IST`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

    if (!body) {
      return badRequest("Invalid request body.");
    }

    const value = (key: string) => String(body[key] ?? "").trim();

    const firstName = value("firstName");
    const lastName = value("lastName");
    const email = value("email");
    const company = value("company");
    const inquiryType = value("inquiryType");

    if (!firstName) return badRequest("Please enter your first name.");
    if (!lastName) return badRequest("Please enter your last name.");
    if (!email || !EMAIL_PATTERN.test(email)) {
      return badRequest("Please enter a valid email address.");
    }
    if (!company) return badRequest("Please enter your company name.");
    if (!inquiryType) return badRequest("Please select what you are interested in.");
    if (body.consent !== true) {
      return badRequest("Please accept the privacy policy to continue.");
    }

    const inquiry: ContactEmailData = {
      firstName,
      lastName,
      email,
      company,
      inquiryType,
      phone: value("phone") || undefined,
      jobTitle: value("jobTitle") || undefined,
      employees: value("employees") || undefined,
      message: value("message") || undefined,
      submittedAt: formatSubmittedAt(),
    };

    const [companyEmail, candidateEmail] = await Promise.allSettled([
      sendCompanyContactEmail(inquiry),
      sendContactThankYouEmail(inquiry),
    ]);

    const failures: string[] = [];

    if (companyEmail.status === "rejected") {
      failures.push("team notification");
      console.error("Company contact email failed:", companyEmail.reason);
    }

    if (candidateEmail.status === "rejected") {
      failures.push("confirmation");
      console.error("Contact confirmation email failed:", candidateEmail.reason);
    }

    if (failures.length > 0) {
      return Response.json(
        {
          success: false,
          message: `Your inquiry was received, but we could not send the ${failures.join(
            " and "
          )} email. Please try again or email us directly.`,
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Inquiry submitted successfully.",
      emails: {
        company: companyEmail.status === "fulfilled" ? companyEmail.value?.id : null,
        candidate: candidateEmail.status === "fulfilled" ? candidateEmail.value?.id : null,
      },
    });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong while submitting your inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
