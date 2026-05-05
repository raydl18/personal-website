const experiences = [
  {
    org: 'Northeastern University',
    role: 'Soccer Referee',
    date: 'Jan 2026 – Present',
    location: 'Boston, MA',
    bullets: [
      'Intramural Official for recreational soccer.',
    ],
    tech: [],
  },
  {
    org: 'Self-employed',
    role: 'Founder & Developer — RefClock (Mobile App)',
    date: 'Mar 2026 – Present',
    bullets: [
      'Built a progressive web app with HTML/CSS/JavaScript, published for production on Android/Google Play Store.',
      'Soccer referee timer/scorekeeper that logs live game data (goals, cards, player numbers) with auth and persistence.',
      'Self-promoted the app for adoption by fellow Northeastern Intramural Soccer officials.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA'],
  },
  {
    org: 'Oasis at Northeastern',
    role: 'Software Developer',
    date: 'Jan 2026 – Apr 2026',
    bullets: [
      'Built Chapters: a book tracking app with Open Library API integration, search, trending books, recently viewed recommendations, user profiles w/ stats, social feature to follow other users.',
      'Implemented with Supabase authentication, React+Vite, MUI, Zustand, Supabase, PostgreSQL.',
    ],
    tech: ['React', 'Vite', 'MUI', 'Zustand', 'Supabase', 'PostgreSQL'],
  },
  {
    org: 'Fremont Youth Soccer Club',
    role: 'Soccer Referee',
    date: 'Oct 2021 – Dec 2025',
    bullets: [
      '5 years certified with the California North State Referee Committee.',
      '100+ hours referring youth & adult soccer games as Assistant and Center Referee.',
      'Enforcing game fairness and managing tensions in high-pressure situations.',
    ],
    tech: [],
  },
  {
    org: 'Los Altos Hacks',
    role: 'Sponsorship Team',
    date: 'Sep 2023 – May 2025',
    location: 'Los Altos, CA',
    bullets: [
      'Reached out to local tech company representatives through emails and calls.',
      "Part of a team that raised $32k in sponsorship from Google, Palantir, Vercel, HRT, Juniper, + more.",
      "Organizer for the world's largest high school hackathon (~420 attendees).",
    ],
    tech: [],
  },
];

const otherProjects = [
  {
    title: 'Plant',
    badge: 'NUACM Hackathon · Education Track Winner',
    tech: ['Next.js', 'TypeScript', 'Python', 'Firebase', 'Gemini'],
    description:
      'AI-powered academic schedule planner. Web-scraped 1000+ courses and 100+ majors; integrated Firebase Auth and Google Gemini for personalized suggestions.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Evacuation Simulation',
    badge: 'NU AI Club Hackathon',
    tech: ['React', 'TypeScript', 'Leaflet', 'Spring Boot', 'WebSockets'],
    description:
      'Real-time evacuation simulation streaming agent movement with Gemini API traffic analysis and OpenStreetMap road data.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'ML Essentials Bootcamp',
    badge: 'AI Club · Northeastern',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    description:
      'Neural network from scratch with backpropagation, dropout, and mini-batch SGD — 86.5% test accuracy. Also built linear regression, PCA, and K-means on real-world datasets.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Dragon Boat Seating',
    badge: 'Personal Project',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Spring Boot MVC app with drag-and-drop boat layout visualization for managing paddler rosters. Supports CSV import/export.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Elevator Simulation',
    badge: 'Academic Project',
    tech: ['Java', 'JavaFX', 'MVC', 'FSM'],
    description:
      'JavaFX GUI simulation using MVC and Finite State Machines. Tested elevator scheduling efficiency across large passenger datasets.',
    github: 'https://github.com/raydl18',
  },
];

function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-inter text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-outline-variant/40" />
    </div>
  );
}

export default function OtherProjectsExperience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Resume</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
          Projects &amp; Experience
        </h2>
        <p className="font-newsreader text-lg text-on-surface-variant max-w-xl mb-16 opacity-80">
          A record of work, competitions, and contributions.
        </p>

        {/* Experience */}
        <SectionDivider label="Experience" />
        <div className="flex flex-col gap-10 mb-20">
          {experiences.map((exp) => (
            <div key={exp.org + exp.role} className="grid sm:grid-cols-[148px_1fr] gap-x-8 gap-y-1">
              <div className="sm:text-right pt-0.5">
                <span className="font-inter text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-widest leading-relaxed">
                  {exp.date}
                </span>
                {exp.location && (
                  <p className="font-inter text-[0.65rem] text-outline uppercase tracking-wider mt-0.5">
                    {exp.location}
                  </p>
                )}
              </div>
              <div>
                <h3 className="font-inter font-semibold text-on-surface text-base mb-0.5">{exp.role}</h3>
                <p className="font-inter font-semibold text-secondary text-sm italic mb-3">{exp.org}</p>
                <ul className="space-y-1.5 mb-3">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="font-newsreader text-sm text-on-surface-variant leading-relaxed pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-outline"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                {exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <SectionDivider label="Other Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((proj) => (
            <div
              key={proj.title}
              className="p-5 border border-outline-variant/30 bg-white rounded-xl hover:shadow-[2px_3px_0_#c4c6cf] transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="font-inter font-bold text-[0.6rem] text-on-surface-variant uppercase tracking-widest bg-surface-container-low border border-outline-variant/30 px-2 py-0.5 rounded leading-relaxed">
                  {proj.badge}
                </span>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-outline hover:text-primary transition-colors flex-shrink-0"
                  aria-label="View on GitHub"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </a>
              </div>
              <h3 className="font-inter font-semibold text-on-surface text-base mb-2">{proj.title}</h3>
              <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
