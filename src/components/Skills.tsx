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
    <section id="skills" className="bg-[#F7F5F0] py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">02</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1A1814] leading-[1.1] shrink-0">Skills</h2>
        <div className="flex-1 h-[1px] bg-[#D8D4CE] mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#D8D4CE]">
        {skillGroups.map((group, idx) => (
          <div key={group.label} className="bg-[#F7F5F0] p-8 reveal" style={{ transitionDelay: `${idx * 0.05}s` }}>
            <div className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-[#3A6EA5] mb-4">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 border border-[#D8D4CE] text-[0.82rem] text-[#6B6760] cursor-default transition-colors hover:border-[#3A6EA5] hover:bg-[#E4EEF7] hover:text-[#3A6EA5]"
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
