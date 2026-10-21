import {
  sendCandidateThankYouEmail,
  sendCompanyApplicationEmail,
  type ApplicationAttachment,
  type ApplicationEmailData,
} from "@/lib/resend";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 10 * 1024 * 1024;

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function badRequest(message: string) {
  return Response.json({ success: false, message }, { status: 400 });
}

async function readResume(
  formData: FormData
): Promise<{ attachment?: ApplicationAttachment; error?: string }> {
  const resume = formData.get("resume");

  if (!(resume instanceof File) || resume.size === 0) {
    return { error: "Please attach your resume before submitting." };
  }

  if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
    return { error: "Please upload a valid PDF, DOC, or DOCX document." };
  }

  if (resume.size > MAX_RESUME_BYTES) {
    return { error: "File size exceeds the 10MB limit." };
  }

  return {
    attachment: {
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer()),
      contentType: resume.type,
    },
  };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = field(formData, "name");
    const email = field(formData, "email");
    const phone = field(formData, "phone");
    const position = field(formData, "position");
    const experience = field(formData, "experience");
    const coverNote = field(formData, "coverNote");

    if (!name) return badRequest("Please enter your full name.");
    if (!email || !EMAIL_PATTERN.test(email)) {
      return badRequest("Please enter a valid email address.");
    }
    if (!position) return badRequest("Please select a position of interest.");

    const { attachment, error: resumeError } = await readResume(formData);

    if (resumeError || !attachment) {
      return badRequest(resumeError ?? "Please attach your resume before submitting.");
    }

    const application: ApplicationEmailData = {
      name,
      email,
      phone: phone || undefined,
      position,
      experience: experience || undefined,
      coverNote: coverNote || undefined,
      resume: attachment,
    };

    const [companyEmail, candidateEmail] = await Promise.allSettled([
      sendCompanyApplicationEmail(application),
      sendCandidateThankYouEmail(application),
    ]);

    const failures: string[] = [];

    if (companyEmail.status === "rejected") {
      failures.push("recruiter notification");
      console.error("Company application email failed:", companyEmail.reason);
    }

    if (candidateEmail.status === "rejected") {
      failures.push("candidate confirmation");
      console.error("Candidate confirmation email failed:", candidateEmail.reason);
    }

    if (failures.length > 0) {
      return Response.json(
        {
          success: false,
          message: `Your application was received, but we could not send the ${failures.join(
            " and "
          )} email. Please try again or email us directly.`,
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Application submitted successfully.",
      emails: {
        company: companyEmail.status === "fulfilled" ? companyEmail.value?.id : null,
        candidate: candidateEmail.status === "fulfilled" ? candidateEmail.value?.id : null,
      },
    });
  } catch (error) {
    console.error("Application submission failed:", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong while submitting your application. Please try again.",
      },
      { status: 500 }
    );
  }
}
