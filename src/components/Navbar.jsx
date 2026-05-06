import { useState } from 'react';

const navLinks = [
  { label: 'About', id: null },
  { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
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
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center px-6 py-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-inter font-bold tracking-tighter text-slate-900 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-primary text-2xl">code</span>
          Raymond Liu
        </button>

        <div className="hidden md:flex gap-10 items-center font-inter text-sm font-semibold tracking-tight">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button className="ml-4 px-6 py-2.5 bg-primary text-white rounded-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2 font-bold">
            Resume
            <span className="material-symbols-outlined text-[18px]">download</span>
          </button>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-700 font-inter font-medium text-sm text-left"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
