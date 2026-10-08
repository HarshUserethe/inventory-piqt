import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Twitter, Youtube, Facebook } from "@/components/ui/BrandIcons";
import { siteConfig, footerLinks } from "@/config/site";
import { certifications } from "@/config/homepage";

const socialIcons = {
  linkedin: Linkedin,
  twitter:  Twitter,
  youtube:  Youtube,
  facebook: Facebook,
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0A0B10] text-white" aria-label="Footer">

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Process IQ Tech — Home" className="inline-block mb-5">
              {/* Footer always uses white logo */}
              <Image
                src="/logo-white.png"
                alt="Process IQ Tech"
                width={635}
                height={166}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              We are a 24/7 global call center empowering businesses with dedicated, accent-neutral customer support and business specialists.
            </p>

            {/* Certifications */}
            <div className="mb-6">
              <p className="text-[0.7rem] font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                Certifications &amp; Compliance
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 text-[0.7rem] font-medium border border-white/8"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2.5">
              {(
                Object.entries(siteConfig.socialLinks) as [keyof typeof socialIcons, string][]
              ).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    aria-label={`Process IQ Tech on ${platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/6 border border-white/8 hover:bg-brand-600 hover:border-brand-600 flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-neutral-400 hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" aria-hidden="true" />
                <address className="text-sm text-neutral-400 not-italic">
                  {siteConfig.address.fullAddress}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/6">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {currentYear} Process IQ Tech, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
