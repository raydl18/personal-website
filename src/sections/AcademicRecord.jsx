export default function AcademicRecord() {
  return (
    <section className="py-32 bg-surface-bright">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-16 items-center">

        <div className="md:col-span-1">
          <span className="font-inter text-xs font-bold text-outline uppercase tracking-widest">
            Foundation
          </span>
          <h2 className="font-newsreader font-bold text-4xl text-primary mt-6">Academic Record</h2>
        </div>

        <div className="md:col-span-2 p-10 glass-card rounded-3xl border border-outline-variant/30 shadow-md">
          <div className="space-y-8">

            {/* Northeastern University */}
            <div className="p-8 bg-white/40 rounded-2xl border border-primary/5">
              <div className="flex items-center gap-6 mb-6">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  school
                </span>
                <div>
                  <h3 className="font-newsreader font-bold text-xl text-slate-900">Northeastern University</h3>
                  <p className="font-newsreader text-slate-600 text-sm mt-0.5">
                    B.S. in Computer Science · Class of 2028
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <span className="font-inter text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                    Performance
                  </span>
                  <p className="font-inter font-black text-2xl text-primary">3.97 / 4.0 GPA</p>
                  <p className="font-inter text-xs text-slate-500 mt-0.5">Honors: Dean's List</p>
                </div>
                <div>
                  <span className="font-inter text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                    Key Coursework
                  </span>
                  <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed italic">
                    Linear Algebra, Foundations of Data Science, Object-Oriented Design, Intro to Cybersecurity
                  </p>
                </div>
              </div>
            </div>

            {/* De Anza + LAHS */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/40 rounded-2xl border border-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">history_edu</span>
                  <div>
                    <h4 className="font-newsreader font-bold text-slate-900">De Anza College</h4>
                    <p className="font-newsreader text-xs text-slate-600">Dual Enrollment · Jan–Jul 2025</p>
                  </div>
                </div>
                <p className="font-newsreader text-sm text-on-surface-variant">
                  Computer Science coursework, Cupertino, CA
                </p>
              </div>

              <div className="p-6 bg-white/40 rounded-2xl border border-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">workspace_premium</span>
                  <div>
                    <h4 className="font-newsreader font-bold text-slate-900">Los Altos High School</h4>
                    <p className="font-newsreader text-xs text-slate-600">Class of 2025</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-inter font-bold text-sm text-primary">GPA: 4.28 / 4.0</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-newsreader text-xs font-bold bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-full">
                      Varsity Badminton MVP
                    </span>
                    <span className="font-newsreader text-xs font-bold bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-full">
                      Varsity Soccer
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
