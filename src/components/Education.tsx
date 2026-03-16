const education = [
  { year: '2022 – 2027', degree: 'B.Tech — Artificial Intelligence', school: 'SRM Institute of Science and Technology', loc: 'Kattankulathur, Chennai, Tamil Nadu', score: 'CGPA — 8.53 / 10' },
  { year: '2022', degree: 'Class XII — CBSE · PCM', school: 'BSN Academy', loc: 'Kota, Rajasthan', score: '72%' },
  { year: '2020', degree: 'Class X — CBSE · PCM', school: 'BSN Academy', loc: 'Kota, Rajasthan', score: '92.2%' }
];

export default function Education() {
  return (
    <section id="education" className="bg-[#F7F5F0] py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">06</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1A1814] leading-[1.1] shrink-0">Education</h2>
        <div className="flex-1 h-[1px] bg-[#D8D4CE] mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, idx) => (
          <div key={idx} className="p-10 border border-[#D8D4CE] bg-white relative overflow-hidden transition-colors duration-300 hover:border-[#3A6EA5] group reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="absolute top-0 left-0 w-[3px] h-full bg-[#D8D4CE] transition-colors duration-300 group-hover:bg-[#3A6EA5]"></div>
            <div className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-[#3A6EA5] mb-3">{edu.year}</div>
            <div className="font-serif text-[1.2rem] text-[#1A1814] mb-1.5 leading-[1.3]">{edu.degree}</div>
            <div className="text-[0.85rem] text-[#6B6760] mb-1">{edu.school}</div>
            <div className="text-[0.78rem] text-[#6B6760]">{edu.loc}</div>
            <div className="inline-block mt-5 px-3 py-1 bg-[#E4EEF7] text-[#3A6EA5] text-[0.78rem] font-medium">{edu.score}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
