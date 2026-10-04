import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span className={cn("section-badge", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  badge?: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  accent,
  description,
  centered = false,
  className,
  titleClassName,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {badge && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <SectionBadge>{badge}</SectionBadge>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4",
          light ? "text-white" : "text-neutral-900",
          titleClassName
        )}
      >
        {title}{" "}
        {accent && (
          <span className={light ? "text-primary-300" : "gradient-text"}>
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-4xl",
            light ? "text-neutral-300" : "text-neutral-500",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
