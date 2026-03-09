"use client";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <nav className="nav-island">
            <a href="#" className="flex items-center gap-1 shrink-0">
              <span className="text-2xl font-extrabold text-[var(--color-accent)]">&gt;</span>
              <span className="text-lg font-bold tracking-tight">job</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-foreground)] transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-foreground)] transition-colors">How it Works</a>
              <a href="#results" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-foreground)] transition-colors">Results</a>
            </div>

            <a href="#download" className="btn-planar small">
              Get Extension
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="section pt-32 md:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display reveal-up">
              Capture jobs
            </h1>
            <h2 className="heading-display heading-muted reveal-up-d1">
              Automate the rest
            </h2>
            <p className="text-lead max-w-2xl mx-auto mt-6 reveal-up-d2">
              A Chrome extension that extracts job listings from any website and sends them to your AI workflow for instant, personalized analysis.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10 reveal-up-d3">
              <a href="#download" className="btn-planar">
                Download Extension
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See How It Works
              </a>
            </div>
          </div>

          {/* Bento Hero */}
          <div className="mt-16 bento-grid grid-cols-1 md:grid-cols-3 reveal-scale">
            {/* Main card — product screenshot */}
            <div className="bento-card md:col-span-2 bg-[var(--color-surface-1)] p-6 md:p-10 flex items-center justify-center min-h-[320px]">
              <div className="w-full max-w-lg">
                <HeroMockup />
              </div>
            </div>

            {/* Side stack */}
            <div className="flex flex-col gap-4">
              <div className="bento-card bg-[var(--color-foreground)] text-white p-6 flex-1 flex flex-col justify-between">
                <div className="text-sm opacity-60">Time saved</div>
                <div className="metric-value mt-2">15h</div>
                <div className="text-sm opacity-60 mt-1">per week</div>
              </div>
              <div className="bento-card bg-[var(--color-surface-1)] p-6 flex-1 flex flex-col justify-between">
                <div className="text-sm text-[var(--color-text-muted)]">Platforms</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["pracuj.pl", "LinkedIn", "NoFluff", "Indeed"].map((p) => (
                    <span key={p} className="tile text-xs font-medium">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO TEXT (Planar style) ===== */}
      <section className="section compact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="intro-text">
            <span>Your personal AI job pipeline.</span>{" "}
            <span className="muted">
              Not another job board. Not a bloated platform. Just a simple tool that captures listings and lets your AI do the thinking.
            </span>
          </div>
        </div>
      </section>

      {/* ===== LOGO MARQUEE ===== */}
      <section className="section compact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-medium text-center mb-8">
            Works with your favorite job platforms
          </p>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16">
                  {["pracuj.pl", "LinkedIn", "NoFluffJobs", "Indeed", "JustJoin.it", "Bulldogjob", "RocketJobs"].map((name) => (
                    <span key={`${setIdx}-${name}`} className="text-lg md:text-xl font-semibold tracking-tight whitespace-nowrap opacity-30 hover:opacity-60 transition-opacity">
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES BENTO ===== */}
      <section id="features" className="section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl">Built for speed</h2>
            <p className="text-lead mt-4 max-w-xl mx-auto">
              Everything you need to automate your job search in one lightweight extension.
            </p>
          </div>

          <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "One-Click Capture",
                desc: "Navigate to any job posting. Click the button. Title, description, URL — extracted instantly.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
                title: "n8n Integration",
                desc: "Webhook-powered pipeline sends data directly to your custom AI workflow.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "AI Analysis",
                desc: "GPT evaluates fit, generates cover letters, and tracks trends automatically.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Privacy First",
                desc: "Data goes to your webhook only. No tracking, no analytics, no third parties.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                ),
                title: "Made for Poland",
                desc: "Optimized for Pracuj.pl, NoFluffJobs, JustJoin.it and the Polish market.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Clean JSON Output",
                desc: "Structured data ready for GPT, Notion, Google Sheets, or any integration.",
              },
            ].map((f, i) => (
              <div key={i} className="feature-box flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-2)] flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="section bg-[var(--color-surface-1)]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-medium mb-4">How it works</p>
            <h2 className="heading-display text-4xl md:text-5xl">Three steps</h2>
            <p className="text-lead mt-4 max-w-lg mx-auto">
              From installation to AI-powered analysis in under 2 minutes.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {[
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
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="step-number">{step.num}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS / METRICS ===== */}
      <section id="results" className="section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl">The numbers</h2>
            <p className="text-lead mt-4 max-w-lg mx-auto">
              Real impact on your job search workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bento-card bg-[var(--color-surface-1)] p-8 md:p-10 text-center">
              <div className="metric-value">90%</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-2 font-medium">Less manual data entry</div>
            </div>
            <div className="bento-card bg-[var(--color-foreground)] text-white p-8 md:p-10 text-center">
              <div className="metric-value">15h</div>
              <div className="text-sm opacity-60 mt-2 font-medium">Saved per week</div>
            </div>
            <div className="bento-card bg-[var(--color-surface-1)] p-8 md:p-10 text-center">
              <div className="metric-value">1-click</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-2 font-medium">From listing to AI analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="download" className="section">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="cta-section">
            <p className="text-xs uppercase tracking-widest opacity-50 font-medium mb-6">Free & open source</p>
            <h2 className="heading-display text-3xl md:text-5xl">
              Ready to snipe your<br />dream job?
            </h2>
            <p className="text-lead mt-4 opacity-70 max-w-lg mx-auto" style={{ color: "white" }}>
              Download the extension, connect your n8n, and start automating your job search. Built by a student, for students.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <a
                href="https://github.com/pugging/hr-sniper-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-planar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Download from GitHub
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1">
                <span className="text-xl font-extrabold text-[var(--color-accent)]">&gt;</span>
                <span className="font-bold">job</span>
              </a>
              <span className="text-xs text-[var(--color-text-muted)] italic">by europa</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
              <span>Made for stars to shine brighter</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">&copy; 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="float-soft">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] border border-[var(--color-border)] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 mx-4">
            <div className="bg-[var(--color-surface-1)] rounded-lg px-3 py-1.5 text-xs text-[var(--color-text-muted)] text-center">
              pracuj.pl/praca/frontend-developer
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-1">Job listing detected</div>
              <div className="font-semibold">Frontend Developer</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-0.5">TechCorp Sp. z o.o. &middot; Warszawa</div>
            </div>
            <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Ready
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["React", "TypeScript", "Next.js", "8,000–12,000 PLN"].map((tag) => (
              <span key={tag} className="tile text-xs">{tag}</span>
            ))}
          </div>

          {/* Action button */}
          <button className="w-full bg-[var(--color-foreground)] text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Analyze with AI
          </button>

          {/* Status bar */}
          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <div className="accent-dot" />
            Connected to n8n webhook
          </div>
        </div>
      </div>
    </div>
  );
}
