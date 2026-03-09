"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

/* ===== SHARED COMPONENTS ===== */

function PlanarButton({
  href,
  children,
  className = "",
  small = false,
  inverted = false,
  ...props
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  small?: boolean;
  inverted?: boolean;
  target?: string;
  rel?: string;
}) {
  const cls = `btn ${small ? "small" : ""} ${inverted ? "inverted" : ""} ${className}`.trim();
  const inner = (
    <>
      <span className="btn-label">{children}</span>
      <span className="btn-hover-blob-wrap">
        <span className="btn-hover-blob" />
      </span>
    </>
  );
  if (href)
    return (
      <a href={href} className={cls} {...props}>
        {inner}
      </a>
    );
  return (
    <button className={cls} {...props}>
      {inner}
    </button>
  );
}

const Arrow = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

/* Planar-style sun icon */
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 A 7 7 0 0 0 5 12 A 7 7 0 0 0 12 19 A 7 7 0 0 0 19 12 A 7 7 0 0 0 12 5 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"
    />
  </svg>
);

/* Planar-style moon icon */
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.019 21.998C9.29 21.998 5.706 19.905 3.987 16.325C2.831 13.917 2.682 11.203 3.568 8.683C4.454 6.163 6.268 4.139 8.676 2.983C10.219 2.242 11.937 1.91 13.652 2.023L14.034 3.024C10.611 4.423 9.031 9.71 10.574 12.925C11.967 15.826 15.984 18.924 20.585 16.937L21.192 17.732C20.209 19.139 18.873 20.274 17.331 21.014C15.939 21.681 14.467 21.997 13.019 21.998Z"
      fill="currentColor"
    />
  </svg>
);

