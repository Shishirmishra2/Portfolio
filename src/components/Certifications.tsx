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
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">05</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1A1814] leading-[1.1] shrink-0">Certifications</h2>
        <div className="flex-1 h-[1px] bg-[#D8D4CE] mb-1"></div>
      </div>
      <div className="flex flex-col gap-[1px] bg-[#D8D4CE]">
        {certs.map((cert, idx) => (
          <div key={idx} className="flex justify-between items-center bg-white p-7 md:px-8 gap-4 transition-colors hover:bg-[#E4EEF7] reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[1rem] font-medium text-[#1A1814]">{cert.name}</span>
              <span className="text-[0.8rem] text-[#6B6760]">{cert.issuer}</span>
              <span className="text-[0.7rem] text-[#6B6760] font-mono tracking-[0.03em] break-all">{cert.id}</span>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <span className="text-[0.78rem] text-[#6B6760] whitespace-nowrap">{cert.date}</span>
              <span className="px-2.5 py-1 border border-[#3A6EA5] text-[#3A6EA5] text-[0.65rem] font-medium tracking-[0.1em] uppercase">{cert.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
