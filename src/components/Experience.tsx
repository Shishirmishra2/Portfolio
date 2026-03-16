const experiences = [
  {
    date: 'Jul 2025 – Jan 2026',
    role: 'Team Lead',
    org: 'TEDxSRM',
    desc: 'Led a cross-functional team for TEDxSRM, overseeing event coordination, speaker management, and team operations to deliver a successful flagship event.'
  },
  {
    date: 'Oct 2023 – Feb 2025',
    role: 'Associate Team Lead',
    org: 'Coding Ninjas SRM',
    desc: 'Coordinated technical workshops and coding events as part of the campus chapter. Mentored peers in competitive programming and DSA, driving engagement across the club.'
  },
  {
    date: 'Jan 2025',
    role: 'Volunteer — Production & Database Management',
    org: 'BookMyShow',
    desc: 'Volunteered in production coordination and database management, gaining exposure to large-scale event workflows and real-world data operations.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">03</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1A1814] leading-[1.1] shrink-0">Experience</h2>
        <div className="flex-1 h-[1px] bg-[#D8D4CE] mb-1"></div>
      </div>
      <div className="flex flex-col">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-10 border-b border-[#D8D4CE] reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <span className="text-[0.78rem] text-[#6B6760] tracking-[0.04em] pt-1">{exp.date}</span>
            <div>
              <div className="font-serif text-[1.25rem] text-[#1A1814] mb-1">{exp.role}</div>
              <div className="text-[0.85rem] text-[#3A6EA5] font-medium mb-2.5">{exp.org}</div>
              <p className="text-[0.9rem] text-[#6B6760] leading-[1.75]">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
