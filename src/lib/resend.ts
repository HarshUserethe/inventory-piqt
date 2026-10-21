import { render } from "@react-email/render";
import { Resend } from "resend";
import { CompanyApplicationEmail } from "@/components/email-template/company-application-template";
import { CompanyContactEmail } from "@/components/email-template/company-contact-template";
import { ContactThankYouEmail } from "@/components/email-template/contact-thankyou-template";
import { EmailTemplate } from "@/components/email-template/thankyou-template";
import { siteConfig } from "@/config/site";

const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";

export interface ApplicationAttachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

export interface ApplicationEmailData {
  name: string;
  email: string;
  position: string;
  phone?: string;
  experience?: string;
  coverNote?: string;
  resume?: ApplicationAttachment;
}

export interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  inquiryType: string;
  phone?: string;
  jobTitle?: string;
  employees?: string;
  message?: string;
  submittedAt: string;
}

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = readEnv("RESEND_API_KEY");

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

function readEnv(key: string): string | undefined {
  return process.env[key]?.trim().replace(/^["']|["']$/g, "").trim();
}

export function getFromEmail(): string {
  return readEnv("RESEND_FROM_EMAIL") || DEFAULT_FROM_EMAIL;
}

export function getCareersEmail(): string {
  return readEnv("CAREERS_EMAIL") || siteConfig.careersEmail;
}

export function getContactEmail(): string {
  return readEnv("CONTACT_EMAIL") || siteConfig.email;
}

export async function sendCandidateThankYouEmail(data: ApplicationEmailData) {
  const html = await render(
    EmailTemplate({ fullname: data.name, position: data.position })
  );

  const { data: result, error } = await getResendClient().emails.send({
    from: getFromEmail(),
    to: data.email,
    replyTo: getCareersEmail(),
    subject: `Application received for ${data.position}`,
    html,
  });

  if (error) {
    throw new Error(`Candidate confirmation email failed: ${error.message}`);
  }

  return result;
}

export async function sendCompanyApplicationEmail(data: ApplicationEmailData) {
  const html = await render(
    CompanyApplicationEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      coverNote: data.coverNote,
      resumeFileName: data.resume?.filename,
    })
  );

  const { data: result, error } = await getResendClient().emails.send({
    from: getFromEmail(),
    to: getCareersEmail(),
    replyTo: data.email,
    subject: `New application: ${data.position} - ${data.name}`,
    html,
    attachments: data.resume
      ? [
          {
            filename: data.resume.filename,
            content: data.resume.content,
            contentType: data.resume.contentType,
          },
        ]
      : undefined,
  });

  if (error) {
    throw new Error(`Recruiter notification email failed: ${error.message}`);
  }

  return result;
}

export async function sendContactThankYouEmail(data: ContactEmailData) {
  const html = await render(
    ContactThankYouEmail({
      firstName: data.firstName,
      inquiryType: data.inquiryType,
    })
  );

  const { data: result, error } = await getResendClient().emails.send({
    from: getFromEmail(),
    to: data.email,
    replyTo: getContactEmail(),
    subject: `Thank you for reaching out to ${siteConfig.name}`,
    html,
  });

  if (error) {
    throw new Error(`Contact confirmation email failed: ${error.message}`);
  }

  return result;
}

export async function sendCompanyContactEmail(data: ContactEmailData) {
  const html = await render(
    CompanyContactEmail({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      jobTitle: data.jobTitle,
      inquiryType: data.inquiryType,
      employees: data.employees,
      message: data.message,
      submittedAt: data.submittedAt,
    })
  );

  const { data: result, error } = await getResendClient().emails.send({
    from: getFromEmail(),
    to: getContactEmail(),
    replyTo: data.email,
    subject: `New contact inquiry: ${data.inquiryType} - ${data.company}`,
    html,
  });

  if (error) {
    throw new Error(`Company inquiry notification email failed: ${error.message}`);
  }

  return result;
}