/* ===== MAIN PAGE ===== */

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeReady, setThemeReady] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  /* --- Theme init --- */
  useEffect(() => {
    const stored = window.localStorage.getItem("job-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
    setThemeReady(true);
  }, []);

  /* --- Theme persistence --- */
  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("job-theme", theme);
  }, [theme, themeReady]);

  /* --- Lenis smooth scroll --- */
  useEffect(() => {
    let rafId = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.95,
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);
    };
    init();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  /* --- GSAP ScrollTrigger: reveal + parallax + stagger --- */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let st: typeof import("gsap/ScrollTrigger")["ScrollTrigger"] | null = null;
    const tweens: gsap.core.Tween[] = [];
    document.documentElement.classList.add("motion-ready");

    const setup = async () => {
      const mod = await import("gsap/ScrollTrigger");
      st = mod.ScrollTrigger;
      gsap.registerPlugin(st);

      /* reveal */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        tweens.push(
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 42 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 50%",
                once: true,
              },
            },
          ),
        );
      });

      /* parallax */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        tweens.push(
          gsap.fromTo(
            el,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          ),
        );
      });

      /* stagger children */
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((parent) => {
        const children = Array.from(parent.children) as HTMLElement[];
        children.forEach((child, i) => {
          tweens.push(
            gsap.fromTo(
              child,
              { autoAlpha: 0, y: 32 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: parent,
                  start: "top 85%",
                  once: true,
                },
              },
            ),
          );
        });
      });
    };

    setup();

    return () => {
      document.documentElement.classList.remove("motion-ready");
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
      st?.getAll().forEach((s) => s.kill());
    };
  }, []);

  /* --- Mouse parallax in hero --- */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = hero.querySelectorAll<HTMLElement>("[data-mouse-parallax]");
    let rafId = 0;
    let mx = 0;
    let my = 0;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const tick = () => {
      targets.forEach((el) => {
        const strength = parseFloat(el.dataset.mouseParallax || "12");
        const x = mx * strength;
        const y = my * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      rafId = requestAnimationFrame(tick);
    };

    hero.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleTheme = () =>
    setTheme((p) => (p === "light" ? "dark" : "light"));

  return (
    <div className="min-h-screen">
      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <nav className="nav-island">
            <a href="#" className="flex items-center gap-1 shrink-0">
              <span className="text-2xl font-extrabold text-[var(--color-accent)]">
                &gt;
              </span>
              <span className="text-lg font-bold tracking-tight">job</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {["Features", "How it Works", "Results"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Planar-style theme toggle */}
            <div
              className="color-scheme-toggle"
              onClick={toggleTheme}
              role="button"
              tabIndex={0}
              aria-label="Toggle color theme"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleTheme();
              }}
            >
              <div className="color-scheme-item light-toggle">
                <div className="color-scheme-icon">
                  <SunIcon />
                </div>
              </div>
              <div className="color-scheme-item dark-toggle">
                <div className="color-scheme-icon">
                  <MoonIcon />
                </div>
              </div>
              <div
                className="color-scheme-indicator"
                data-active={theme}
              />
            </div>

            <PlanarButton href="#download" small>
              Get Extension
            </PlanarButton>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="section pt-32 md:pt-44 pb-8"
        data-reveal
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display reveal-up">Capture jobs</h1>
            <h2 className="heading-display heading-muted reveal-up-d1">
              Automate the rest
            </h2>
            <p className="text-lead max-w-2xl mx-auto mt-6 reveal-up-d2">
              A Chrome extension that extracts job listings from any website and
              sends them to your AI workflow for instant, personalized analysis.
            </p>
            <div className="flex items-center justify-center gap-3 mt-10 reveal-up-d3">
              <PlanarButton href="#download">
                Download Extension <Arrow />
              </PlanarButton>
              <a href="#how-it-works" className="btn-ghost">
                See How It Works
              </a>
            </div>
          </div>

          {/* Bento Hero */}
          <div className="mt-16 bento-grid grid-cols-1 md:grid-cols-3 reveal-scale">
            <div className="bento-card md:col-span-2 bg-[var(--color-surface-1)] p-6 md:p-10 flex items-center justify-center min-h-[340px]">
              <div
                className="w-full max-w-lg"
                data-mouse-parallax="8"
              >
                <HeroMockup />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bento-card bg-[#191919] text-white p-6 flex-1 flex flex-col justify-between">
                <div className="text-sm opacity-50 font-medium">
                  Time saved
                </div>
                <div className="metric-value mt-2">15h</div>
                <div className="text-sm opacity-50 mt-1 font-bold">per week</div>
              </div>
              <div className="bento-card platforms-card bg-[var(--color-surface-1)] text-[var(--color-foreground)] p-6 flex-1 flex flex-col justify-between">
                <div className="platforms-label text-sm font-medium">
                  Platforms
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["pracuj.pl", "LinkedIn", "NoFluff", "Indeed"].map((p) => (
                    <span key={p} className="tile text-xs font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHOTO STRIP ===== */}
      <section className="section compact" data-reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bento-card photo-card" data-parallax>
              <Image
                src="/images/hero-abstract.png"
                alt="Abstract marble texture with warm gold tones"
                width={800}
                height={600}
                className="photo-media"
                priority
              />
              <div className="photo-overlay-card">
                <div className="text-xs text-[var(--color-text-muted)]">
                  Activity
                </div>
                <div className="font-semibold tracking-tight">December</div>
                <div className="photo-dots-grid" />
              </div>
            </div>
            <div className="bento-card photo-card" data-parallax>
              <Image
                src="/images/hero-desk.png"
                alt="Modern desk workspace with warm ambient lighting"
                width={800}
                height={600}
                className="photo-media"
              />
              <div className="photo-overlay-metric">
                <div className="text-sm opacity-80">Revenue</div>
                <div className="text-5xl font-semibold tracking-tight mt-1">
                  76% ↑
                </div>
                <div className="text-sm opacity-80 mt-2 max-w-[260px]">
                  Year-on-year improvement with AI-assisted job search.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="section compact" data-reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="intro-text">
            <span>Your personal AI job pipeline.</span>{" "}
            <span className="muted">
              Not another job board. Not a bloated platform. Just a simple tool
              that captures listings and lets your AI do the thinking.
            </span>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="section compact" data-reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-medium text-center mb-8">
            Works with your favorite job platforms
          </p>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                  {[
                    "pracuj.pl",
                    "LinkedIn",
                    "NoFluffJobs",
                    "Indeed",
                    "JustJoin.it",
                    "Bulldogjob",
                    "RocketJobs",
                  ].map((n) => (
                    <span
                      key={`${i}-${n}`}
                      className="text-lg md:text-xl font-semibold tracking-tight whitespace-nowrap opacity-25 hover:opacity-50 transition-opacity"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="section" data-reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl">
              Built for speed
            </h2>
            <p className="text-lead mt-4 max-w-xl mx-auto">
              Everything you need to automate your job search in one lightweight
              extension.
            </p>
          </div>

          <div
            className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            data-stagger
          >
            {features.map((f, i) => (
              <div key={i} className="feature-box flex flex-col gap-4">
                <div className="boxed-icon">{f.icon}</div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how-it-works"
        className="section bg-[var(--color-surface-1)]"
        data-reveal
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-medium mb-4">
              How it works
            </p>
            <h2 className="heading-display text-4xl md:text-5xl">
              Three steps
            </h2>
            <p className="text-lead mt-4 max-w-lg mx-auto">
              From installation to AI-powered analysis in under 2 minutes.
            </p>
          </div>

          <div className="flex flex-col gap-12" data-stagger>
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="step-number">{s.num}</div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METRICS ===== */}
      <section id="results" className="section" data-reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl">
              The numbers
            </h2>
            <p className="text-lead mt-4 max-w-lg mx-auto">
              Real impact on your job search workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3" data-stagger>
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`bento-card p-8 md:p-10 text-center ${m.dark ? "bg-[#191919] text-white" : "bg-[var(--color-surface-1)] text-[var(--color-foreground)]"}`}
              >
                <div className="metric-value">{m.value}</div>
                <div
                  className={`text-sm mt-2 font-medium ${m.dark ? "opacity-50" : "text-[var(--color-text-muted)]"}`}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="download" className="section" data-reveal>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="cta-section">
            <p className="text-xs uppercase tracking-widest opacity-40 font-medium mb-6">
              Free &amp; open source
            </p>
            <h2 className="heading-display text-3xl md:text-5xl">
              Ready to snipe your
              <br />
              dream job?
            </h2>
            <p
              className="text-lead mt-4 opacity-60 max-w-lg mx-auto"
              style={{ color: "white" }}
            >
              Download the extension, connect your n8n, and start automating
              your job search. Built by a student, for students.
            </p>
            <div className="flex items-center justify-center gap-3 mt-10">
              <PlanarButton
                href="https://github.com/pugging/hr-sniper-landing"
                target="_blank"
                rel="noopener noreferrer"
                inverted
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Download from GitHub
                <Arrow />
              </PlanarButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-start gap-0.5">
              <a href="#" className="flex items-center gap-1">
                <span className="text-xl font-extrabold text-[var(--color-accent)]">
                  &gt;
                </span>
                <span className="font-bold tracking-tight">job</span>
              </a>
              <span className="text-xs text-[var(--color-text-muted)] italic pl-[1.1em]">
                by europa
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
              <span>Made for stars to shine brighter</span>
              <span className="hidden md:inline">&middot;</span>
              <span className="hidden md:inline">&copy; 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ===== DATA ===== */

const features = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "One-Click Capture",
    desc: "Navigate to any job posting. Click the button. Title, description, URL — extracted instantly.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
    title: "n8n Integration",
    desc: "Webhook-powered pipeline sends data directly to your custom AI workflow.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "AI Analysis",
    desc: "GPT evaluates fit, generates cover letters, and tracks trends automatically.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Privacy First",
    desc: "Data goes to your webhook only. No tracking, no analytics, no third parties.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="10" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C7.6 2 4 5.4 4 9.5 4 14.28 12 22 12 22s8-7.72 8-12.5C20 5.4 16.4 2 12 2z"
        />
      </svg>
    ),
    title: "Made for Poland",
    desc: "Optimized for Pracuj.pl, NoFluffJobs, JustJoin.it and the Polish market.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Clean JSON Output",
    desc: "Structured data ready for GPT, Notion, Google Sheets, or any integration.",
  },
];

const steps = [
  {
    num: "01",
    title: "Install the extension",
    desc: "Download from GitHub and add to Chrome. Set your n8n webhook URL once — done forever.",
  },
  {
    num: "02",
    title: "Browse job listings",
    desc: "Navigate to any job posting on Pracuj.pl, LinkedIn, NoFluffJobs, Indeed — or any website.",
  },
  {
    num: "03",
    title: "Click & automate",
    desc: "Hit the analyze button. Job data flies to n8n where your AI workflow generates insights instantly.",
  },
];

const metrics = [
  { value: "90%", label: "Less manual data entry", dark: false },
  { value: "15h", label: "Saved per week", dark: true },
  { value: "1-click", label: "From listing to AI analysis", dark: false },
];

/* ===== HERO MOCKUP ===== */

function HeroMockup() {
  return (
    <div className="float-soft">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-[var(--color-border)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-background)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-surface-2)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-surface-2)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-surface-2)]" />
          <div className="flex-1 mx-4">
            <div className="bg-[var(--color-surface-1)] rounded-lg px-3 py-1.5 text-xs text-[var(--color-text-muted)] text-center font-mono">
              pracuj.pl/praca/frontend-developer
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium mb-1">
                Job listing detected
              </div>
              <div className="font-semibold tracking-tight text-[#191919]">
                Frontend Developer
              </div>
              <div className="text-sm text-[var(--color-text-muted)] mt-0.5">
                TechCorp Sp. z o.o. &middot; Warszawa
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Ready
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {["React", "TypeScript", "Next.js", "8–12k PLN"].map((t) => (
              <span key={t} className="tile text-xs font-medium">
                {t}
              </span>
            ))}
          </div>

          <button className="w-full bg-[#191919] text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Analyze with AI
          </button>

          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <div className="accent-dot" />
            Connected to n8n webhook
          </div>
        </div>
      </div>
    </div>
  );
}
