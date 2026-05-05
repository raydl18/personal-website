const items = [
  {
    type: 'experience',
    title: 'Los Altos Hacks — Sponsorship Team',
    date: 'SEP 2023 — MAY 2025',
    org: 'Los Altos, CA',
    bullets: [
      'Reached out to local tech company representatives through emails and calls.',
      'Part of a team that raised $32k in sponsorship from Google, Palantir, ' +
      'Vercel, HRT, Juniper, and more.',
      'Organizer for the world\'s largest high school hackathon (~420 attendees).',
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
    github: 'https://github.com/raydl18',
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
    github: 'https://github.com/raydl18',
  },
  {
    type: 'project',
    title: 'Evacuation Simulation',
    subtitle: 'NU AI Club Hackathon',
    description:
      'Designed and implemented an evacuation simulation using React, TypeScript, and ' +
      'Leaflet for the frontend, modeling human agents during emergency scenarios. ' +
      'Developed efficient algorithms to help city planners idenitfy key congestion points.',
    tech: ['React/TS', 'Leaflet', 'Spring Boot'],
    github: 'https://github.com/raydl18',
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
      "paddler rosters. " +
      'Supports CSV import/export for paddler data.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaScript'],
    github: 'https://github.com/raydl18',
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
    github: 'https://github.com/raydl18',
  },
];

function ExperienceCard({ item }) {
  return (
    <div>
      <p className="font-inter font-bold text-[0.65rem] text-secondary uppercase tracking-widest mb-2">
        {item.date}
      </p>
      <h3 className="font-inter font-semibold text-on-surface text-base mb-1">{item.title}</h3>
      {item.org && (
        <p className="font-inter text-sm text-outline mb-3">{item.org}</p>
      )}
      <ul className="space-y-1.5 mb-3">
        {item.bullets.map((b, i) => (
          <li
            key={i}
            className="font-newsreader text-sm text-on-surface-variant leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-outline"
          >
            {b}
          </li>
        ))}
      </ul>
      {item.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <h3 className="font-inter font-semibold text-primary text-base">{item.title}</h3>
        {item.badge && (
          <span
            className={`font-inter font-bold text-[0.55rem] uppercase tracking-widest px-2 py-0.5 rounded-full ${
              item.badgeGold
                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                : 'bg-surface-container-low border border-outline-variant/30 text-on-surface-variant'
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>
      {item.subtitle && (
        <p
          className={`font-inter font-bold text-[0.6rem] uppercase tracking-widest mb-3 ${
            item.subtitleBlue ? 'text-secondary' : 'text-on-surface-variant'
          }`}
        >
          {item.subtitle}
        </p>
      )}
      <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed mb-4">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function OtherProjectsExperience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-container mx-auto">
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-20 text-center">
          Other Projects &amp; Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {items.map((item, i) => (
            <div key={i}>
              {item.type === 'experience' ? (
                <ExperienceCard item={item} />
              ) : (
                <ProjectCard item={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
