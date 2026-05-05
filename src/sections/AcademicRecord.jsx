const education = [
  {
    institution: 'Northeastern University',
    degree: 'Bachelor of Science — Computer Science',
    period: 'Sep 2025 – Dec 2028',
    location: 'Boston, MA · Khoury College of Computer Sciences',
    detail: 'GPA 3.97 · Dean\'s List',
    certification: 'NU Khoury Odyssey Machine Learning Essentials Certificate',
    icon: 'school',
  },
  {
    institution: 'De Anza College',
    degree: 'Computer Science',
    period: 'Jan 2025 – Jul 2025',
    location: 'Cupertino, CA',
    icon: 'account_balance',
  },
  {
    institution: 'Los Altos High School',
    degree: 'High School Diploma',
    period: 'Aug 2021 – Jun 2025',
    location: 'Los Altos, CA',
    icon: 'emoji_events',
  },
];

export default function AcademicRecord() {
  return (
    <section id="academic" className="py-24 md:py-32 px-6">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Education</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
          Academic Record
        </h2>
        <p className="font-newsreader text-lg text-on-surface-variant max-w-xl mb-16 opacity-80">
          Formal education across three institutions.
        </p>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex items-start gap-6 p-7 border border-outline-variant/30 bg-white rounded-xl hover:shadow-[2px_3px_0_#c4c6cf] transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-surface-container-low rounded-lg border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[20px]">{edu.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-1">
                  <h3 className="font-inter font-semibold text-on-surface text-base">{edu.institution}</h3>
                  <span className="font-inter font-bold text-[0.65rem] text-on-surface-variant uppercase tracking-widest flex-shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="font-inter font-semibold text-secondary text-sm mb-1">{edu.degree}</p>
                {edu.location && (
                  <p className="font-inter text-[0.75rem] text-outline">{edu.location}</p>
                )}
                {edu.detail && (
                  <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed mt-2">
                    {edu.detail}
                  </p>
                )}
                {edu.certification && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant/30 rounded font-inter font-bold text-[0.6rem] text-primary uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    {edu.certification}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
