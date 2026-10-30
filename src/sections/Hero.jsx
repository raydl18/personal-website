import { useEffect, useRef } from 'react';
import profilePhoto from '../assets/linkedin-headshot.jpeg';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const t = setTimeout(() => el.classList.add('visible'), 80);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <section className="pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden blueprint-grid">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-8 fade-in">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-primary font-dmsans text-[11px] font-bold uppercase tracking-[0.15em] rounded shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
                Northeastern University Class of 2029
              </div>

              <h1 className="font-newsreader font-semibold text-5xl md:text-6xl lg:text-[64px] text-primary tracking-[-0.03em] leading-[1.05]">
                Raymond Liu
              </h1>

              <p className="font-newsreader text-2xl md:text-[26px] text-on-surface-variant font-medium">
                B.S. in Computer Science &nbsp;|&nbsp; GPA: 3.97/4.0
              </p>
            </div>

            <p className="font-dmsans text-lg text-on-surface-variant max-w-xl leading-relaxed">
              I'm currently a Northeastern student and an incoming Software Engineer Co-op at ERGO NEXT. I love creating products that make everyday life easier!
            </p>
          </div>

          {/* Right: framed portrait */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[0.9] rounded-sm overflow-hidden border-[14px] md:border-[16px] border-white shadow-2xl relative z-10 bg-slate-100">
              <img
                src={profilePhoto}
                alt="Portrait of Raymond Liu"
                className="w-full h-full object-cover grayscale-[12%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 -z-0 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/10 -z-0 rounded-full blur-3xl" aria-hidden="true"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
