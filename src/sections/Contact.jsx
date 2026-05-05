export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-container mx-auto text-center">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Contact</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-3">
          Let's connect
        </h2>
        <p className="font-newsreader text-lg text-on-surface-variant max-w-md mx-auto mb-16 opacity-80">
          I'm currently seeking Summer Co-op and Internship opportunities. If you're looking for a
          dedicated developer to join your team, let's connect.
        </p>

        <div className="border border-outline-variant/30 rounded-xl p-8 md:p-10 max-w-lg mx-auto hover:shadow-[2px_3px_0_#c4c6cf] transition-shadow">
          <div className="flex flex-col gap-4">
            <a
              href="mailto:liu.raymon@northeastern.edu"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white font-inter font-bold text-sm rounded-xl hover:bg-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              liu.raymon@northeastern.edu
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/raydl18"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-outline text-primary font-inter font-bold text-sm rounded-xl hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/raymond-liu18"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-outline text-primary font-inter font-bold text-sm rounded-xl hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 font-inter text-xs text-on-surface-variant tracking-widest uppercase">
          © {new Date().getFullYear()} Raymond Liu. Built with Precision.
        </p>
      </div>
    </section>
  );
}
