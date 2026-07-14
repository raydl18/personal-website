const links = [
  { label: 'GitHub', href: 'https://github.com/raydl18', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/raymond-liu18', external: true },
  { label: 'Email', href: 'mailto:liu.raymon@northeastern.edu' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-8 gap-6">
        <div className="font-inter font-bold text-slate-400 text-[10px] tracking-widest uppercase">
          © 2026 Raymond Liu. Built with precision.
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-inter text-[10px] font-bold uppercase tracking-widest">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
