import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] relative overflow-hidden">
      {/* ===== NAVIGATION ===== */}
      <header className="relative z-50 px-6 md:px-12 lg:px-20 pt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <nav className="nav-container flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="logo-mark flex items-center gap-1 shrink-0">
              <span className="chevron text-2xl font-extrabold text-[#f97316]">
                &gt;
              </span>
              <span className="text-[#1a1a1a]">job</span>
            </a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors font-medium"
              >
                How it Works
              </a>
              <a
                href="#results"
                className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors font-medium"
              >
                Results
              </a>
            </div>

            {/* CTA */}
            <a href="#download" className="btn-primary text-sm py-2.5 px-5">
              Get Extension
              <span className="arrow text-xs">→</span>
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div className="badge badge-warm mb-6">
              <span className="w-2 h-2 bg-[#f97316] rounded-full" />
              AI-powered job capture
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Capture jobs.
              <br />
              <span className="gradient-text">Automate</span> the rest.
            </h1>

            <p className="text-lg md:text-xl text-[#5a5a5a] max-w-lg mb-10 leading-relaxed">
              A Chrome extension that extracts job listings from any website and
              sends them to your AI workflow for instant, personalized analysis.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#download" className="btn-primary">
                Download Extension
                <span className="arrow">→</span>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: Product Mockups */}
          <div className="relative animate-fade-in-up-delay-2">
            {/* Main product image — dashboard */}
            <div className="float-card animate-float relative z-10">
              <Image
                src="/dashboard.png"
                alt="Job Analytics Dashboard showing captured jobs and weekly activity"
                width={600}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating extension popup */}
            <div className="absolute -left-8 md:-left-12 bottom-4 md:bottom-8 w-40 md:w-52 z-20 animate-float-delayed">
              <div className="float-card">
                <Image
                  src="/extension-popup.png"
                  alt="<job Chrome extension popup"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative stat chip */}
            <div className="absolute -top-4 right-4 md:right-8 z-20 animate-fade-in-up-delay-3">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-lg border border-[rgba(0,0,0,0.06)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#fef3e2] to-[#fde68a] flex items-center justify-center text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-xs text-[#8a8a8a]">Time Saved</div>
                  <div
                    className="text-lg font-bold text-[#1a1a1a]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    15h
                    <span className="text-[#22c55e] text-sm font-medium ml-1">
                      / week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGOS / SOCIAL PROOF MARQUEE ===== */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-[#8a8a8a] mb-6 tracking-wide uppercase font-medium">
            Works with your favorite job platforms
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap opacity-50">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              pracuj.pl
            </span>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              LinkedIn
            </span>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              NoFluffJobs
            </span>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Indeed
            </span>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              JustJoin.it
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto fancy-divider" />

      {/* ===== FEATURES — "Built for high performance" ===== */}
      <section
        id="features"
        className="relative z-10 px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Built for high performance
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
              &lt;job gives you everything you need to automate your job search,
              analyze listings, and apply faster — all in one place.
            </p>
          </div>

          {/* Tab Bar */}
          <div className="flex justify-center mb-16">
            <div className="tab-bar">
              <div className="tab-item">
                <span>⚡</span> One-Click Capture
              </div>
              <div className="tab-item">
                <span>🔗</span> n8n Integration
              </div>
              <div className="tab-item">
                <span>🤖</span> AI Analysis
              </div>
              <div className="tab-item active">
                <span>🔒</span> Privacy First
              </div>
            </div>
          </div>

          {/* Feature Showcase: Two-column */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#e8e4dd] to-[#d9d4cb] p-6 md:p-10">
                <div className="float-card">
                  <Image
                    src="/extension-popup.png"
                    alt="<job extension capturing a job listing"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div className="badge badge-warm mb-5">ONE-CLICK CAPTURE</div>
              <h3
                className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Capture any job listing instantly
              </h3>
              <p className="text-[#5a5a5a] text-lg leading-relaxed mb-6">
                Navigate to any job posting on Pracuj.pl, LinkedIn, NoFluffJobs,
                or any other site. Click the &lt;job button and the extension
                extracts the title, description, URL, and full context —
                automatically. No copy-pasting. No spreadsheets. Just one click.
              </p>
              <ul className="space-y-3">
                {[
                  "Extract job title, description & URL",
                  "Works on any job board or website",
                  "Smart text extraction engine",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#5a5a5a]"
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white text-xs flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Showcase: Reversed */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:order-1 order-2">
              <div className="badge badge-warm mb-5">AI AUTOMATION</div>
              <h3
                className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Your personal AI job pipeline
              </h3>
              <p className="text-[#5a5a5a] text-lg leading-relaxed mb-6">
                Captured data is instantly delivered to your n8n workflow via
                webhook. From there, your AI takes over — analyze the listing
                with GPT, save to Notion, generate a tailored cover letter, or
                track trends in your job search.
              </p>
              <ul className="space-y-3">
                {[
                  "Webhook integration with n8n",
                  "Automate cover letter generation",
                  "Save and track in Notion or Sheets",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#5a5a5a]"
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white text-xs flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div className="lg:order-2 order-1 relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#fef7ee] to-[#fef3e2] p-6 md:p-10">
                <div className="float-card">
                  <Image
                    src="/workflow.png"
                    alt="n8n automation workflow showing job data pipeline"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how-it-works"
        className="section-alt relative z-10 px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-outline mb-5">How it works</div>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three steps to <span className="gradient-text">automate</span>
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
              From installation to AI-powered analysis in under 2 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fef3e2] to-[#fde68a] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                📥
              </div>
              <div className="text-xs text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Step 01
              </div>
              <h3 className="text-xl font-bold mb-3">Install the Extension</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Download &lt;job from GitHub and add it to Chrome. Set up your
                n8n webhook URL once — done forever.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fef3e2] to-[#fde68a] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <div className="text-xs text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Step 02
              </div>
              <h3 className="text-xl font-bold mb-3">Browse Job Listings</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Navigate to any job posting on Pracuj.pl, LinkedIn, NoFluffJobs,
                Indeed — or any website.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fef3e2] to-[#fde68a] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <div className="text-xs text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Step 03
              </div>
              <h3 className="text-xl font-bold mb-3">Click & Automate</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Hit the analyze button. Job data flies to n8n where your AI
                workflow generates insights instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS / STATS ===== */}
      <section
        id="results"
        className="relative z-10 px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The numbers speak
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-xl mx-auto">
              Real impact on your job search workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card card-warm p-10 text-center">
              <div className="stat-number gradient-text mb-2">90%</div>
              <div className="text-sm text-[#5a5a5a] font-medium">
                Less manual data entry
              </div>
            </div>
            <div className="card card-warm p-10 text-center">
              <div className="stat-number gradient-text mb-2">15h</div>
              <div className="text-sm text-[#5a5a5a] font-medium">
                Saved per week
              </div>
            </div>
            <div className="card card-warm p-10 text-center">
              <div className="stat-number gradient-text mb-2">1-click</div>
              <div className="text-sm text-[#5a5a5a] font-medium">
                From listing to AI analysis
              </div>
            </div>
          </div>

          {/* Feature Grid: Small cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "⚡",
                title: "Instant Capture",
                desc: "Extract full job data in one click without copy-pasting.",
              },
              {
                icon: "🔗",
                title: "n8n Integration",
                desc: "Webhook-powered pipeline for custom AI workflows.",
              },
              {
                icon: "🇵🇱",
                title: "Made for Poland",
                desc: "Optimized for Pracuj.pl, NoFluffJobs, JustJoin.it.",
              },
              {
                icon: "🎓",
                title: "Student Mode",
                desc: "Filter by contract type — find jobs that fit your schedule.",
              },
              {
                icon: "🔒",
                title: "Privacy First",
                desc: "Your data goes to your webhook only. No tracking, ever.",
              },
              {
                icon: "✨",
                title: "AI-Ready Data",
                desc: "Clean JSON output, ready for GPT analysis and automation.",
              },
            ].map((feature, i) => (
              <div key={i} className="card p-6 flex gap-4 items-start group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        id="download"
        className="section-alt relative z-10 px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="card p-12 md:p-16 relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-[80px]"
              style={{
                background: "linear-gradient(135deg, #f97316, #fde68a)",
              }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-15 blur-[80px]"
              style={{
                background: "linear-gradient(135deg, #fde68a, #f97316)",
              }}
            />

            <div className="relative z-10">
              <div className="badge badge-warm mb-6 mx-auto">
                ✦ Free & open source
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to snipe your
                <br />
                <span className="gradient-text">dream job</span>?
              </h2>

              <p className="text-lg text-[#5a5a5a] mb-10 max-w-lg mx-auto">
                Download the extension, connect your n8n, and start automating
                your job search. Built by a student, for students.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/pugging/hr-sniper-landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Download from GitHub
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="fancy-divider mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href="#" className="logo-mark flex items-center gap-1 text-lg">
                <span className="chevron font-extrabold text-[#f97316]">
                  &gt;
                </span>
                <span>job</span>
              </a>
              <span className="text-xs text-[#8a8a8a] italic">by europa</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#8a8a8a]">
              <span>Made for ✭ to shine brighter</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">© 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
