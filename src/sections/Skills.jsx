const languages = ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS', 'SQL'];

const tools = [
  'Spring Boot', 'React', 'Next.js', 'Supabase', 'PostgreSQL',
  'Firebase', 'NumPy', 'Pandas', 'Matplotlib', 'Git', 'Linux/Ubuntu',
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-slate-50 blueprint-grid">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-20">

          <div className="md:col-span-4">
            <span className="font-inter text-xs font-bold text-outline uppercase tracking-widest">
              Toolkit
            </span>
            <h2 className="font-newsreader font-bold text-4xl text-primary mt-6">
              Technical Proficiency
            </h2>
            <p className="font-newsreader text-on-surface-variant mt-8 text-lg leading-relaxed">
              Built on a foundation of low-level fundamentals, now specialized in building
              modern cloud-native applications.
            </p>
          </div>

          <div className="md:col-span-8 grid gap-12">
            <div className="space-y-6">
              <h4 className="font-inter font-bold text-xs text-primary uppercase tracking-widest border-b border-slate-200 pb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-4">
                {languages.map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 bg-white border border-slate-100 text-slate-800 font-newsreader font-bold text-sm rounded-xl hover-lift shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-inter font-bold text-xs text-primary uppercase tracking-widest border-b border-slate-200 pb-3">
                Tools &amp; Libs
              </h4>
              <div className="flex flex-wrap gap-4">
                {tools.map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 bg-white border border-slate-100 text-slate-800 font-newsreader font-bold text-sm rounded-xl hover-lift shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
