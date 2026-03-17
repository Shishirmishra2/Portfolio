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
    <section id="projects" className="bg-bg py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-accent shrink-0">04</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-[1.1] shrink-0">Projects</h2>
        <div className="flex-1 h-[1px] bg-border mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="group relative flex flex-col h-full bg-white p-8 md:p-10 rounded-2xl border border-border/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-border reveal" style={{ transitionDelay: `${idx * 0.12}s` }}>
            <span className="inline-block self-start mb-5 px-3 py-1.5 rounded-md bg-bg text-ink-soft text-[0.68rem] font-medium tracking-[0.1em] uppercase transition-colors duration-500 group-hover:bg-accent-light/50 group-hover:text-accent">
              {proj.domain}
            </span>
            <h3 className="font-serif text-[1.5rem] text-ink mb-2 leading-[1.2] transition-colors duration-300 group-hover:text-accent">{proj.title}</h3>
            <p className="text-[0.75rem] text-ink-soft italic mb-4">{proj.stack}</p>
            <p className="text-[0.9rem] text-ink-soft leading-[1.78] flex-1 mb-6">
              {proj.desc}
            </p>
            <div className="mt-auto pt-6 flex justify-between items-center border-t border-border/40 transition-colors duration-500">
              <span className="text-[0.75rem] text-ink-soft">{proj.period}</span>
              <div className="flex gap-3 items-center">
                {proj.badge && (
                  <span className="px-2.5 py-1 rounded-md border border-border text-ink-soft text-[0.65rem] font-medium tracking-[0.08em] uppercase transition-colors duration-500 group-hover:border-accent/30 group-hover:text-accent">
                    {proj.badge}
                  </span>
                )}
                {proj.link && (
                  <a href={proj.link} className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-ink-soft no-underline transition-colors duration-500 hover:text-accent">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
