import { useEffect, useRef } from 'react';
import profilePhoto from '../assets/profile.jpg';

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-primary font-inter text-[11px] font-bold uppercase tracking-[0.15em] rounded shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
                Computer Science · Northeastern University
              </div>

              <h1 className="font-newsreader font-semibold text-5xl md:text-6xl lg:text-[64px] text-primary tracking-[-0.03em] leading-[1.05]">
                Raymond Liu
              </h1>

              <p className="font-newsreader text-2xl md:text-[26px] text-on-surface-variant font-medium">
                B.S. in Computer Science &nbsp;|&nbsp; GPA: 3.97/4.0
              </p>
            </div>

            <p className="font-newsreader text-lg md:text-xl text-on-surface/80 max-w-xl leading-relaxed">
              A software developer who builds purposeful tools and ships them. Currently maintaining
              a 3.97 GPA at Northeastern while developing production applications for campus
              organizations and independent clients.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:liu.raymon@northeastern.edu"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary text-white font-inter font-bold text-sm rounded hover:bg-slate-800 transition-all shadow-lg shadow-primary/10 active:translate-y-px"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">mail</span>
                Email Me
              </a>
              <a
                href="https://github.com/raydl18"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-200 bg-white text-primary font-inter font-bold text-sm rounded hover:bg-slate-50 hover:border-slate-300 transition-all active:translate-y-px"
              >
                <GitHubIcon className="w-[18px] h-[18px]" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/raymond-liu18"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-200 bg-white text-primary font-inter font-bold text-sm rounded hover:bg-slate-50 hover:border-slate-300 transition-all active:translate-y-px"
              >
                <LinkedInIcon className="w-[18px] h-[18px]" />
                LinkedIn
              </a>
            </div>
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
