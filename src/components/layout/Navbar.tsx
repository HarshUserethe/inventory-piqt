"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, ArrowRight, Phone,
  Users, Lightbulb, PhoneCall, Database, CreditCard, ArrowUpRight,
} from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const servicesDropdown = [
  { label: "Operations Support",      href: "/services#operations-support",  Icon: Users },
  { label: "Advisory",                href: "/services#advisory",            Icon: Lightbulb },
  { label: "Customer Support & Sales",href: "/services#customer-sales",      Icon: PhoneCall },
  { label: "Data Processing & Mining",href: "/services#data-services",       Icon: Database },
  { label: "Financial Reconciliation",href: "/services#financial-services",  Icon: CreditCard },
];

export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navText = (active: boolean) =>
    cn(
      "text-[0.84rem] font-medium transition-colors duration-200",
      active
        ? isScrolled
          ? "text-brand-600 dark:text-brand-400 font-semibold"
          : "text-white font-semibold"
        : isScrolled
        ? "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
        : "text-white/80 hover:text-white"
    );

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-white/8 shadow-sm"
            : "bg-transparent"
        )}
        style={{ height: "var(--navbar-h)" }}
      >
        <div className="container-custom h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Process IQ Tech — Home"
            className="relative flex items-center shrink-0"
          >
            <div className="relative h-10 w-auto flex items-center">
              {/* Light theme logo (dark text) */}
              <Image
                src="/logo-black.png"
                alt="Process IQ Tech"
                width={635}
                height={166}
                priority
                className={cn(
                  "h-9 w-auto object-contain transition-opacity duration-300 absolute",
                  isScrolled ? "opacity-100 dark:opacity-0" : "opacity-0"
                )}
              />
              {/* Dark / transparent logo (white text) */}
              <Image
                src="/logo-white.png"
                alt="Process IQ Tech"
                width={635}
                height={166}
                priority
                className={cn(
                  "h-9 w-auto object-contain transition-opacity duration-300",
                  isScrolled ? "opacity-0 dark:opacity-100" : "opacity-100"
                )}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.label === "Services") {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "relative flex items-center gap-1 px-3 py-2 rounded-lg transition-all",
                        navText(isServicesActive)
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Mega dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="w-80 bg-white dark:bg-dark-elevated rounded-2xl shadow-2xl border border-neutral-100 dark:border-white/8 p-2 overflow-hidden">
                        {servicesDropdown.map((item) => {
                          const IconComponent = item.Icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-600/10 group/item transition-all duration-150"
                            >
                              <span className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-600/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-100 dark:group-hover/item:bg-brand-600/20 transition-colors">
                                <IconComponent className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                              </span>
                              <span className="text-[0.84rem] font-medium text-neutral-700 dark:text-neutral-300 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-colors">
                                {item.label}
                              </span>
                            </Link>
                          );
                        })}
                        <div className="border-t border-neutral-100 dark:border-white/8 mt-1 pt-1">
                          <Link
                            href="/services"
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-600/10 group/all transition-all duration-150"
                          >
                            <span className="text-[0.84rem] font-semibold text-brand-600 dark:text-brand-400">
                              View All Services
                            </span>
                            <ArrowRight className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover/all:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 rounded-lg transition-all",
                    navText(isActive)
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-brand-600 dark:bg-brand-400" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors",
                isScrolled
                  ? "text-neutral-500 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400"
                  : "text-white/70 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>

            {/* Theme toggle */}
            <ThemeToggle scrolled={isScrolled} />

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 h-10"
              id="navbar-cta"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle scrolled={isScrolled} />
            <button
              className={cn(
                "p-2 rounded-xl transition-colors",
                isScrolled
                  ? "hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300"
                  : "hover:bg-white/10 text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-dark-elevated shadow-2xl transition-transform duration-300 flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-white/8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo-black.png"
                alt="Process IQ Tech"
                width={635}
                height={166}
                className="h-8 w-auto object-contain dark:hidden"
              />
              <Image
                src="/logo-white.png"
                alt="Process IQ Tech"
                width={635}
                height={166}
                className="h-8 w-auto object-contain hidden dark:block"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/10 dark:text-neutral-400"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              if (link.label === "Services") {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                        pathname.startsWith("/services")
                          ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-600/10"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/5"
                      )}
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      Services
                      <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {servicesDropdown.map((item) => {
                          const IconComponent = item.Icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-600/10 transition-all"
                            >
                              <IconComponent className="w-4 h-4 shrink-0" />
                              {item.label}
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-600/10 transition-all"
                        >
                          View All Services
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                    isActive
                      ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-600/10"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/5"
                  )}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className="border-t border-neutral-100 dark:border-white/8 px-6 py-5 space-y-3">
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>{siteConfig.phone}</span>
            </div>
            <Link
              href="/contact"
              className="btn-primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Schedule Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
