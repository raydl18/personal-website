const experiences = [
  {
    role: 'Software Developer',
    company: 'OASIS @ Northeastern',
    date: 'Feb 2026 – Present',
    tech: ['React', 'Zustand', 'Supabase', 'PostgreSQL'],
    bullets: [
      'Built a fully deployed Goodreads-style book tracking app with Open Library API integration, search, trending books, and recently viewed recommendations.',
      'Implemented Supabase authentication and user profiles with reading stats, shelves (read/reading), and a page progress tracker.',
    ],
  },
  {
    role: 'Founder & Developer',
    company: 'RefClock (Mobile App)',
    date: 'Mar 2026 – Present',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    bullets: [
      'Built a progressive web app with HTML/CSS/JavaScript, published for production on Android/Google Play Store.',
      'Soccer referee timer/scorekeeper that logs live game data (goals, cards, player numbers).',
      'Self-promoted the app to adoption by Northeastern Intramural Soccer officials.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Dragon Boat Seating App',
    date: 'Jan 2026 – Present',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Built a Spring Boot MVC app for managing paddler rosters with an interactive drag-and-drop boat layout visualization.',
      "Integrated with a local SF dragon boat team's website; supports CSV import/export for paddler data.",
    ],
  },
  {
    role: 'Soccer Referee',
    company: 'Fremont Youth Soccer Club → Northeastern Intramural Official',
    date: 'Oct 2021 – Present',
    tech: [],
    bullets: [
      '5 years certified by the California North State Referee Committee.',
      '150+ hours officiating youth and adult soccer games as Assistant and Center Referee.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Currently</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-16">
          What I'm working on
        </h2>

        <div className="relative">
          <div className="absolute left-[6px] top-2 bottom-2 w-px bg-outline-variant/50" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="flex items-start gap-7">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1 z-10" />

                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-inter font-semibold text-on-surface text-base">{exp.role}</h3>
                    <span className="font-inter font-bold text-[0.7rem] text-on-surface-variant uppercase tracking-wider">
                      {exp.date}
                    </span>
                  </div>

                  <p className="font-inter font-semibold text-[0.85rem] text-secondary mb-3">{exp.company}</p>

                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="font-newsreader text-sm text-on-surface-variant leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>

                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
