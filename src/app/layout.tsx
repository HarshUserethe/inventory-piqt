import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/config/site";
import { siteSections } from "@/config/sections";
import MaintenancePage from "@/components/maintenance/MaintenancePage";

const fontSans = localFont({
  src: [
    {
      path: "../fonts/WOFF/2973a56659bcee89-s.p.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/WOFF/f2503a1b2c7bf496-s.p.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/WOFF/22a5144ee8d83bca-s.p.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const fontSerif = localFont({
  src: [
    {
      path: "../fonts/WOFF/cb9f64d62d112b41-s.p.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/WOFF/6448e9c529f1ef4a-s.p.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Process IQ Tech | Premium Digital Agency & Design Studio",
    template: "%s | Process IQ Tech",
  },
  description:
    "Crafted websites, lasting impressions. Premium web design and development studio.",
  keywords: [
    "Web Design",
    "Design Studio",
    "Digital Agency",
    "Web Development",
    "UI/UX Design",
    "Process IQ Tech",
  ],
  authors: [{ name: "Process IQ Tech" }],
  creator: "Process IQ Tech",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || siteConfig.url,
    siteName: "Process IQ Tech",
    title: "Process IQ Tech | Premium Digital Agency",
    description: "Crafted websites, lasting impressions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Process IQ Tech",
    description: "Crafted websites, lasting impressions.",
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
  /* ---- MAINTENANCE MODE ---- */
  if (siteSections.maintenanceMode) {
    return (
      <html
        lang="en"
        className={`dark ${fontSans.variable} ${fontSerif.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased font-sans bg-black text-white" suppressHydrationWarning>
          <MaintenancePage />
        </body>
      </html>
    );
  }

  /* ---- NORMAL LAYOUT ---- */
  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable} ${fontSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-slate-50 text-slate-900 dark:bg-black dark:text-white transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
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

