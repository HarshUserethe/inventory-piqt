"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import Link from "next/link";

const inquiryTypes = [
  "BPM Consulting",
  "Process Automation",
  "Managed BPO Services",
  "Process Analytics",
  "Partnership Inquiry",
  "General Inquiry",
];

export default function ContactClient() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setSubmitting(false);
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
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/60 to-neutral-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/8 rounded-full blur-[120px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              Contact Us
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
              Let&apos;s Start Your{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Transformation Journey
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl">
              Reach out to our team for a free process assessment, partnership inquiry, or just to learn more about how we can help your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact info */}
            <div className="space-y-6">
              <RevealOnScroll>
                <SectionHeading
                  badge="Get In Touch"
                  title="Talk to Our"
                  accent="Experts"
                  description="Our team is available Mon–Fri, 8am–8pm EST. Global offices provide 24/7 coverage."
                />
              </RevealOnScroll>

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
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-card transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                      <item.icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-primary-600 transition-colors">{item.value}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{item.sub}</div>
                    </div>
                  </a>
                </RevealOnScroll>
              ))}

              <RevealOnScroll delay={200}>
                <div className="p-5 bg-white rounded-2xl border border-neutral-200">
                  <h4 className="font-display font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">
                    Our Offices
                  </h4>
                  <div className="space-y-3">
                    {siteConfig.offices.map((office) => (
                      <div key={office.city} className="flex gap-3">
                        <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-neutral-800">
                            {office.city}, {office.country}
                          </div>
                          <div className="text-xs text-neutral-400">{office.type}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: Form */}
            <RevealOnScroll delay={100} className="lg:col-span-2">
              <div id="contact-form" className="bg-white rounded-3xl border border-neutral-200 shadow-card p-8 md:p-10 scroll-mt-24">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-neutral-900 mb-3">
                      Message Received!
                    </h3>
                    <p className="text-neutral-500 text-sm max-w-md mx-auto">
                      Thank you for reaching out. One of our senior experts will contact you within 2 business hours to schedule your free process assessment.
                    </p>
                    <Link href="/services" className="inline-flex items-center gap-2 mt-6 text-primary-600 text-sm font-semibold hover:text-primary-800 transition-colors">
                      Explore our services while you wait →
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <h3 className="font-display font-bold text-xl text-neutral-900 mb-6">
                      Schedule Your Free Assessment
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="firstName" name="firstName" type="text" required
                          value={formData.firstName} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Alex"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="lastName" name="lastName" type="text" required
                          value={formData.lastName} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Johnson"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="alex@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Company <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="company" name="company" type="text" required
                          value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Acme Corporation"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-neutral-700 mb-1.5">Job Title</label>
                        <input
                          id="jobTitle" name="jobTitle" type="text"
                          value={formData.jobTitle} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Chief Operations Officer"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Area of Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="inquiryType" name="inquiryType" required
                          value={formData.inquiryType} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select an area</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="employees" className="block text-sm font-medium text-neutral-700 mb-1.5">Company Size</label>
                        <select
                          id="employees" name="employees"
                          value={formData.employees} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select company size</option>
                          <option value="50-200">50–200 employees</option>
                          <option value="201-1000">201–1,000 employees</option>
                          <option value="1001-5000">1,001–5,000 employees</option>
                          <option value="5000+">5,000+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Tell us about your challenge
                      </label>
                      <textarea
                        id="message" name="message" rows={4}
                        value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Describe your process challenges, operational scale, or any context that would help us prepare..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="consent" name="consent" type="checkbox" required
                        checked={formData.consent} onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="text-xs text-neutral-500 leading-relaxed">
                        I agree to the{" "}
                        <a href="/legal/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>{" "}
                        and consent to being contacted by Process IQ Tech.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting || !formData.consent}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitting ? (
                        <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Submitting...</>
                      ) : (
                        <><Send className="w-4 h-4" />Schedule Free Assessment</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
