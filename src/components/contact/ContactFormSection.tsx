"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const inquiryTypes = [
  "BPM Consulting",
  "Process Automation",
  "Managed BPO Services",
  "Process Analytics",
  "Partnership Inquiry",
  "General Inquiry",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    inquiryType: "",
    employees: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ?? "Something went wrong while submitting your inquiry."
        );
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your inquiry."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section
      id="contact-form-section"
      className="relative z-20 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white border-t border-slate-200/60 dark:border-white/5 transition-colors duration-300"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact details & Office */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll>
              <SectionHeading
                badge="Get In Touch"
                title="Talk to Our"
                accent="Experts"
                description="Our team is available Mon–Fri, 8am–8pm EST. Global offices provide 24/7 coverage."
              />
            </RevealOnScroll>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                  sub: "Response within 2 hours",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: siteConfig.phone,
                  href: `tel:${siteConfig.phone}`,
                  sub: "Mon–Fri, 8am–8pm EST",
                },
                {
                  icon: Clock,
                  label: "Free Assessment",
                  value: "Book a 60-min slot",
                  href: "#contact-form",
                  sub: "With a senior expert",
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.label} delay={i * 80}>
                  <a
                    href={item.href}
                    className="flex items-start gap-4 p-5 bg-white dark:bg-[#12141C] rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A73FF] dark:group-hover:bg-[#1A73FF] transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#1A73FF] dark:text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 dark:text-neutral-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-[#1A73FF] dark:group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </a>
                </RevealOnScroll>
              ))}
            </div>

            {/* Offices Card */}
            <RevealOnScroll delay={240}>
              <div className="p-6 bg-white dark:bg-[#12141C] rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm transition-colors duration-300">
                <h4 className="font-display font-bold text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider">
                  Our Office
                </h4>
                <div className="space-y-3">
                  {siteConfig.offices.map((office) => (
                    <div key={office.city} className="flex gap-3">
                      <MapPin className="w-4 h-4 text-[#1A73FF] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-neutral-200">
                          {office.city}, {office.country}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-neutral-400">
                          {office.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Fast Response SLA Callout */}
            <RevealOnScroll delay={300}>
              <div className="p-5 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Guaranteed 2-Hour Response
                  </div>
                  <div className="text-xs text-slate-500 dark:text-neutral-400">
                    Direct access to senior BPM consultants, no automated queues.
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Contact Assessment Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={100}>
              <div
                id="contact-form"
                className="bg-white dark:bg-[#12141C] rounded-[28px] sm:rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-8 md:p-10 transition-colors duration-300 scroll-mt-32"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3">
                      Message Received!
                    </h3>
                    <p className="text-slate-600 dark:text-neutral-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                      Thank you for reaching out. One of our senior experts will contact you within 2 business hours to schedule your free process assessment.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMsg("");
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          company: "",
                          jobTitle: "",
                          phone: "",
                          inquiryType: "",
                          employees: "",
                          message: "",
                          consent: false,
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white text-xs font-semibold transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        Schedule Your Free Assessment
                      </h3>
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20">
                        <Sparkles className="w-3 h-3" /> Zero Obligation
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all"
                          placeholder="Alex"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all"
                          placeholder="Johnson"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all"
                          placeholder="alex@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          Company <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all"
                          placeholder="Acme Corporation"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          Job Title
                        </label>
                        <input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all"
                          placeholder="Chief Operations Officer"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          What are you interested in? <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all cursor-pointer"
                        >
                          <option value="" className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">
                            Select an area
                          </option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type} className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="employees" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                          Company Size
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all cursor-pointer"
                        >
                          <option value="" className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">
                            Select company size
                          </option>
                          <option value="50-200" className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">50–200 employees</option>
                          <option value="201-1000" className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">201–1,000 employees</option>
                          <option value="1001-5000" className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">1,001–5,000 employees</option>
                          <option value="5000+" className="bg-white text-slate-900 dark:bg-[#12141C] dark:text-white">5,000+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5">
                        Tell us about your challenge
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#0E1017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73FF]/30 focus:border-[#1A73FF] dark:focus:ring-blue-500/30 dark:focus:border-blue-500 transition-all resize-none"
                        placeholder="Describe the process challenges you're facing, the scale of your operations, or any other context that would help us prepare for our conversation..."
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-[#1A73FF] focus:ring-blue-500 cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed cursor-pointer select-none">
                        I agree to the{" "}
                        <Link href="/legal/privacy" className="text-[#1A73FF] dark:text-blue-400 hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and consent to being contacted by Process IQ Tech regarding my inquiry.
                      </label>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                        <span>⚠️</span> {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting || !formData.consent}
                      className="inline-flex items-center justify-center gap-2 w-full h-12 px-7 rounded-full bg-[#1A73FF] text-white hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-neutral-100 font-semibold text-sm transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Schedule Free Assessment</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
