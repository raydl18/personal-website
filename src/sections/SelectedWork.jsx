import refclockSetup from '../assets/refclock-setup.jpg';
import refclockGame from '../assets/refclock-game.jpg';
import oasisImg from '../assets/oasis.png';

const showcaseProjects = [
  {
    title: 'RefClock (Mobile App)',
    tech: ['HTML/CSS', 'JavaScript', 'PWA', 'Google Play'],
    description:
      'A production-ready soccer referee tool built as a Progressive Web App. ' +
      'Built with HTML/CSS/JavaScript and published for production on Android/Google Play Store. ' +
      'Logs live game data — goals, cards, player numbers — with auth and persistence. ' +
      'Self-promoted to adoption by Northeastern Intramural Soccer officials.',
    stats: [
      { label: 'In Progress', sub: 'Android Store' },
      { label: 'Production Testing', sub: 'Live Status' },
    ],
    screenshots: [refclockSetup, refclockGame],
    imageRight: true,
    containerBg: 'bg-surface-container-low',
  },
  {
    title: 'Oasis Club @ NEU',
    tech: ['React', 'Zustand', 'Supabase', 'PostgreSQL'],
    description:
      'Built a fully deployed book-tracking platform for the Oasis Club project series. ' +
      'Encourages daily reading habits with search, trending books, recently viewed ' +
      'recommendations, user profiles with stats, and a social feature to follow other users. ' +
      'Implemented with Open Library API, Supabase authentication, React+Vite, MUI, Zustand, and PostgreSQL.',
    stats: [
      { label: 'Full Stack', sub: 'Architecture' },
      { label: 'Cloud Native', sub: 'Supabase DB' },
    ],
    image: oasisImg,
    imageRight: false,
    containerBg: 'bg-surface-container',
  },
];

const otherItems = [
  {
    type: 'experience',
    title: 'Los Altos Hacks — Sponsorship Team',
    date: 'SEP 2023 — MAY 2025',
    org: 'Los Altos, CA',
    bullets: [
      'Reached out to local tech company representatives through emails and calls.',
      'Part of a team that raised $32k in sponsorship from Google, Palantir, Vercel, HRT, Juniper, and more.',
      "Organizer for the world's largest high school hackathon (~420 attendees).",
    ],
    tech: [],
  },
  {
    type: 'project',
    title: 'Plant',
    badge: 'Hackathon Winner',
    badgeGold: true,
    subtitle: 'NUACM Education Track · Northeastern',
    description:
      'Won the NUACM Hackathon Education Track. AI-powered academic schedule planner for ' +
      'Northeastern students - web-scraped 1000+ courses and 100+ majors, integrated Firebase Auth and ' +
      'Google Gemini for personalized suggestions.',
    tech: ['Next.js', 'TypeScript', 'Python', 'Firebase', 'Gemini'],
  },
  {
    type: 'project',
    title: 'ML Essentials Bootcamp',
    subtitle: 'KHOURY ODYSSEY CERTIFICATE  |  AI CLUB @ NORTHEASTERN',
    subtitleBlue: true,
    description:
      'Implemented linear regression (OLS/Gradient Descent) on Spotify data, PCA from ' +
      'scratch on wine dataset, K-means from scratch, and an MLP Neural Network with ' +
      'backpropagation, dropout, and mini-batch SGD — 86.5% test accuracy.',
    tech: ['Python', 'Matplotlib', 'NumPy'],
  },
  {
    type: 'project',
    title: 'Evacuation Simulation',
    subtitle: 'NU AI Club Hackathon',
    description:
      'Designed and implemented an evacuation simulation using React, TypeScript, and ' +
      'Leaflet for the frontend, modeling human agents during emergency scenarios. ' +
      'Developed efficient algorithms to help city planners identify key congestion points.',
    tech: ['React/TS', 'Leaflet', 'Spring Boot'],
  },
  {
    type: 'experience',
    title: 'Fremont Youth Soccer Club — Soccer Referee',
    date: 'OCT 2021 — PRESENT',
    bullets: [
      '6 years certified with the California North State Referee Committee.',
      '150+ hours referring youth & adult soccer games as Assistant and Center Referee.',
      'Enforcing game fairness and managing tensions in high-pressure situations.',
    ],
    tech: [],
  },
  {
    type: 'project',
    title: 'Dragon Boat Seating',
    subtitle: 'Personal Project',
    description:
      'Spring Boot MVC app with drag-and-drop boat layout visualization for managing ' +
      "paddler rosters. Supports CSV import/export for paddler data.",
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaScript'],
  },
  {
    type: 'experience',
    title: 'Northeastern University — Soccer Referee',
    date: 'JAN 2026 — PRESENT',
    org: 'Boston, MA',
    bullets: [
      'Intramural Official for recreational soccer.',
    ],
    tech: [],
  },
  {
    type: 'project',
    title: 'Elevator Simulation (Java / OOP)',
    subtitle: 'Academic Project',
    description:
      'Developed a comprehensive elevator management simulation in Java, utilizing ' +
      'Object-Oriented Design principles and Finite State Machines to model complex system interactions. ' +
      'Engineered efficient scheduling algorithms to minimize passenger wait times ' +
      'and optimize elevator movement within a multi-floor building.',
    tech: ['Java', 'OOP', 'Finite State Machines'],
  },
];

