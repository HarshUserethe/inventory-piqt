"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/", num: "01" },
  { label: "About", href: "/about", num: "02" },
  { label: "Services", href: "/services", num: "03" },
  { label: "Why Us?", href: "/why-us", num: "04" },
  { label: "Careers", href: "/careers", num: "05" },
  { label: "FAQs", href: "/faqs", num: "06" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isDarkMode = mounted ? (theme === "dark" || resolvedTheme === "dark") : true;

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            aria-label="ProcessIQTech Home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {/* Logo Mark Icon */}
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-extrabold text-lg tracking-tighter group-hover:scale-105 transition-transform">
              P
            </div>
            {/* Wordmark */}
            <span className="text-[24px] font-bold text-slate-900 dark:text-white tracking-tight">
              ProcessIQ<span className="text-[#1A73FF]">Tech</span>
            </span>
          </Link>

          {/* Center: Nav links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-[17px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-md px-1 py-0.5",
                    isActive
                      ? "text-slate-900 dark:text-white font-semibold"
                      : "text-slate-600 dark:text-[#a1a1a1] hover:text-slate-900 dark:hover:text-white font-normal"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme Toggle + Phone Number + "Let's Connect" CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme-toggle switch */}
            <button
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="relative w-[56px] h-[30px] rounded-full bg-slate-200 dark:bg-[#1e1e1e] border border-slate-300 dark:border-white/10 p-1 transition-colors hover:border-slate-400 dark:hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-pointer"
            >
              <div
                className={cn(
                  "w-[22px] h-[22px] rounded-full bg-white dark:bg-white shadow-md transition-transform duration-300 ease-out flex items-center justify-center",
                  isDarkMode ? "translate-x-[24px]" : "translate-x-0"
                )}
              >
                {isDarkMode ? (
                  <span className="w-2 h-2 rounded-full bg-black/80" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                )}
              </div>
            </button>

            {/* Phone Number Link */}
            <a
              href="tel:+919515783300"
              aria-label="Call Process IQ Tech"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
            >
              <Phone className="w-4 h-4 text-[#1A73FF]" />
              <span>+91 9515783300</span>
            </a>

            {/* Pill button "Let's Connect" */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] px-7 rounded-full bg-[#1A73FF] text-white dark:bg-white dark:text-black text-[17px] font-medium transition-all hover:bg-blue-600 dark:hover:bg-neutral-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80"
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Mobile Burger Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-[48px] h-[28px] rounded-full bg-slate-200 dark:bg-[#1e1e1e] border border-slate-300 dark:border-white/10 p-1 relative"
            >
              <div
                className={cn(
                  "w-[20px] h-[20px] rounded-full bg-white transition-transform duration-300",
                  isDarkMode ? "translate-x-[20px]" : "translate-x-0"
                )}
              />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-slate-50 dark:bg-black text-slate-900 dark:text-white transition-all duration-500 flex flex-col justify-between px-8 py-10 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        )}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-extrabold text-lg">
              P
            </div>
            <span className="text-[22px] font-bold text-slate-900 dark:text-white">
              ProcessIQ<span className="text-[#1A73FF]">Tech</span>
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Numbered Navigation List */}
        <nav className="my-auto flex flex-col space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-baseline gap-4 text-left border-b border-slate-200 dark:border-white/10 pb-4"
              >
                <span className="text-sm font-mono text-slate-500 dark:text-[#a1a1a1] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {link.num}
                </span>
                <span
                  className={cn(
                    "text-3xl font-medium tracking-tight transition-all group-hover:translate-x-2",
                    isActive ? "text-slate-900 dark:text-white font-bold" : "text-slate-600 dark:text-neutral-400 group-hover:text-slate-900 dark:group-hover:text-white"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 flex flex-col gap-3">
          <a
            href="tel:+919515783300"
            className="w-full flex items-center justify-center gap-2 h-[48px] rounded-full border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-[16px] font-medium"
          >
            <Phone className="w-4 h-4 text-[#1A73FF]" />
            <span>+91 9515783300</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center h-[52px] rounded-full bg-[#1A73FF] text-white dark:bg-white dark:text-black text-[18px] font-semibold"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </>
  );
}
