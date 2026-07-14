import Reveal from '../components/Reveal';

const coursework = 'Linear Algebra, Foundations of Data Science, Object-Oriented Design, Intro to Cybersecurity';

export default function AcademicRecord() {
  return (
    <section id="education" className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          <Reveal className="lg:col-span-4">
            <span className="font-dmsans text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Academic Record
            </span>
            <h2 className="font-newsreader font-semibold text-3xl md:text-4xl text-primary mt-6 tracking-[-0.01em]">
              Foundation
            </h2>
            <p className="font-dmsans text-sm text-slate-500 mt-6 leading-relaxed max-w-xs">
              A rigorous academic background focused on computer science fundamentals and continuous
              learning.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8 grid md:grid-cols-2 gap-10 md:gap-12" delay={80}>

            {/* Featured: Northeastern */}
            <div className="resume-border resume-dot">
              <h3 className="font-newsreader font-semibold text-2xl text-primary">Northeastern University</h3>
              <p className="font-dmsans text-sm font-bold text-slate-800 mt-1">B.S. in Computer Science</p>
              <p className="font-dmsans text-sm text-slate-500 font-medium mt-0.5">Class of 2029 · Boston, MA</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center flex-wrap gap-2.5">
                  <p className="font-dmsans text-[13px] text-slate-600">
                    <span className="font-bold text-primary">GPA:</span> 3.97 / 4.0
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-yellow-200 bg-yellow-100 text-yellow-800 font-dmsans text-[10px] font-bold uppercase tracking-widest">
                    Dean&apos;s List
                  </span>
                </div>
                <p className="font-dmsans text-[13px] text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">Coursework:</span> {coursework}
                </p>
              </div>
            </div>

            {/* Secondary: De Anza + Los Altos HS */}
            <div className="space-y-10">
              <div className="resume-border">
                <h3 className="font-newsreader font-semibold text-xl text-primary">De Anza College</h3>
                <p className="font-dmsans text-xs text-slate-500 font-medium mt-1">Dual Enrollment · Jan–Jul 2025</p>
                <p className="font-dmsans text-[13px] text-slate-600 mt-2 leading-relaxed">
                  Computer Science coursework (22.5 units) · Cupertino, CA
                </p>
              </div>

              <div className="resume-border">
                <h3 className="font-newsreader font-semibold text-xl text-primary">Los Altos High School</h3>
                <p className="font-dmsans text-xs text-slate-500 font-medium mt-1">Class of 2025 · Los Altos, CA</p>
                <p className="font-dmsans text-[13px] font-bold text-slate-800 mt-2">GPA: 4.28 / 4.0</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-dmsans text-[10px] font-bold uppercase tracking-wide">
                    Varsity Badminton MVP
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-dmsans text-[10px] font-bold uppercase tracking-wide">
                    Varsity Soccer
                  </span>
                </div>
              </div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
