export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">01</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1A1814] leading-[1.1] shrink-0">About Me</h2>
        <div className="flex-1 h-[1px] bg-[#D8D4CE] mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="reveal">
          <p className="text-[1.02rem] text-[#6B6760] leading-[1.9] mb-5">
            I'm <strong className="text-[#1A1814] font-medium">Shishir Mishra</strong>, a B.Tech student specialising in <strong className="text-[#1A1814] font-medium">Artificial Intelligence</strong> at SRM Institute of Science and Technology, Kattankulathur. I combine a rigorous academic background with hands-on project experience spanning AI systems, full-stack web development, and knowledge graph engineering.
          </p>
          <p className="text-[1.02rem] text-[#6B6760] leading-[1.9] mb-5">
            My work ranges from building <strong className="text-[#1A1814] font-medium">gamified EdTech platforms</strong> powered by Google Gemini AI, to architecting <strong className="text-[#1A1814] font-medium">Neuro-Symbolic healthcare systems</strong> that eliminate hallucinations in clinical LLM outputs — bridging the gap between research and production-ready applications.
          </p>
          <p className="text-[1.02rem] text-[#6B6760] leading-[1.9] mb-5">
            Outside of technical work, I've served as <strong className="text-[#1A1814] font-medium">Team Lead at TEDxSRM</strong>, Associate Team Lead at Coding Ninjas SRM, and volunteered with BookMyShow — sharpening leadership, communication, and coordination skills alongside technical ones.
          </p>
        </div>
        <div className="reveal flex flex-col" style={{ transitionDelay: '0.15s' }}>
          {[
            { label: 'Email', val: 'sm3865@srmist.edu.in' },
            { label: 'Phone', val: '+91 8619224604' },
            { label: 'Location', val: '203 Abode Valley, Kattankulathur, Chennai, TN' },
            { label: 'University', val: 'SRM IST — Kattankulathur' },
            { label: 'Degree', val: 'B.Tech — Artificial Intelligence (2027)' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 py-4 border-b border-[#D8D4CE]">
              <span className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-[#3A6EA5]">{item.label}</span>
              <span className="text-[0.95rem] text-[#1A1814]">{item.val}</span>
            </div>
          ))}
          <div className="flex flex-col gap-1 py-4 border-b border-[#D8D4CE]">
            <span className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-[#3A6EA5]">Languages</span>
            <div className="flex gap-2 flex-wrap mt-1">
              {['🇬🇧 English — Professional', '🇮🇳 Hindi — Native', '🇯🇵 Japanese — Limited'].map(lang => (
                <span key={lang} className="px-3 py-1 bg-[#E4EEF7] text-[#3A6EA5] text-[0.72rem] font-medium">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
