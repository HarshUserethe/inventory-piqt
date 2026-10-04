import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Twitter, Youtube, Facebook } from "@/components/ui/BrandIcons";
import { siteConfig, footerLinks } from "@/config/site";
import { certifications } from "@/config/homepage";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  facebook: Facebook,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-neutral-800">
        <div className="container-custom py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to transform your operations?
              </h3>
              <p className="text-neutral-400 text-base">
                Schedule a free 60-minute process assessment with one of our senior experts.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline-white whitespace-nowrap">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/logo-white.png"
                alt="Process IQ Tech"
                width={635}
                height={166}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered Business Process Management solutions for global enterprises. Trusted by 500+ clients in 40+ countries.
            </p>
            
            {/* Certifications */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Certifications & Compliance
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {(Object.entries(siteConfig.socialLinks) as [keyof typeof socialIcons, string][]).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    aria-label={platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <address className="text-sm text-neutral-400 not-italic">
                  {siteConfig.address.street},<br />
                  {siteConfig.address.city}, {siteConfig.address.state}<br />
                  {siteConfig.address.country}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {currentYear} Process IQ Tech, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
