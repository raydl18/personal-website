const skillGroups = [
  {
    category: 'Languages',
    icon: 'code',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: 'web',
    skills: ['React', 'Next.js', 'Vite', 'Material UI', 'Leaflet', 'Zustand'],
  },
  {
    category: 'Backend & DB',
    icon: 'storage',
    skills: ['Spring Boot', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'ML & Data',
    icon: 'psychology',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Linear Regression', 'Neural Networks', 'PCA', 'K-means'],
  },
  {
    category: 'Tools',
    icon: 'build',
    skills: ['Git', 'VS Code', 'Gradle', 'Linux/Ubuntu'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Tooling</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-16">
          Technical Proficiency
        </h2>

        <div className="border border-outline-variant/30 rounded-xl overflow-hidden">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`flex items-start gap-6 px-6 py-5 flex-wrap sm:flex-nowrap${
                i < skillGroups.length - 1 ? ' border-b border-outline-variant/30' : ''
              }`}
            >
              <div className="flex items-center gap-2 min-w-[130px] pt-0.5">
                <span className="material-symbols-outlined text-primary text-[18px]">{group.icon}</span>
                <span className="font-inter font-bold text-[0.78rem] text-primary tracking-wide">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
