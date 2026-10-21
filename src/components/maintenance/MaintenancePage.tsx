"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";

/* ---- Inline brand icon components (lucide removed these) ---- */
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Optional: pass an ISO date string to count down to it              */
/*  If omitted, the timer just shows elapsed time in a marquee style.  */
/* ------------------------------------------------------------------ */
const MAINTENANCE_END_ISO = ""; // e.g. "2026-10-15T06:00:00+05:30"

function useCountdown(target: string) {
  const calc = () => {
    if (!target) return null;
    const diff = new Date(target).getTime() - Date.now();
    if (diff <= 0) return { h: 0, m: 0, s: 0 };
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { h, m, s };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    if (!target) return;
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return time;
}

/* ---- Animated SVG gear ring ---- */
function GearRing({ size = 220, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="110" cy="110" r="96" stroke="rgba(26,115,255,0.15)" strokeWidth="1.5" />
      {/* Dashed track */}
      <circle
        cx="110"
        cy="110"
        r="80"
        stroke="rgba(26,115,255,0.25)"
        strokeWidth="1"
        strokeDasharray="8 6"
        className="maintenance-spin-slow"
      />
      {/* Inner glowing ring */}
      <circle cx="110" cy="110" r="60" stroke="rgba(26,115,255,0.40)" strokeWidth="2" />
      {/* Centre dot */}
      <circle cx="110" cy="110" r="6" fill="#1A73FF" opacity="0.9" />
      {/* Gear teeth — 12 teeth */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 110 + 62 * Math.cos(angle);
        const y1 = 110 + 62 * Math.sin(angle);
        const x2 = 110 + 76 * Math.cos(angle);
        const y2 = 110 + 76 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#1A73FF"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.7"
          />
        );
      })}
      {/* Small gear — top-right accent */}
      <g transform="translate(168, 52) rotate(0)">
        <circle cx="0" cy="0" r="18" stroke="rgba(26,115,255,0.30)" strokeWidth="1" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 19 * Math.cos(angle);
          const y1 = 19 * Math.sin(angle);
          const x2 = 25 * Math.cos(angle);
          const y2 = 25 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#60A5FA"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
          );
        })}
        <circle cx="0" cy="0" r="6" fill="rgba(26,115,255,0.5)" />
      </g>
    </svg>
  );
}

/* ---- Single stat digit block ---- */
function DigitBlock({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="maintenance-digit-card">
        <span className="maintenance-digit">{str}</span>
      </div>
      <span className="maintenance-digit-label">{label}</span>
    </div>
  );
}

/* ---- Progress steps ---- */
const STEPS = [
  { label: "Diagnosis", done: true },
  { label: "Updates", done: true },
  { label: "Testing", done: false },
  { label: "Go Live", done: false },
];

