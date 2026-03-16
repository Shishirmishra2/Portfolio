const projects = [
  {
    domain: 'Ed Tech',
    title: 'Algoplay',
    stack: 'Next.js · TypeScript · Supabase · Google Gemini 2.0 Flash · Tailwind CSS',
    desc: 'A full-stack gamified CS learning platform helping students prepare for technical interviews through AI-generated quizzes and browser-based games. Integrated Google Gemini 2.0 Flash to dynamically generate MCQ questions across DSA, OS, AI, and DBMS topics. Features Supabase auth, protected routing, a 10-minute timed quiz engine, and 5 rebuilt classic games with bot AI.',
    period: 'Nov 2025',
    link: '#',
    badge: null
  },
  {
    domain: 'Health Tech',
    title: 'Neuro-Symbolic Patient Knowledge Graph',
    stack: 'Python · Neo4j (Cypher) · LangChain · Spark NLP · GPT-4o · Next.js',
    desc: 'Architected N-PKG, a Neuro-Symbolic AI system bridging the gap between neural LLMs and symbolic Knowledge Graphs to provide hallucination-free, patient-centric clinical insights. Combines GPT-4o reasoning with structured graph traversal via Neo4j.',
    period: 'Jan 2026 – Present',
    link: null,
    badge: 'In Progress'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F7F5F0] py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">04</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1A1814] leading-[1.1] shrink-0">Projects</h2>
        <div className="flex-1 h-[1px] bg-[#D8D4CE] mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-10 border border-[#D8D4CE] flex flex-col transition-all duration-300 hover:shadow-[0_8px_32px_rgba(58,110,165,0.1)] hover:border-[#3A6EA5] hover:-translate-y-1 reveal" style={{ transitionDelay: `${idx * 0.12}s` }}>
            <span className="inline-block self-start mb-5 px-2.5 py-1 bg-[#E4EEF7] text-[#3A6EA5] text-[0.68rem] font-medium tracking-[0.1em] uppercase">
              {proj.domain}
            </span>
            <h3 className="font-serif text-[1.5rem] text-[#1A1814] mb-2 leading-[1.2]">{proj.title}</h3>
            <p className="text-[0.75rem] text-[#6B6760] italic mb-4">{proj.stack}</p>
            <p className="text-[0.9rem] text-[#6B6760] leading-[1.78] flex-1 mb-6">
              {proj.desc}
            </p>
            <div className="flex justify-between items-center border-t border-[#D8D4CE] pt-4">
              <span className="text-[0.75rem] text-[#6B6760]">{proj.period}</span>
              {proj.badge && (
                <span className="px-2.5 py-1 border border-[#3A6EA5] text-[#3A6EA5] text-[0.65rem] font-medium tracking-[0.08em] uppercase">
                  {proj.badge}
                </span>
              )}
              {proj.link && (
                <a href={proj.link} className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-[#3A6EA5] no-underline transition-opacity hover:opacity-70 hover:underline">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