function ShowcaseRow({ proj }) {
  const imageEl = proj.screenshots ? (
    <div className={`${proj.containerBg} p-8 rounded-[3rem] border border-slate-100 hover-lift group overflow-hidden`}>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x py-4">
        {proj.screenshots.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${proj.title} screenshot ${i + 1}`}
            className="h-96 rounded-2xl shadow-2xl snap-center object-contain group-hover:scale-105 transition-transform duration-700"
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={`${proj.containerBg} p-8 rounded-[3rem] border border-slate-100 hover-lift group`}>
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
      </div>
    </div>
  );

  const textEl = (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="font-newsreader font-bold text-4xl text-primary tracking-[-0.01em]">{proj.title}</h3>
        <div className="flex flex-wrap gap-3">
          {proj.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
      <p className="font-newsreader text-xl text-on-surface-variant leading-relaxed">
        {proj.description}
      </p>
      <div className="pt-4 flex gap-6 items-center">
        {proj.stats.map((s, i) => (
          <div key={s.label} className="flex gap-6 items-center">
            {i > 0 && <div className="w-px h-12 bg-slate-200" />}
            <div className="flex flex-col">
              <span className="font-newsreader font-bold text-primary text-2xl">{s.label}</span>
              <span className="font-inter font-bold text-slate-400 text-sm uppercase tracking-widest mt-1">
                {s.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {proj.imageRight ? (
        <>
          <div className="order-2 lg:order-1">{textEl}</div>
          <div className="order-1 lg:order-2">{imageEl}</div>
        </>
      ) : (
        <>
          <div className="lg:order-2">{textEl}</div>
          <div className="lg:order-1">{imageEl}</div>
        </>
      )}
    </div>
  );
}

function OtherCard({ item }) {
  return (
    <div className="p-8 glass-card border border-slate-100 rounded-2xl hover-lift">
      {item.type === 'experience' ? (
        <>
          <div className="mb-4">
            <span className="font-inter text-xs font-bold text-primary uppercase tracking-widest">
              {item.date}
            </span>
            <h4 className="font-newsreader text-xl font-bold text-primary mt-1">{item.title}</h4>
            {item.org && (
              <p className="font-newsreader text-on-surface-variant text-sm font-medium mt-0.5">{item.org}</p>
            )}
          </div>
          <ul className="list-disc list-outside ml-4 space-y-2 text-on-surface-variant text-sm leading-relaxed font-newsreader">
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </>
      ) : (
        <>
          <h4 className="font-newsreader text-xl font-bold text-primary mb-3 flex items-center gap-3 flex-wrap">
            {item.title}
            {item.badge && (
              <span className={`px-2 py-1 font-newsreader text-xs font-bold tracking-widest rounded uppercase ${
                item.badgeGold
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-surface-container-low text-on-surface-variant'
              }`}>
                {item.badge}
              </span>
            )}
          </h4>
          {item.subtitle && (
            <p className={`font-newsreader text-xs font-bold uppercase tracking-wider mb-3 ${
              item.subtitleBlue ? 'text-secondary' : 'text-on-surface-variant'
            }`}>
              {item.subtitle}
            </p>
          )}
          <p className="font-newsreader text-on-surface-variant text-sm leading-relaxed mb-4">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
          </div>
        </>
      )}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="font-inter text-xs font-bold text-primary uppercase tracking-widest">
            Showcase
          </span>
          <h2 className="font-newsreader font-bold text-5xl text-primary mt-6 tracking-[-0.02em]">
            Selected Engineering Work
          </h2>
          <p className="font-newsreader mt-6 text-on-surface-variant text-lg">
            Focusing on user-centric applications and robust system architecture.
          </p>
        </div>

        <div className="space-y-32">
          {showcaseProjects.map((proj) => (
            <ShowcaseRow key={proj.title} proj={proj} />
          ))}
        </div>

        <div className="mt-32">
          <div className="mb-16 text-center">
            <h3 className="font-newsreader font-bold text-3xl text-primary">
              Other Projects &amp; Experience
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {otherItems.map((item, i) => (
              <OtherCard key={i} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
