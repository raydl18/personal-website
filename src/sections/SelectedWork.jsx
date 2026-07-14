import Reveal from '../components/Reveal';
import refclock1 from '../assets/refclock-pictures/refclock1.png';
import refclock2 from '../assets/refclock-pictures/refclock2.png';
import refclock3 from '../assets/refclock-pictures/refclock3.png';
import kellyLiuImg from '../assets/kellyliuadvisory-pictures/kellyliuadvisory-picture.png';
import actImg from '../assets/act-acupuncture-picture.png';
import oasisImg from '../assets/chapters-pictures/chapters-discover.png';
import plantImg from '../assets/plant-pictures/plant2.png';

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

/** A deployed site shown inside a minimal browser mock. */
function BrowserFrame({ src, alt, handle, aspect = 'aspect-video' }) {
  return (
    <div className="group relative rounded overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="ml-3 flex-1 max-w-[240px] h-6 rounded-full bg-white border border-slate-200 flex items-center gap-1.5 px-3">
          <span className="material-symbols-outlined text-[13px] text-slate-400" aria-hidden="true">lock</span>
          <span className="font-inter text-[11px] text-slate-400 truncate">{handle}</span>
        </span>
      </div>
      <div className={`relative ${aspect} overflow-hidden bg-slate-50`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
        />
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
                {[
                  { src: refclock1, alt: 'RefClock match setup screen' },
                  { src: refclock2, alt: 'RefClock live match timer and score' },
                  { src: refclock3, alt: 'RefClock final whistle and match summary' },
                ].map((shot) => (
                  <img
                    key={shot.alt}
                    src={shot.src}
                    alt={shot.alt}
                    className="h-72 md:h-80 w-auto rounded shadow-lg snap-center object-contain shrink-0"
                  />
                ))}
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
              <BrowserFrame src={kellyLiuImg} alt="Kelly Liu Advisory marketing site" handle="kelly liu advisory" />
            </div>
          </Reveal>

          {/* Two-up: ACT (tall, left) + Oasis / Plant (right column) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* 3 — ACT Acupuncture */}
            <Reveal className="space-y-8">
              <BrowserFrame src={actImg} alt="ACT Acupuncture marketing site" handle="act acupuncture" aspect="aspect-[4/5]" />
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
              <Reveal className="space-y-6">
                <BrowserFrame src={oasisImg} alt="Oasis Club book-tracking app" handle="oasis club" />
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
                <BrowserFrame src={plantImg} alt="Plant academic-planning dashboard" handle="plant" />
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
