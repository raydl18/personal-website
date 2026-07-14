import { useState } from 'react';

const navLinks = [
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        <button
          onClick={() => scrollTo(null)}
          className="font-newsreader italic font-bold text-xl tracking-tight text-primary rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          Raymond Liu
        </button>

        <div className="hidden md:flex gap-10 items-center font-inter text-[13px] font-semibold uppercase tracking-wider">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-500 hover:text-primary transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <a
            href="/raymond_liu.pdf"
            download="Raymond_Liu_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded font-inter font-bold text-[13px] hover:bg-slate-800 transition-all active:translate-y-px"
          >
            Resume
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">download</span>
          </a>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined" aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-700 font-inter font-semibold text-sm text-left uppercase tracking-wider"
            >
              {label}
            </button>
          ))}
          <a
            href="/raymond_liu.pdf"
            download="Raymond_Liu_Resume.pdf"
            className="inline-flex items-center gap-2 text-primary font-inter font-bold text-sm uppercase tracking-wider"
            onClick={() => setMenuOpen(false)}
          >
            Resume
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">download</span>
          </a>
        </div>
      )}
    </nav>
  );
}
