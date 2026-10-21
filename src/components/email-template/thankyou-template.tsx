import * as React from "react";
import { siteConfig } from "@/config/site";

interface EmailTemplateProps {
  fullname: string;
  position: string;
}

export function EmailTemplate({ fullname, position }: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#f4f6fb",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e5e9f2",
          overflow: "hidden",
        }}
      >
        <div style={{ backgroundColor: "#1a73ff", padding: "28px 32px" }}>
          <p style={{ margin: 0, color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>
            {siteConfig.name}
          </p>
        </div>

        <div style={{ padding: "32px" }}>
          <h1 style={{ margin: "0 0 16px", color: "#0f172a", fontSize: "22px" }}>
            Hi {fullname},
          </h1>

          <p style={{ margin: "0 0 12px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            Thank you for applying. We have received your application for the position of{" "}
            <strong style={{ color: "#0f172a" }}>{position}</strong>.
          </p>

          <p style={{ margin: "0 0 12px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            Our recruitment team will review your resume and contact you if your profile matches
            the requirements. This usually takes 5 to 7 business days.
          </p>

          <p style={{ margin: "0 0 24px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            If you have any questions, reply to this email or write to{" "}
            <a href={`mailto:${siteConfig.careersEmail}`} style={{ color: "#1a73ff" }}>
              {siteConfig.careersEmail}
            </a>
            .
          </p>

          <p style={{ margin: 0, color: "#0f172a", fontSize: "15px", lineHeight: 1.6 }}>
            Best regards,
            <br />
            <strong>Talent Acquisition Team</strong>
            <br />
            {siteConfig.name}
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid #e5e9f2",
            padding: "16px 32px",
            backgroundColor: "#f8fafc",
          }}
        >
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>
            This is an automated confirmation. Please do not reply with attachments.
          </p>
        </div>
      </div>
    </div>
  );
}
