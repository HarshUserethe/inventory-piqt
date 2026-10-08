"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  scrolled?: boolean;
}

export function ThemeToggle({ className, scrolled = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-full",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300",
        scrolled
          ? "hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300"
          : "hover:bg-white/10 text-white/80",
        className
      )}
    >
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)",
        }}
      >
        <Sun className="w-4.5 h-4.5" />
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0)",
        }}
      >
        <Moon className="w-4.5 h-4.5" />
      </span>
    </button>
  );
}
