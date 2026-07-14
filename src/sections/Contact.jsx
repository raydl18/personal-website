import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" aria-hidden="true" />
      <Reveal className="max-w-[1100px] mx-auto px-6 md:px-8 text-center relative z-10">

        <span className="font-dmsans text-[11px] font-bold tracking-[0.4em] uppercase text-white/50">
          Inquiries
        </span>
        <h2 className="font-newsreader italic font-semibold text-5xl md:text-6xl mt-8 leading-tight tracking-tight">
          Let&apos;s build together.
        </h2>
        <p className="font-dmsans text-lg text-slate-300 mt-8 md:mt-10 max-w-2xl mx-auto leading-relaxed">
          I&apos;m currently seeking Summer Co-op and Internship opportunities for 2026. Let&apos;s connect
          if you&apos;re looking for a developer who values precision and impact.
        </p>

        <div className="mt-12 md:mt-16">
          <a
            href="mailto:liu.raymon@northeastern.edu"
            className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-5 bg-white text-primary font-dmsans font-bold text-lg md:text-xl rounded-sm hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition-all hover-lift"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">mail</span>
            liu.raymon@northeastern.edu
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-10 text-white/60">
          <a
            href="https://github.com/raydl18"
            target="_blank"
            rel="noreferrer"
            className="font-dmsans text-xs font-bold tracking-widest uppercase hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/raymond-liu18"
            target="_blank"
            rel="noreferrer"
            className="font-dmsans text-xs font-bold tracking-widest uppercase hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </Reveal>
    </section>
  );
}
