import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  /** Use gradient text on the accent */
  gradientAccent?: boolean;
}

export function SectionHeading({
  badge,
  title,
  accent,
  description,
  centered = false,
  className,
  gradientAccent = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {badge && (
        <p className="eyebrow mb-4" aria-label={`Section: ${badge}`}>
          {centered && <span className="eyebrow-line mx-auto mr-2" />}
          {badge}
        </p>
      )}
      <h2 className="font-display font-bold text-[var(--text-primary)] mb-4">
        {title}{" "}
        {accent && (
          <span className={cn(gradientAccent ? "gradient-text" : "text-brand-600 dark:text-brand-400")}>
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p className={cn("text-[var(--text-secondary)] leading-relaxed max-w-[65ch]", centered && "mx-auto")} style={{ fontSize: "1.0625rem" }}>
          {description}
        </p>
      )}
    </div>
  );
}
