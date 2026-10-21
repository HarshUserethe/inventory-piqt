import * as React from "react";
import { siteConfig } from "@/config/site";

interface CompanyContactEmailProps {
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

export function CompanyContactEmail({
  firstName,
  lastName,
  email,
  phone,
  company,
  jobTitle,
  inquiryType,
  employees,
  message,
  submittedAt,
}: CompanyContactEmailProps) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Name", value: `${firstName} ${lastName}`.trim() },
    { label: "Work Email", value: email },
    { label: "Phone", value: phone || "Not provided" },
    { label: "Company", value: company },
    { label: "Job Title", value: jobTitle || "Not provided" },
    { label: "Interested In", value: inquiryType },
    { label: "Company Size", value: employees || "Not provided" },
    { label: "Submitted", value: submittedAt },
  ];

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
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e5e9f2",
          overflow: "hidden",
        }}
      >
        <div style={{ backgroundColor: "#0f172a", padding: "28px 32px" }}>
          <p style={{ margin: 0, color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>
            New Contact Inquiry
          </p>
          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "13px" }}>
            {siteConfig.name} Website
          </p>
        </div>

        <div style={{ padding: "32px" }}>
          <p style={{ margin: "0 0 20px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            A new assessment request was submitted by{" "}
            <strong style={{ color: "#0f172a" }}>
              {firstName} {lastName}
            </strong>{" "}
            from <strong style={{ color: "#0f172a" }}>{company}</strong>.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #eef2f7",
                      color: "#64748b",
                      width: "35%",
                      verticalAlign: "top",
                    }}
                  >
                    {row.label}
                  </td>
                  <td
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #eef2f7",
                      color: "#0f172a",
                      fontWeight: 600,
                      verticalAlign: "top",
                      wordBreak: "break-word",
                    }}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {message ? (
            <div style={{ marginTop: "24px" }}>
              <p style={{ margin: "0 0 8px", color: "#64748b", fontSize: "13px", fontWeight: 700 }}>
                MESSAGE
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                {message}
              </p>
            </div>
          ) : null}

          <p style={{ margin: "24px 0 0", color: "#94a3b8", fontSize: "12px" }}>
            Reply directly to this email to reach the sender.
          </p>
        </div>
      </div>
    </div>
  );
}
