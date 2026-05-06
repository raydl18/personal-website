import { useEffect, useRef } from 'react';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) setTimeout(() => el.classList.add('visible'), 100);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden blueprint-grid">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12 fade-in">
        <div className="grid md:grid-cols-12 gap-16 items-center">

          {/* Left: text */}
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container/50 border border-outline-variant/30 text-primary font-inter text-xs font-bold rounded-full uppercase tracking-widest backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              CS Student @ Northeastern University
            </div>

            <h1 className="font-newsreader text-6xl md:text-7xl font-bold text-primary tracking-tighter leading-tight">
              Raymond Liu
            </h1>

            <p className="font-newsreader text-2xl text-on-surface-variant font-medium">
              B.S. in Computer Science | GPA: 3.97/4.0
            </p>

            <p className="font-newsreader text-xl text-on-surface max-w-xl leading-relaxed opacity-80">
              A software developer passionate about building purposeful tools and high-impact applications.
              Currently maintaining a 3.97 GPA at Northeastern University while developing solutions for
              campus organizations and personal ventures.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="mailto:liu.raymon@northeastern.edu"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-inter font-bold text-sm rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all hover-lift"
              >
                <span className="material-symbols-outlined text-[22px]">mail</span>
                Email Me
              </a>
              <a
                href="https://github.com/raydl18"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-outline text-primary font-inter font-bold text-sm rounded-xl hover:bg-surface-container-low transition-all hover-lift"
              >
                <span className="material-symbols-outlined text-[22px]">terminal</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/raymond-liu18"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-outline text-primary font-inter font-bold text-sm rounded-xl hover:bg-surface-container-low transition-all hover-lift"
              >
                <span className="material-symbols-outlined text-[22px]">share</span>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="md:col-span-5 relative group">
            <div className="rounded-2xl overflow-hidden border-[18px] border-white shadow-2xl">
              <img
                src={profilePhoto}
                alt="Raymond Liu"
                className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-10 rounded-full blur-[80px]"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary-container/10 -z-10 rounded-full blur-[60px]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
