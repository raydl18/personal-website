import refclockSetup from '../assets/refclock-setup.jpg';
import refclockGame from '../assets/refclock-game.jpg';
import oasisImg from '../assets/oasis.png';

const projects = [
  {
    title: 'RefClock (Mobile App)',
    tech: ['HTML/CSS', 'JavaScript', 'PWA', 'Google Play'],
    description:
      'A production-ready soccer referee tool built as a Progressive Web App. ' +
      'Built with HTML/CSS/JavaScript and published for production on Android/Google Play Store. ' +
      'Logs live game data — goals, cards, player numbers — with auth and persistence. ' +
      'Self-promoted to adoption by Northeastern Intramural Soccer officials.',
    stats: [
      { label: 'In Progress', sub: 'Google Play Store' },
      { label: 'Production Testing', sub: 'Live Status' },
    ],
    screenshots: [refclockSetup, refclockGame],
    imageRight: true,
  },
  {
    title: 'Oasis Club @ NEU',
    tech: ['React', 'Zustand', 'Supabase', 'PostgreSQL'],
    description:
      'Built a fully deployed book-tracking platform built for the Oasis Club project series. ' +
      'Encourages daily reading habits with search, trending books, recently viewed ' +
      'recommendations, user profiles with stats, and a social feature to follow other users. ' +
      'Implemented with Open Library API, Supabase authentication, React+Vite, MUI, Zustand, and PostgreSQL.',
    stats: [
      { label: 'Full Stack', sub: 'Architecture' },
      { label: 'Cloud Native', sub: 'Supabase DB' },
    ],
    image: oasisImg,
    imageRight: false,
  },
];

function ProjectRow({ proj }) {
  const imageEl = proj.screenshots ? (
    <div className="rounded-2xl overflow-hidden bg-[#e8edf5] p-5 flex items-center justify-center gap-3">
      {proj.screenshots.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${proj.title} screenshot ${i + 1}`}
          className="h-64 w-auto rounded-xl shadow-lg object-contain"
        />
      ))}
    </div>
  ) : (
    <div className="rounded-2xl overflow-hidden bg-[#e8edf5] p-5 flex items-center justify-center">
      <img
        src={proj.image}
        alt={proj.title}
        className="w-full h-auto rounded-xl object-cover"
      />
    </div>
  );

  const textEl = (
    <div>
      <h3 className="font-newsreader text-3xl font-bold text-primary mb-4 tracking-tight">
        {proj.title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-5">
        {proj.tech.map((t) => (
          <span
            key={t}
            className="font-inter font-bold text-[0.6rem] text-on-surface-variant uppercase tracking-widest border border-outline-variant/50 px-2.5 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="font-newsreader text-base text-on-surface-variant leading-relaxed mb-8">
        {proj.description}
      </p>
      <div className="flex gap-10">
        {proj.stats.map((s) => (
          <div key={s.label}>
            <p className="font-inter font-bold text-primary text-base">{s.label}</p>
            <p className="font-inter font-bold text-[0.6rem] text-on-surface-variant uppercase tracking-widest mt-0.5">
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      {proj.imageRight ? (
        <>
          <div>{textEl}</div>
          <div>{imageEl}</div>
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{imageEl}</div>
          <div className="order-1 md:order-2">{textEl}</div>
        </>
      )}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-20">
          <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-3">
            Showcase
          </p>
          <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
            Selected Engineering Work
          </h2>
          <p className="font-newsreader text-lg text-on-surface-variant max-w-xl mx-auto opacity-80">
            Focusing on user-centric applications and robust system architecture.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((proj) => (
            <ProjectRow key={proj.title} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
