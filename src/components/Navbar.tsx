import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRef, setActiveRef] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(sec => {
        // @ts-ignore
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      setActiveRef(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = ['about', 'skills', 'experience', 'projects', 'certifications', 'education', 'contact'];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-auto ${scrolled ? 'top-2' : 'top-4'}`}>
      <div className={`mx-auto flex justify-between items-center px-6 py-3 transition-all duration-500 rounded-full bg-bg/50 backdrop-blur-xl border border-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)]`}>
        
        {/* Logo/Name */}
        <a href="#hero" className="font-serif text-[1.12rem] text-ink no-underline cursor-pointer mr-auto md:mr-12 hover:text-accent transition-colors" onClick={closeMenu}>
          Shishir Mishra
        </a>
        
        {/* Desktop Links */}
        <ul className={`hidden md:flex gap-8 list-none m-0 items-center`}>
          {links.map((link) => (
            <li key={link}>
              <a 
                href={`#${link}`}
                onClick={closeMenu}
                className={`text-[0.72rem] font-medium tracking-[0.15em] uppercase transition-colors relative py-2 group ${activeRef === link ? 'text-accent' : 'text-ink-soft hover:text-accent'}`}
              >
                {link}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left transition-transform duration-300 rounded-full ${activeRef === link ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="ml-6 md:ml-8 p-1.5 text-ink-soft hover:text-accent transition-colors cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 ml-4 relative z-50" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`block w-[20px] h-[1.5px] bg-ink transition-all duration-300 rounded-full ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
          <span className={`block w-[20px] h-[1.5px] bg-ink transition-all duration-300 rounded-full ${menuOpen ? 'opacity-0 translate-x-2' : ''}`}></span>
          <span className={`block w-[20px] h-[1.5px] bg-ink transition-all duration-300 rounded-full ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-[110%] left-0 right-0 transition-all duration-500 origin-top rounded-2xl overflow-hidden ${menuOpen ? 'opacity-100 scale-y-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <ul className="flex flex-col m-0 p-4 bg-bg/95 backdrop-blur-xl border border-border/50 list-none rounded-2xl">
          {links.map((link, idx) => (
            <li key={link} className={idx !== links.length - 1 ? 'border-b border-border/30' : ''}>
              <a 
                href={`#${link}`}
                onClick={closeMenu}
                className={`block w-full py-4 px-4 text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors ${activeRef === link ? 'text-accent bg-accent-light/50 rounded-lg' : 'text-ink-soft hover:text-accent'}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