export default function MaintenancePage() {
  const countdown = useCountdown(MAINTENANCE_END_ISO);
  const [dots, setDots] = useState(".");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Animated ellipsis */
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);
    return () => clearInterval(id);
  }, []);

  /* Particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number; r: number; vx: number; vy: number; alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 115, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      /* Draw faint connecting lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(26, 115, 255, ${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* ── Maintenance page inline styles ── */}
      <style>{`
        /* keyframes */
        @keyframes maintenance-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes maintenance-spin-rev {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes maintenance-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }
        @keyframes maintenance-pulse-ring {
          0%   { box-shadow: 0 0 0 0   rgba(26,115,255,0.45); }
          70%  { box-shadow: 0 0 0 18px rgba(26,115,255,0);   }
          100% { box-shadow: 0 0 0 0   rgba(26,115,255,0);   }
        }
        @keyframes maintenance-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes maintenance-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes maintenance-progress {
          from { width: 0%; }
          to   { width: 68%; }
        }
        @keyframes maintenance-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }

        /* Gear ring SVG animation */
        .maintenance-spin-slow {
          transform-origin: center;
          animation: maintenance-spin-slow 22s linear infinite;
        }

        /* Page root */
        .maintenance-root {
          min-height: 100dvh;
          background: #0A0B10;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* canvas behind everything */
        .maintenance-canvas {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* Radial glow blobs */
        .maintenance-glow-l {
          position: absolute;
          top: -10%;
          left: -20%;
          width: 65vw;
          height: 75vh;
          background: radial-gradient(ellipse at center,
            rgba(10,79,179,0.38) 0%,
            rgba(10,79,179,0.14) 45%,
            transparent 75%);
          pointer-events: none;
          z-index: 1;
        }
        .maintenance-glow-r {
          position: absolute;
          bottom: -5%;
          right: -18%;
          width: 55vw;
          height: 65vh;
          background: radial-gradient(ellipse at center,
            rgba(26,115,255,0.22) 0%,
            rgba(26,115,255,0.06) 50%,
            transparent 75%);
          pointer-events: none;
          z-index: 1;
        }

        /* Grid overlay */
        .maintenance-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 2;
          pointer-events: none;
        }

        /* Content wrapper */
        .maintenance-wrapper {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 1.5rem 3rem;
          gap: 2rem;
        }

        /* Logo bar */
        .maintenance-logo {
          animation: maintenance-fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Gear float */
        .maintenance-gear-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: maintenance-float 7s ease-in-out infinite,
                     maintenance-fade-up 0.7s 0.1s ease-out forwards;
          opacity: 0;
        }
        .maintenance-gear-inner {
          position: absolute;
          animation: maintenance-spin-slow 18s linear infinite;
        }
        .maintenance-gear-inner-rev {
          position: absolute;
          animation: maintenance-spin-rev 14s linear infinite;
        }
        .maintenance-gear-pulse {
          position: absolute;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(26,115,255,0.12);
          animation: maintenance-pulse-ring 2.4s ease-out infinite;
        }

        /* Status badge */
        .maintenance-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1.1rem;
          background: rgba(26,115,255,0.10);
          border: 1px solid rgba(26,115,255,0.22);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #60A5FA;
          animation: maintenance-fade-up 0.6s 0.15s ease-out forwards;
          opacity: 0;
        }
        .maintenance-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #1A73FF;
          animation: maintenance-pulse-ring 1.8s ease-out infinite;
          flex-shrink: 0;
        }

        /* Headline */
        .maintenance-headline {
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #F5F6FA;
          text-align: center;
          max-width: 740px;
          animation: maintenance-fade-up 0.7s 0.2s ease-out forwards;
          opacity: 0;
        }
        .maintenance-headline .accent {
          background: linear-gradient(110deg,
            #1A73FF 0%, #60A5FA 35%, #ffffff 50%, #60A5FA 65%, #1A73FF 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: maintenance-shimmer 5s linear infinite;
          font-style: italic;
          font-family: var(--font-serif, Georgia, serif);
          font-weight: 400;
        }

        /* Subtext */
        .maintenance-sub {
          font-size: clamp(0.975rem, 2vw, 1.075rem);
          color: #A6ABBD;
          text-align: center;
          max-width: 560px;
          line-height: 1.72;
          animation: maintenance-fade-up 0.7s 0.3s ease-out forwards;
          opacity: 0;
        }

        /* Glass card */
        .maintenance-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1.5rem;
          padding: 2.25rem 2.5rem;
          width: 100%;
          max-width: 680px;
          animation: maintenance-fade-up 0.75s 0.35s ease-out forwards;
          opacity: 0;
        }

        /* Progress bar row */
        .maintenance-progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.6rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #A6ABBD;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .maintenance-progress-track {
          height: 6px;
          background: rgba(255,255,255,0.08);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .maintenance-progress-fill {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #1A73FF, #60A5FA);
          animation: maintenance-progress 2.4s 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          width: 0%;
          box-shadow: 0 0 12px rgba(26,115,255,0.5);
        }

        /* Step indicators */
        .maintenance-steps {
          display: flex;
          align-items: center;
          gap: 0;
          width: 100%;
          margin-bottom: 1.75rem;
        }
        .maintenance-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          gap: 0.5rem;
        }
        .maintenance-step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .maintenance-step-circle.done {
          background: rgba(26,115,255,0.18);
          border: 2px solid #1A73FF;
          color: #60A5FA;
        }
        .maintenance-step-circle.active {
          background: #1A73FF;
          border: 2px solid #60A5FA;
          color: #fff;
          box-shadow: 0 0 16px rgba(26,115,255,0.55);
          animation: maintenance-pulse-ring 2s ease-out infinite;
        }
        .maintenance-step-circle.pending {
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.12);
          color: #6B7085;
        }
        .maintenance-step-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6B7085;
          text-align: center;
        }
        .maintenance-step-label.done { color: #60A5FA; }
        .maintenance-step-label.active { color: #F5F6FA; }
        .maintenance-step-connector {
          flex: 1;
          height: 2px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 1.25rem;
          position: relative;
          top: -0.625rem;
        }
        .maintenance-step-connector.done {
          background: rgba(26,115,255,0.35);
        }

        /* Countdown */
        .maintenance-countdown {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        .maintenance-digit-card {
          background: rgba(26,115,255,0.10);
          border: 1px solid rgba(26,115,255,0.22);
          border-radius: 0.875rem;
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 24px rgba(26,115,255,0.12);
        }
        .maintenance-digit {
          font-size: 2.1rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #F5F6FA;
          font-variant-numeric: tabular-nums;
        }
        .maintenance-digit-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6B7085;
          margin-top: 0.4rem;
        }
        .maintenance-countdown-sep {
          font-size: 2rem;
          font-weight: 700;
          color: rgba(26,115,255,0.5);
          line-height: 1;
          padding-bottom: 1.5rem;
          animation: maintenance-blink 1s step-end infinite;
        }

        /* Contact row */
        .maintenance-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          animation: maintenance-fade-up 0.7s 0.5s ease-out forwards;
          opacity: 0;
        }
        .maintenance-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.625rem 1.25rem;
          border-radius: 9999px;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: #A6ABBD;
          font-size: 0.875rem;
          font-weight: 500;
          backdrop-filter: blur(8px);
          transition: all 0.22s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .maintenance-contact-link:hover {
          border-color: rgba(26,115,255,0.45);
          background: rgba(26,115,255,0.10);
          color: #F5F6FA;
          transform: translateY(-2px);
        }
        .maintenance-contact-link svg { color: #1A73FF; }

        /* Footer */
        .maintenance-footer {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 1.25rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          animation: maintenance-fade-up 0.7s 0.6s ease-out forwards;
          opacity: 0;
        }
        .maintenance-footer-socials {
          display: flex;
          gap: 0.75rem;
        }
        .maintenance-footer-social {
          width: 38px; height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: #6B7085;
          transition: all 0.22s ease;
          text-decoration: none;
        }
        .maintenance-footer-social:hover {
          border-color: rgba(26,115,255,0.45);
          background: rgba(26,115,255,0.10);
          color: #60A5FA;
          transform: translateY(-2px);
        }
        .maintenance-footer-text {
          font-size: 0.8125rem;
          color: #6B7085;
        }
        .maintenance-footer-brand {
          font-weight: 700;
          color: #F5F6FA;
        }
        .maintenance-footer-brand span { color: #1A73FF; }

        /* Responsive tweaks */
        @media (max-width: 600px) {
          .maintenance-card { padding: 1.75rem 1.25rem; }
          .maintenance-digit-card { width: 60px; height: 60px; }
          .maintenance-digit { font-size: 1.7rem; }
        }
      `}</style>

      {/* ── Root ── */}
      <div className="maintenance-root" role="main" aria-label="Site under maintenance">
        {/* Particle canvas */}
        <canvas ref={canvasRef} className="maintenance-canvas" aria-hidden="true" />

        {/* Background glows */}
        <div className="maintenance-glow-l" aria-hidden="true" />
        <div className="maintenance-glow-r" aria-hidden="true" />

        {/* Grid overlay */}
        <div className="maintenance-grid" aria-hidden="true" />

        {/* ──────────────── CONTENT ──────────────── */}
        <div className="maintenance-wrapper">

          {/* Logo */}
          <div className="maintenance-logo">
            <Link href="/" aria-label="Process IQ Tech Home" className="inline-flex items-center focus:outline-none">
              <span style={{ fontSize: "1.6rem", fontWeight: 700, color: "#F5F6FA", letterSpacing: "-0.025em" }}>
                ProcessIQ<span style={{ color: "#1A73FF" }}>Tech</span>
              </span>
            </Link>
          </div>

          {/* Animated gear */}
          <div className="maintenance-gear-wrap" style={{ width: 200, height: 200 }} aria-hidden="true">
            <div className="maintenance-gear-pulse" />
            <div className="maintenance-gear-inner" style={{ opacity: 0.55 }}>
              <GearRing size={200} />
            </div>
            <div className="maintenance-gear-inner-rev" style={{ opacity: 0.30 }}>
              <GearRing size={150} />
            </div>
            {/* Centre icon */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", zIndex: 5 }}>
              <circle cx="24" cy="24" r="23" fill="rgba(26,115,255,0.15)" stroke="rgba(26,115,255,0.35)" strokeWidth="1.5" />
              {/* Wrench */}
              <path d="M30 10C26.5 10 24 12.5 24 16c0 0.9.2 1.8.5 2.5L14 29a2 2 0 0 0 0 2.8L16.2 34a2 2 0 0 0 2.8 0l10.5-10.5c.7.3 1.6.5 2.5.5 3.5 0 6-2.5 6-6 0-.8-.2-1.6-.4-2.2l-3.2 3.2-2.8-.8-.8-2.8 3.2-3.2C33.4 11.9 31.8 10 30 10z"
                fill="#1A73FF" opacity="0.9" />
            </svg>
          </div>

          {/* Status badge */}
          <div className="maintenance-badge" role="status" aria-live="polite">
            <span className="maintenance-badge-dot" aria-hidden="true" />
            System Maintenance In Progress{dots}
          </div>

          {/* Headline */}
          <h1 className="maintenance-headline">
            We&apos;re Upgrading{" "}
            <span className="accent">Our Systems</span>
          </h1>

          {/* Sub-copy */}
          <p className="maintenance-sub">
            We&apos;re performing scheduled maintenance to improve performance,
            security, and reliability. We&apos;ll be back online shortly —{" "}
            <strong style={{ color: "#F5F6FA" }}>thank you for your patience.</strong>
          </p>

          {/* ── Glass card ── */}
          <div className="maintenance-card">

            {/* Progress bar */}
            <div className="maintenance-progress-label">
              <span>Maintenance Progress</span>
              <span style={{ color: "#60A5FA" }}>68%</span>
            </div>
            <div className="maintenance-progress-track">
              <div className="maintenance-progress-fill" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} />
            </div>

            {/* Step indicators */}
            <div className="maintenance-steps" role="list" aria-label="Maintenance steps">
              {STEPS.map((step, i) => {
                const isLast = i === STEPS.length - 1;
                const isActive = !step.done && (i === 0 || STEPS[i - 1].done);
                const state = step.done ? "done" : isActive ? "active" : "pending";
                return (
                  <div key={step.label} style={{ display: "flex", flex: 1, alignItems: "flex-start" }} role="listitem">
                    <div className="maintenance-step">
                      <div className={`maintenance-step-circle ${state}`}>
                        {step.done ? (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2.5 7L5.5 10L11.5 4" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <span>{i + 1}</span>
                        )}
                      </div>
                      <span className={`maintenance-step-label ${state}`}>{step.label}</span>
                    </div>
                    {!isLast && (
                      <div className={`maintenance-step-connector ${step.done ? "done" : ""}`} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Countdown or fallback */}
            {countdown ? (
              <div>
                <p style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7085", marginBottom: "1rem" }}>
                  Estimated Time Remaining
                </p>
                <div className="maintenance-countdown">
                  <DigitBlock value={countdown.h} label="Hours" />
                  <span className="maintenance-countdown-sep" aria-hidden="true">:</span>
                  <DigitBlock value={countdown.m} label="Minutes" />
                  <span className="maintenance-countdown-sep" aria-hidden="true">:</span>
                  <DigitBlock value={countdown.s} label="Seconds" />
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "0.25rem 0" }}>
                <p style={{ fontSize: "0.8125rem", color: "#6B7085" }}>
                  We expect to be back very soon. Check again in a few moments.
                </p>
              </div>
            )}
          </div>

          {/* Contact links */}
          <div className="maintenance-contacts" aria-label="Contact us during maintenance">
            <a
              href="mailto:support@processiqtechconsulting.com"
              className="maintenance-contact-link"
              aria-label="Email our support team"
            >
              <Mail size={15} aria-hidden="true" />
              support@processiqtechconsulting.com
            </a>
            <a
              href="tel:+919515783300"
              className="maintenance-contact-link"
              aria-label="Call us"
            >
              <Phone size={15} aria-hidden="true" />
              +91 9515783300
            </a>
            <a
              href="https://linkedin.com/company/processiqtech"
              target="_blank"
              rel="noopener noreferrer"
              className="maintenance-contact-link"
              aria-label="Follow us on LinkedIn for updates"
            >
              <ArrowRight size={14} aria-hidden="true" />
              Get Updates on LinkedIn
            </a>
          </div>

        </div>

        {/* ──────────────── FOOTER ──────────────── */}
        <footer className="maintenance-footer" role="contentinfo">
          <div className="maintenance-footer-socials">
            <a
              href="https://linkedin.com/company/processiqtech"
              target="_blank"
              rel="noopener noreferrer"
              className="maintenance-footer-social"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://twitter.com/processiqtech"
              target="_blank"
              rel="noopener noreferrer"
              className="maintenance-footer-social"
              aria-label="Twitter / X"
            >
              <TwitterIcon size={16} />
            </a>
          </div>
          <div className="maintenance-footer-text">
            <span className="maintenance-footer-brand">
              ProcessIQ<span>Tech</span>
            </span>{" "}
            &copy; {new Date().getFullYear()} · All rights reserved
          </div>
          <div className="maintenance-footer-text" style={{ fontSize: "0.75rem", color: "#404455" }}>
            Intelligent Business Process Management · Hyderabad, India
          </div>
        </footer>

      </div>
    </>
  );
}
