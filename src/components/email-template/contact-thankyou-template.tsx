import * as React from "react";
import { siteConfig } from "@/config/site";

interface ContactThankYouEmailProps {
  firstName: string;
  inquiryType: string;
}

export function ContactThankYouEmail({ firstName, inquiryType }: ContactThankYouEmailProps) {
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
            Hi {firstName},
          </h1>

          <p style={{ margin: "0 0 12px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            Thank you for reaching out to {siteConfig.name}. We have received your inquiry about{" "}
            <strong style={{ color: "#0f172a" }}>{inquiryType}</strong>.
          </p>

          <p style={{ margin: "0 0 12px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            One of our senior experts will review your message and contact you within 2 business
            hours to schedule your free process assessment.
          </p>

          <p style={{ margin: "0 0 24px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            If you need to add anything in the meantime, reply to this email or write to{" "}
            <a href={`mailto:${siteConfig.email}`} style={{ color: "#1a73ff" }}>
              {siteConfig.email}
            </a>
            .
          </p>

          <p style={{ margin: 0, color: "#0f172a", fontSize: "15px", lineHeight: 1.6 }}>
            Best regards,
            <br />
            <strong>Client Success Team</strong>
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
            This is an automated confirmation of your inquiry.
          </p>
        </div>
      </div>
    </div>
  );
}
