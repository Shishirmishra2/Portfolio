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
        <span className="font-serif text-[0.9rem] italic text-accent shrink-0">03</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-[1.1] shrink-0">Experience</h2>
        <div className="flex-1 h-[1px] bg-border mb-1"></div>
      </div>
      <div className="flex flex-col border-t border-border">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative py-8 md:py-12 border-b border-border transition-colors duration-500 hover:bg-surface/30 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-4 md:gap-12 items-baseline">
              <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-ink-soft bg-surface px-3 py-1.5 rounded-full inline-flex self-start md:mt-1">{exp.date}</div>
              <div>
                <div className="font-serif text-[1.4rem] text-ink mb-1 transition-colors duration-300 group-hover:text-accent">{exp.role}</div>
                <div className="text-[0.9rem] text-ink-soft font-medium mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors duration-500"></span>
                  {exp.org}
                </div>
                <p className="text-[0.95rem] text-ink-soft leading-[1.8] max-w-3xl">{exp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
