export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-16">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8">
        <div className="font-newsreader font-bold text-slate-900 text-sm tracking-widest">
          © 2026 RAYMOND LIU. BUILT WITH PRECISION.
        </div>
        <div className="flex gap-10 font-newsreader text-xs font-bold uppercase tracking-widest">
          <a
            href="https://github.com/raydl18"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/raymond-liu18"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:liu.raymon@northeastern.edu"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            Email
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
