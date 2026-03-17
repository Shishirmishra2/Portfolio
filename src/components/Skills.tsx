const skillGroups = [
  {
    label: 'Programming Languages',
    tags: ['Python', 'C', 'C++']
  },
  {
    label: 'Web Technologies',
    tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Next.js', 'TypeScript']
  },
  {
    label: 'AI / ML Domain',
    tags: ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'NLP', 'DSA', 'LangChain']
  },
  {
    label: 'Tools & Technologies',
    tags: ['Git', 'VS Code', 'Anaconda', 'Google Colab', 'Supabase', 'Neo4j', 'SQL']
  },
  {
    label: 'Design & Simulation',
    tags: ['Figma', 'AutoCAD', 'Canva']
  },
  {
    label: 'AI Models & Platforms',
    tags: ['Google Gemini AI', 'GPT-4o', 'Spark NLP', 'Tailwind CSS']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-accent shrink-0">02</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-[1.1] shrink-0">Skills</h2>
        <div className="flex-1 h-[1px] bg-border mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {skillGroups.map((group, idx) => (
          <div key={group.label} className="reveal" style={{ transitionDelay: `${idx * 0.05}s` }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-border transition-colors duration-500"></span>
              <div className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-ink">
                {group.label}
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 rounded-md border border-border/60 bg-surface/50 text-[0.75rem] text-ink-soft cursor-default transition-all duration-300 hover:border-accent hover:bg-accent-light hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
