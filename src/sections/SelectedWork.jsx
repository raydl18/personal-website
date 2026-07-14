import Reveal from '../components/Reveal';
import refclockSetup from '../assets/refclock-setup.jpg';
import refclockGame from '../assets/refclock-game.jpg';
import oasisImg from '../assets/oasis.png';

const toneClasses = {
  navy: 'bg-primary/5 text-primary border-primary/10',
  amber: 'bg-amber-100 text-amber-800 border-amber-200',
  gold: 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

function StatusChip({ tone = 'navy', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-inter text-[10px] font-bold uppercase tracking-widest ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}

function TechTags({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="tech-tag">{t}</span>
      ))}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="list-disc list-outside ml-4 space-y-3 text-[14px] text-slate-600 leading-relaxed">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

/**
 * Intentional placeholder for a deployed/in-progress site that has no
 * screenshot yet — a minimal browser frame over the blueprint grid.
 * Swap the whole panel for an <img> once a screenshot is available.
 */
function SitePanel({ handle, icon, status, tone = 'navy', tall = false }) {
  return (
    <div
      className={`group/panel relative rounded overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col ${
        tall ? 'aspect-[4/5]' : 'aspect-video'
      }`}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="ml-3 flex-1 max-w-[240px] h-6 rounded-full bg-white border border-slate-200 flex items-center gap-1.5 px-3">
          <span className="material-symbols-outlined text-[13px] text-slate-400" aria-hidden="true">lock</span>
          <span className="font-inter text-[11px] text-slate-400 truncate">{handle}</span>
        </span>
      </div>
      <div className="relative flex-1 blueprint-grid flex flex-col items-center justify-center gap-4 p-8 text-center">
        <span
          className="material-symbols-outlined text-5xl text-primary/25 group-hover/panel:text-primary/40 transition-colors"
          style={{ fontVariationSettings: "'wght' 300" }}
          aria-hidden="true"
        >
          {icon}
        </span>
        <StatusChip tone={tone}>{status}</StatusChip>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        <Reveal className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <span className="font-inter text-[11px] font-bold text-primary uppercase tracking-[0.4em]">
            Selected Engineering Work
          </span>
          <h2 className="font-newsreader font-semibold text-4xl md:text-5xl text-primary mt-6 tracking-[-0.02em]">
            Production-Ready Applications
          </h2>
        </Reveal>

        <div className="space-y-24 md:space-y-32">

          {/* 1 — RefClock (image left) */}
          <Reveal className="grid lg:grid-cols-10 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-1">
              <div className="bg-slate-900 p-6 md:p-8 rounded shadow-2xl flex gap-6 overflow-x-auto scrollbar-hide snap-x border border-slate-800">
                <img
                  src={refclockSetup}
                  alt="RefClock match setup screen"
                  className="h-72 md:h-80 w-auto rounded shadow-lg snap-center object-contain"
                />
                <img
                  src={refclockGame}
                  alt="RefClock live game timer"
                  className="h-72 md:h-80 w-auto rounded shadow-lg snap-center object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-4 order-2 space-y-6">
              <div className="space-y-3">
                <h3 className="font-newsreader font-semibold text-2xl md:text-3xl text-primary">RefClock (Mobile App)</h3>
                <TechTags items={['JavaScript', 'PWA', 'Supabase']} />
              </div>
              <Bullets
                items={[
                  'Built and shipped an offline-capable progressive web app, packaged as a Trusted Web Activity (TWA) and published to the Google Play Store after closed and production testing tracks',
                  'Engineered a real-time match timer and scorekeeper that logs live game events (goals, cards, player numbers), backed by Supabase authentication and cloud-synced state',
                  'Grew organic adoption to 20+ Northeastern Intramural Soccer officials through direct outreach',
                ]}
              />
            </div>
          </Reveal>

          {/* 2 — Kelly Liu Advisory (image right) */}
          <Reveal className="grid lg:grid-cols-10 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
              <div className="space-y-3">
                <h3 className="font-newsreader font-semibold text-2xl md:text-3xl text-primary">Kelly Liu Advisory</h3>
                <TechTags items={['Next.js', 'React', 'TypeScript']} />
              </div>
              <Bullets
                items={[
                  'Built and deployed a responsive marketing site for a business advisory client, hosted on Vercel',
                  'Drove all page content from reusable TypeScript data files so pages stay dynamic and easy to update',
                ]}
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <SitePanel handle="kelly liu advisory" icon="handshake" status="Live · Vercel" tone="navy" />
            </div>
          </Reveal>

          {/* Two-up: ACT (tall, left) + Oasis / Plant (right column) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* 3 — ACT Acupuncture */}
            <Reveal className="space-y-8">
              <SitePanel handle="act acupuncture" icon="spa" status="In Development" tone="amber" tall />
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-newsreader font-semibold text-2xl md:text-3xl text-primary">ACT Acupuncture</h3>
                  <div className="pt-1"><StatusChip tone="amber">In Progress</StatusChip></div>
                </div>
                <TechTags items={['Next.js', 'React', 'TypeScript']} />
                <Bullets
                  items={[
                    'Building a fast, SEO-friendly marketing website for a local acupuncture clinic',
                    'Pre-rendering pages as static HTML for performance and an accessibility-focused layout',
                  ]}
                />
              </div>
            </Reveal>

            {/* Right column: Oasis (top) + Plant (bottom) */}
            <div className="space-y-16 lg:space-y-24">

              {/* 4 — Oasis Club */}
              <Reveal className="space-y-6 group">
                <div className="aspect-video rounded overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src={oasisImg}
                    alt="Oasis Club book-tracking dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-newsreader font-semibold text-2xl md:text-3xl text-primary">Oasis Club @ NEU</h3>
                  <TechTags items={['React', 'Zustand', 'Supabase', 'PostgreSQL']} />
                  <Bullets
                    items={[
                      'Built a fully deployed Goodreads-style book-tracking app with Open Library API integration, search, trending books, and recently viewed recommendations',
                      'Implemented Supabase authentication and user profiles with reading stats, shelves (read/reading), and a page-progress tracker',
                    ]}
                  />
                </div>
              </Reveal>

              {/* 5 — Plant */}
              <Reveal className="space-y-6">
                <SitePanel handle="plant" icon="school" status="Winner" tone="gold" />
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-newsreader font-semibold text-2xl md:text-3xl text-primary">Plant</h3>
                    <StatusChip tone="gold">Hackathon Winner</StatusChip>
                  </div>
                  <TechTags items={['Next.js', 'React', 'TypeScript', 'Python']} />
                  <p className="font-inter text-[13px] font-bold text-slate-800">NUACM Hackathon — Education Track Winner</p>
                  <Bullets
                    items={[
                      'Built a Next.js app that helps students plan academic schedules with AI-powered course recommendations',
                      'Web-scraped 1000+ courses and 100+ majors; integrated Firebase Auth and Google Gemini',
                    ]}
                  />
                </div>
              </Reveal>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
