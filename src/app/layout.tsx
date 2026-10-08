import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const gilroy = localFont({
  src: [
    { path: "../fonts/Gilroy-Regular.woff",   weight: "400", style: "normal" },
    { path: "../fonts/Gilroy-Medium.woff",    weight: "500", style: "normal" },
    { path: "../fonts/Gilroy-SemiBold.woff",  weight: "600", style: "normal" },
    { path: "../fonts/Gilroy-Bold.woff",      weight: "700", style: "normal" },
    { path: "../fonts/Gilroy-ExtraBold.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
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
    "Call Center",
    "Customer Support",
  ],
  authors: [{ name: "Process IQ Tech" }],
  creator: "Process IQ Tech",
  metadataBase: new URL("https://www.processiqtechconsulting.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.processiqtechconsulting.com",
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
    <html
      lang="en"
      className={`${gilroy.variable} ${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <ScrollProgress />
          <SmoothScroll>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
