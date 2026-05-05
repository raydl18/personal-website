const highlights = [
  {
    icon: 'school',
    title: 'Northeastern University',
    body: 'B.S. Computer Science · GPA 3.97\nClass of 2028 · Boston, MA',
  },
  {
    icon: 'code',
    title: 'What I Build',
    body: 'Full-stack web apps, ML models, and mobile apps. I like making meaningful projects about topics that interest me.',
  },
  {
    icon: 'sports_soccer',
    title: 'Outside of Code',
    body: "I am part of the Northeastern Club badminton team, I weightlift, and I'm also a certified soccer referee with 150+ hours officiated.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">About Me</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
          A bit about me
        </h2>
        <p className="font-newsreader text-lg text-on-surface-variant max-w-xl mb-12 opacity-80">
          I'm a freshman CS student at Northeastern looking for work opportunities in software engineering,
          AI, or data science. I enjoy working on projects that challenge me and picking up new
          skills along the way.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {highlights.slice(0, 2).map((h) => (
              <div
                key={h.title}
                className="flex-1 p-8 border border-outline-variant/30 bg-white rounded-xl hover:shadow-[2px_3px_0_#c4c6cf] transition-shadow"
              >
                <span className="material-symbols-outlined text-primary text-[26px] mb-4 block">{h.icon}</span>
                <h3 className="font-inter font-semibold text-on-surface text-base mb-2">{h.title}</h3>
                <p className="font-newsreader text-sm text-on-surface-variant whitespace-pre-line leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
          <div className="p-8 border border-outline-variant/30 bg-white rounded-xl hover:shadow-[2px_3px_0_#c4c6cf] transition-shadow">
            <span className="material-symbols-outlined text-primary text-[26px] mb-4 block">{highlights[2].icon}</span>
            <h3 className="font-inter font-semibold text-on-surface text-base mb-2">{highlights[2].title}</h3>
            <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed">{highlights[2].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
