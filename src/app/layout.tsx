import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Process IQ Tech | Intelligent Business Process Management",
    template: "%s | Process IQ Tech",
  },
  description:
    "Process IQ Tech delivers AI-powered BPM solutions that streamline operations, reduce costs, and accelerate growth for 500+ global enterprises.",
  keywords: [
    "Business Process Management",
    "BPM Consulting",
    "Process Automation",
    "RPA",
    "Intelligent Automation",
    "BPO Services",
    "Workflow Optimization",
    "Process Intelligence",
  ],
  authors: [{ name: "Process IQ Tech" }],
  creator: "Process IQ Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.processiqtech.com",
    siteName: "Process IQ Tech",
    title: "Process IQ Tech | Intelligent Business Process Management",
    description:
      "AI-powered BPM solutions that streamline operations and accelerate growth for global enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Process IQ Tech",
    description: "Intelligent Business Process Management for global enterprises.",
    creator: "@processiqtech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} font-sans`}>
      <body className="antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
