import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-container mx-auto flex justify-between items-center px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold tracking-tighter text-slate-900 flex items-center gap-2 font-inter"
        >
          <span className="material-symbols-outlined text-primary">code</span>
          Raymond Liu
        </button>

        <div className="hidden md:flex gap-8 items-center font-inter text-sm font-medium tracking-tight">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button className="ml-4 px-5 py-2 bg-primary text-white rounded hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 font-bold">
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
