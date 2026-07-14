import Reveal from '../components/Reveal';

const groups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS', 'SQL'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'VS Code', 'Eclipse', 'Gradle', 'PostgreSQL', 'Supabase', 'Firebase', 'Node.js', 'Vercel', 'Linux/Ubuntu', 'Claude Code'],
  },
  {
    title: 'Libraries & Frameworks',
    items: ['Spring Boot', 'React', 'Next.js', 'Tailwind CSS', 'JUnit', 'Jackson', 'NumPy', 'Pandas', 'BeautifulSoup'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white blueprint-grid">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          <Reveal className="lg:col-span-4">
            <span className="font-inter text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Technical Skills
            </span>
            <h2 className="font-newsreader font-semibold text-3xl md:text-4xl text-primary mt-6 tracking-[-0.01em]">
              Technical Proficiency
            </h2>
            <p className="font-inter text-sm text-slate-500 mt-6 leading-relaxed max-w-xs">
              A focused toolkit specializing in robust backends, reactive frontends, and precise
              system design.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8 space-y-10 md:space-y-12" delay={80}>
            {groups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="font-inter text-[10px] font-bold text-primary uppercase tracking-[0.15em] border-b border-slate-100 pb-2">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 font-inter font-bold text-xs rounded hover:bg-white hover:border-slate-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
