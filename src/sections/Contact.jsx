export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center relative z-10">

        <span className="font-inter text-xs font-bold text-on-primary-container tracking-widest uppercase opacity-70">
          Connect
        </span>
        <h2 className="font-newsreader font-bold text-5xl md:text-7xl mt-8 leading-[1.1] tracking-[-0.02em]">
          Let's build together.
        </h2>
        <p className="font-newsreader text-xl text-on-primary-container mt-10 max-w-2xl mx-auto opacity-80 leading-relaxed">
          I'm currently seeking Summer Co-op and Internship opportunities. If you're looking for a
          dedicated developer to join your team, let's connect.
        </p>

        <div className="mt-16 flex flex-col md:flex-row justify-center">
          <a
            href="mailto:liu.raymon@northeastern.edu"
            className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-primary font-newsreader font-bold text-xl rounded-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all hover-lift"
          >
            <span className="material-symbols-outlined text-3xl">alternate_email</span>
            liu.raymon@northeastern.edu
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-12">
          <a
            href="https://github.com/raydl18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-fixed transition-colors flex flex-col items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
              terminal
            </span>
            <span className="font-newsreader text-xs font-bold tracking-widest uppercase">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/raymond-liu18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary-fixed transition-colors flex flex-col items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
              share
            </span>
            <span className="font-newsreader text-xs font-bold tracking-widest uppercase">LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}
