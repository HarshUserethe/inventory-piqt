import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
  centered?: boolean;
}

export function PageHero({
  badge,
  title,
  titleAccent,
  description,
  breadcrumbs,
  className,
  centered = false,
}: PageHeroProps) {
  return (
    <section
      className={cn("relative pt-32 pb-20 overflow-hidden", className)}
      style={{ background: "#0A0B10" }}
      aria-label="Page hero"
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #E11D2E 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #5B5BFF 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className={cn("container-custom relative z-10", centered && "text-center")}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 mb-6 text-sm", centered && "justify-center")}>
            <Link href="/" className="flex items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" aria-hidden="true" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-neutral-400 hover:text-neutral-200 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-neutral-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className={cn("mb-5", centered && "flex justify-center")}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          className={cn(
            "font-display font-extrabold text-white leading-[1.05] tracking-tight mb-5 max-w-5xl",
            centered && "mx-auto"
          )}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {title}{" "}
          {titleAccent && (
            <span className="gradient-text">{titleAccent}</span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p
            className={cn(
              "text-neutral-300 leading-relaxed max-w-3xl",
              centered && "mx-auto"
            )}
            style={{ fontSize: "1.0625rem" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
