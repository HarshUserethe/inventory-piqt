import * as React from "react";
import { siteConfig } from "@/config/site";

interface CompanyApplicationEmailProps {
  name: string;
  email: string;
  phone?: string;
  position: string;
  experience?: string;
  coverNote?: string;
  resumeFileName?: string;
}

export function CompanyApplicationEmail({
  name,
  email,
  phone,
  position,
  experience,
  coverNote,
  resumeFileName,
}: CompanyApplicationEmailProps) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone || "Not provided" },
    { label: "Position", value: position },
    { label: "Experience", value: experience || "Not provided" },
    { label: "Resume", value: resumeFileName || "Not attached" },
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
          maxWidth: "560px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e5e9f2",
          overflow: "hidden",
        }}
      >
        <div style={{ backgroundColor: "#0f172a", padding: "28px 32px" }}>
          <p style={{ margin: 0, color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>
            New Job Application
          </p>
          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "13px" }}>
            {siteConfig.name} Careers
          </p>
        </div>

        <div style={{ padding: "32px" }}>
          <p style={{ margin: "0 0 20px", color: "#475569", fontSize: "15px", lineHeight: 1.6 }}>
            A new application has been submitted for{" "}
            <strong style={{ color: "#0f172a" }}>{position}</strong>.
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

          {coverNote ? (
            <div style={{ marginTop: "24px" }}>
              <p style={{ margin: "0 0 8px", color: "#64748b", fontSize: "13px", fontWeight: 700 }}>
                COVER NOTE
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
                {coverNote}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
