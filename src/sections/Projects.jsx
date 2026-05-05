import refclockSetup from '../assets/refclock-setup.jpg';
import refclockGame from '../assets/refclock-game.jpg';
import oasisImg from '../assets/oasis.png';

const featuredProjects = [
  {
    title: 'RefClock',
    subtitle: 'Soccer Referee Timer & Scorekeeper',
    status: 'Published · Google Play Store',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    description:
      'Progressive web app published for production on Android. Logs live game data — goals, cards, player numbers — with an offline-first architecture. Self-promoted to adoption by Northeastern Intramural Soccer officials.',
    github: 'https://github.com/raydl18',
    screenshots: [refclockSetup, refclockGame],
    screenshotBg: '#0f1117',
  },
  {
    title: 'OASIS Book Tracker',
    subtitle: 'Goodreads-style Reading App',
    status: 'Fully Deployed',
    tech: ['React', 'Zustand', 'Supabase', 'PostgreSQL'],
    description:
      'Full-stack book tracking app with Open Library API integration, search, trending books, and recently viewed recommendations. Supabase auth with reading stats, shelves, and a page progress tracker.',
    github: 'https://github.com/raydl18',
    image: oasisImg,
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
      'JavaFX GUI simulation using MVC and Finite State Machines. Tested elevator efficiency across large passenger datasets.',
    github: 'https://github.com/raydl18',
  },
];

function FeaturedCard({ proj }) {
  return (
    <div className="flex flex-col border border-outline-variant/30 bg-white rounded-xl overflow-hidden hover:shadow-[4px_4px_0_#002045] hover:-translate-y-0.5 transition-all duration-200">
      {/* Screenshot area */}
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
        ) : proj.image ? (
          <img
            src={proj.image}
            alt={proj.title}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : null}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-container-low border border-surface-container-high rounded-full font-inter font-bold text-[0.6rem] text-primary uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
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
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-container mx-auto">

        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Projects</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
          Past projects
        </h2>
        <p className="font-newsreader text-lg text-on-surface-variant max-w-xl mb-16 opacity-80">
          Built, deployed, and shipped — from mobile apps to full-stack web platforms.
        </p>

        {/* Selected Engineering Work */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-inter text-[0.7rem] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
            Selected Engineering Work
          </span>
          <div className="flex-1 h-px bg-outline-variant/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {featuredProjects.map((proj) => (
            <FeaturedCard key={proj.title} proj={proj} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-inter text-[0.7rem] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
            Other Projects
          </span>
          <div className="flex-1 h-px bg-outline-variant/40" />
        </div>

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
