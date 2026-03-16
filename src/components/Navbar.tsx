import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRef, setActiveRef] = useState('');

  useEffect(() => {
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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = ['about', 'skills', 'experience', 'projects', 'certifications', 'education', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-shadow duration-300 ${scrolled ? 'bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm border-b border-[#D8D4CE]' : 'bg-transparent'}`}>
      <a href="#hero" className="font-serif text-[1.15rem] text-[#1A1814] no-underline cursor-pointer" onClick={closeMenu}>
        Shishir Mishra
      </a>
      
      <ul className={`md:flex gap-9 list-none ${menuOpen ? 'flex flex-col absolute top-[70px] left-0 right-0 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#D8D4CE] py-4 shadow-md' : 'hidden'}`}>
        {links.map((link) => (
          <li key={link} className={menuOpen ? 'px-8 py-3' : ''}>
            <a 
              href={`#${link}`}
              onClick={closeMenu}
              className={`text-[0.78rem] font-normal tracking-widest uppercase text-[#6B6760] transition-colors hover:text-[#3A6EA5] relative pb-1 group ${activeRef === link ? 'text-[#3A6EA5]' : ''}`}
            >
              {link}
              <span className={`absolute bottom-0 left-0 right-0 h-[1px] bg-[#3A6EA5] origin-left transition-transform duration-250 ${activeRef === link ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
          </li>
        ))}
      </ul>

      <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`block w-[22px] h-[1.5px] bg-[#1A1814] transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
        <span className={`block w-[22px] h-[1.5px] bg-[#1A1814] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-[22px] h-[1.5px] bg-[#1A1814] transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
      </button>
    </nav>
  );
}
