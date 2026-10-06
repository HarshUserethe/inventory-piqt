"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { LuTarget, LuZap, LuRepeat, LuFileText, LuChartBar, LuGlobe } from "react-icons/lu";
import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const servicesDropdown = [
  { label: "BPM Consulting & Strategy", href: "/services#bpm-consulting", Icon: LuTarget },
  { label: "Intelligent Process Automation", href: "/services#automation", Icon: LuZap },
  { label: "Workflow Optimization", href: "/services#workflow", Icon: LuRepeat },
  { label: "Intelligent Document Processing", href: "/services#idp", Icon: LuFileText },
  { label: "Process Analytics & Insights", href: "/services#analytics", Icon: LuChartBar },
  { label: "Managed BPO Services", href: "/services#bpo", Icon: LuGlobe },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center group py-1"
              aria-label="Process IQ Tech Home"
            >
              <div className="relative flex items-center h-8 sm:h-9 md:h-10">
                {/* Logo for y:0 (White text on dark/transparent background) */}
                <Image
                  src="/logo-white.png"
                  alt="Process IQ Tech"
                  width={635}
                  height={166}
                  priority
                  className={cn(
                    "h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity duration-300",
                    isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}
                />
                {/* Logo for scrolled (Black text on white navbar) */}
                <Image
                  src="/logo-black.png"
                  alt="Process IQ Tech"
                  width={635}
                  height={166}
                  priority
                  className={cn(
                    "absolute inset-0 h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity duration-300",
                    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                if (link.label === "Services") {
                  const isServicesActive = pathname.startsWith("/services");
                  return (
                    <div key={link.label} className="relative group">
                      <button
                        className={cn(
                          "relative flex items-center gap-1.5 px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200",
                          isServicesActive
                            ? isScrolled
                              ? "text-primary-600 font-semibold"
                              : "text-white font-semibold"
                            : isScrolled
                            ? "text-neutral-600 hover:text-neutral-900"
                            : "text-neutral-300 hover:text-white"
                        )}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        aria-expanded={servicesOpen}
                      >
                        <span>Services</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                        <span
                          className={cn(
                            "absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full transition-all duration-200 origin-center",
                            isServicesActive
                              ? isScrolled
                                ? "bg-primary-600 opacity-100 scale-x-100"
                                : "bg-white opacity-100 scale-x-100"
                              : "bg-current opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                          )}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
                          servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                        )}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-2 overflow-hidden">
                          {servicesDropdown.map((item) => {
                            const IconComponent = item.Icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 group/item transition-all duration-150"
                              >
                                <IconComponent className="w-5 h-5 text-primary-600 group-hover/item:scale-110 transition-transform shrink-0" />
                                <span className="text-[0.85rem] font-medium text-neutral-700 group-hover/item:text-primary-600 transition-colors">
                                  {item.label}
                                </span>
                              </Link>
                            );
                          })}
                          <div className="border-t border-neutral-100 mt-1 pt-1">
                            <Link
                              href="/services"
                              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 group/all transition-all duration-150"
                            >
                              <span className="text-[0.85rem] font-semibold text-primary-600">
                                View All Services
                              </span>
                              <ArrowRight className="w-4 h-4 text-primary-600 group-hover/all:translate-x-1 transition-transform" />
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
                      "relative px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200 group",
                      isActive
                        ? isScrolled
                          ? "text-primary-600 font-semibold"
                          : "text-white font-semibold"
                        : isScrolled
                        ? "text-neutral-600 hover:text-neutral-900"
                        : "text-neutral-300 hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                    <span
                      className={cn(
                        "absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full transition-all duration-200 origin-center",
                        isActive
                          ? isScrolled
                            ? "bg-primary-600 opacity-100 scale-x-100"
                            : "bg-white opacity-100 scale-x-100"
                          : "bg-current opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="tel:+18887429100"
                className={cn(
                  "text-[0.85rem] font-medium transition-colors",
                  isScrolled
                    ? "text-neutral-500 hover:text-neutral-800"
                    : "text-neutral-300 hover:text-white"
                )}
              >
                {siteConfig.phone}
              </Link>
              <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={cn(
                "lg:hidden p-2.5 rounded-xl transition-colors",
                isScrolled
                  ? "hover:bg-neutral-100 text-neutral-700"
                  : "hover:bg-white/10 text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 pt-8 flex flex-col h-full overflow-y-auto">
            {/* Mobile drawer logo & close button */}
            <div className="flex items-center justify-between pb-6 mb-4 border-b border-neutral-100">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo-black.png"
                  alt="Process IQ Tech"
                  width={635}
                  height={166}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-neutral-500 hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Mobile nav links */}
            <div className="space-y-1 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-150",
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-neutral-100 pt-6 space-y-3">
              <p className="text-sm text-neutral-400 font-medium px-1">
                {siteConfig.phone}
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Schedule Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
