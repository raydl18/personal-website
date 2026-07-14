import Reveal from '../components/Reveal';

// Ordered technical-first so the grouping reads top→bottom on desktop
// (row 1 technical, row 2 non-technical) and top→bottom when stacked on mobile.
const items = [
  {
    title: 'Los Altos Hacks Sponsorship Team',
    date: 'Mar 2024 – Apr 2025',
    bullets: [
      'Part of a team that raised $32k in sponsorship from Google, Palantir, Vercel, HRT, Juniper, and more',
      "Organizer for the world's largest high school hackathon (420 attendees)",
    ],
  },
  {
    title: 'Machine Learning Essentials',
    date: 'Jan 2024',
    skills: 'Python · NumPy · Pandas · Scikit-Learn',
    bullets: [
      'Implemented basic linear regression, PCA, k-means clustering, and neural networks to predict danceability from Spotify audio features and make predictions about a sample wine dataset',
    ],
  },
  {
    title: 'Soccer Referee',
    date: 'Oct 2021 – Present',
    org: 'Fremont Youth Soccer Club → Northeastern Intramural Official',
    bullets: [
      'Officiated 150+ youth and adult matches as Center and Assistant Referee, making high-pressure, real-time calls while managing players, coaches, and spectators',
      'Maintained 6 years of active certification with the California North State Referee Committee',
    ],
  },
  {
    title: 'Sales & Service Associate',
    date: '2026 – Present',
    org: '24 Hour Fitness',
    bullets: [
      'Drive membership and personal-training sales — closing thousands of dollars in training packages through cold calls and live in-club pitches',
      'Qualify walk-in and phone leads and convert them into members on the spot at the front desk',
    ],
  },
];

function ExperienceItem({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4">
        <h3 className="font-newsreader font-semibold text-xl md:text-2xl text-primary">{item.title}</h3>
        <span className="font-dmsans text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
          {item.date}
        </span>
      </div>
      {item.org && (
        <p className="font-dmsans text-xs font-medium text-slate-500 mt-2">{item.org}</p>
      )}
      {item.skills && (
        <p className="font-dmsans text-xs font-bold text-secondary uppercase tracking-wide mt-2">{item.skills}</p>
      )}
      <ul className="list-disc list-outside ml-4 space-y-2.5 text-[14px] text-slate-600 leading-relaxed mt-4">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function OtherExperience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <Reveal className="mb-14 md:mb-16">
          <span className="font-dmsans text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            Additional Impact
          </span>
          <h2 className="font-newsreader font-semibold text-3xl md:text-4xl text-primary mt-6 tracking-[-0.01em]">
            Other Experience
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-14">
          {items.map((item, i) => (
            <ExperienceItem key={item.title} item={item} delay={(i % 2) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
