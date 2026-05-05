import refclockSetup from '../assets/refclock-setup.jpg';
import refclockGame from '../assets/refclock-game.jpg';
import oasisImg from '../assets/oasis.png';

const projects = [
  {
    title: 'RefClock',
    subtitle: 'Soccer Referee Timer & Scorekeeper',
    status: 'Published · Google Play Store',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    description:
      'Built a progressive web app with HTML/CSS/JavaScript, published for production on Android/Google Play Store. Soccer referee timer/scorekeeper that logs live game data (goals, cards, player numbers) with auth and persistence. Self-promoted to adoption by Northeastern Intramural Soccer officials.',
    github: 'https://github.com/raydl18',
    screenshots: [refclockSetup, refclockGame],
    screenshotBg: '#0f1117',
  },
  {
    title: 'OASIS — Chapters',
    subtitle: 'Goodreads-style Book Tracking App',
    status: 'Completed · Jan – Apr 2026',
    tech: ['React', 'Vite', 'MUI', 'Zustand', 'Supabase', 'PostgreSQL'],
    description:
      'Built Chapters: a book tracking app with Open Library API integration, search, trending books, recently viewed recommendations, user profiles w/ stats, and a social feature to follow other users. Implemented Supabase authentication, React+Vite, MUI, Zustand.',
    github: 'https://github.com/raydl18',
    image: oasisImg,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Engineering</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
          Selected Engineering Work
        </h2>
        <p className="font-newsreader text-lg text-on-surface-variant max-w-xl mb-16 opacity-80">
          Built, deployed, and shipped — from mobile apps to full-stack web platforms.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col border border-outline-variant/30 bg-white rounded-xl overflow-hidden hover:shadow-[4px_4px_0_#002045] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="aspect-video relative overflow-hidden">
                {proj.screenshots ? (
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 p-4"
                    style={{ backgroundColor: proj.screenshotBg }}
                  >
                    {proj.screenshots.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${proj.title} screenshot ${i + 1}`}
                        className="h-full w-auto rounded-xl shadow-2xl object-contain"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-container-low border border-surface-container-high rounded-full font-inter font-bold text-[0.6rem] text-primary uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {proj.status}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-outline hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                  </a>
                </div>
                <h3 className="font-inter font-bold text-on-surface text-xl tracking-tight mb-0.5">{proj.title}</h3>
                <p className="font-inter font-semibold text-secondary text-sm mb-3">{proj.subtitle}</p>
                <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed mb-5 flex-1">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
