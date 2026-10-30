import Reveal from '../components/Reveal';

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" aria-hidden="true" />
      <Reveal className="max-w-[1100px] mx-auto px-6 md:px-8 text-center relative z-10">

        <span className="font-dmsans text-[11px] font-bold tracking-[0.4em] uppercase text-white/50">
          Inquiries
        </span>
        <h2 className="font-newsreader italic font-semibold text-5xl md:text-6xl mt-8 leading-tight tracking-tight">
          Let&apos;s connect.
        </h2>
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:liu.raymon@northeastern.edu"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-primary font-dmsans font-bold text-sm rounded hover:bg-slate-100 transition-all shadow-lg shadow-black/10 active:translate-y-px"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">mail</span>
            Email Me
          </a>
          <a
            href="https://github.com/raydl18"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/30 text-white font-dmsans font-bold text-sm rounded hover:bg-white/10 hover:border-white/50 transition-all active:translate-y-px"
          >
            <GitHubIcon className="w-[18px] h-[18px]" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/raymond-liu18"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/30 text-white font-dmsans font-bold text-sm rounded hover:bg-white/10 hover:border-white/50 transition-all active:translate-y-px"
          >
            <LinkedInIcon className="w-[18px] h-[18px]" />
            LinkedIn
          </a>
        </div>

      </Reveal>
    </section>
  );
}
