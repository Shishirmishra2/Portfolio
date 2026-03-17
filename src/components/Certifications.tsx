const certs = [
  { name: 'Programming in Java', issuer: 'NPTEL', id: 'NPTEL24CS105S552513216', date: 'Oct 2024', badge: 'NPTEL' },
  { name: 'AI ML Virtual Internship', issuer: 'AICTE', id: '5163f5b4989e4501d9e5c26423dcc113', date: 'Sept 2024', badge: 'AICTE' },
  { name: 'The Complete Full-Stack Web Development Bootcamp', issuer: 'Udemy', id: 'UC-544f1640-079c-41b4-9f8c-bb066c32313e', date: 'Feb 2026', badge: 'Udemy' },
  { name: 'Complete Data Science, Machine Learning, DL, NLP Bootcamp', issuer: 'Udemy', id: 'UC-f5b81b7-de1e-45c6-ab71-5369f95cf109', date: 'Feb 2026', badge: 'Udemy' }
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-accent shrink-0">05</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-[1.1] shrink-0">Certifications</h2>
        <div className="flex-1 h-[1px] bg-border mb-1"></div>
      </div>
      <div className="flex flex-col border-t border-border">
        {certs.map((cert, idx) => (
          <div key={idx} className="group relative py-6 border-b border-border transition-colors duration-500 hover:bg-surface/30 reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[1.1rem] font-serif text-ink transition-colors duration-300 group-hover:text-accent">{cert.name}</span>
                  <span className="hidden md:inline-flex px-2 py-0.5 rounded bg-surface text-ink-soft text-[0.6rem] font-medium tracking-[0.1em] uppercase transition-colors duration-500 group-hover:bg-accent-light/50 group-hover:text-accent">{cert.badge}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-border group-hover:bg-accent transition-colors duration-500"></span>
                  <span className="text-[0.8rem] text-ink-soft font-medium">{cert.issuer}</span>
                  <span className="text-[0.8rem] text-border mx-1">•</span>
                  <span className="text-[0.7rem] text-ink-soft/70 font-mono tracking-[0.03em] truncate max-w-[200px] md:max-w-xs">{cert.id}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center gap-2 shrink-0">
                <span className="px-2 py-0.5 md:hidden rounded bg-surface text-ink-soft text-[0.6rem] font-medium tracking-[0.1em] uppercase transition-colors duration-500 group-hover:bg-accent-light/50 group-hover:text-accent">{cert.badge}</span>
                <span className="text-[0.78rem] text-ink-soft whitespace-nowrap">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
