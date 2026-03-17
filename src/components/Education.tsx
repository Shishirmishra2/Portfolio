const education = [
  { year: '2022 – 2027', degree: 'B.Tech — Artificial Intelligence', school: 'SRM Institute of Science and Technology', loc: 'Kattankulathur, Chennai, Tamil Nadu', score: 'CGPA — 8.53 / 10' },
  { year: '2022', degree: 'Class XII — CBSE · PCM', school: 'BSN Academy', loc: 'Kota, Rajasthan', score: '72%' },
  { year: '2020', degree: 'Class X — CBSE · PCM', school: 'BSN Academy', loc: 'Kota, Rajasthan', score: '92.2%' }
];

export default function Education() {
  return (
    <section id="education" className="bg-bg py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-accent shrink-0">06</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-[1.1] shrink-0">Education</h2>
        <div className="flex-1 h-[1px] bg-border mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, idx) => (
          <div key={idx} className="group relative flex flex-col h-full p-8 md:p-10 rounded-2xl bg-white border border-border/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-border reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
            
            <div className="flex justify-between items-start mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-light/50 text-accent mb-2 transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-ink-soft bg-bg px-3 py-1.5 rounded-full">{edu.year}</div>
            </div>

            <div className="font-serif text-[1.25rem] text-ink mb-3 leading-[1.3] transition-colors duration-300 group-hover:text-accent">{edu.degree}</div>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2 text-ink-soft">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
                </svg>
                <span className="text-[0.85rem] leading-[1.4]">{edu.school}</span>
              </div>
              
              <div className="flex items-start gap-2 text-ink-soft">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[0.78rem] leading-[1.4]">{edu.loc}</span>
              </div>
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-4 justify-between items-center border-t border-border/40 transition-colors duration-500">
              <span className="text-[0.65rem] uppercase tracking-wider text-ink-soft shrink-0">Performance</span>
              <div className="px-3 py-1.5 bg-bg text-ink text-[0.8rem] rounded-md shadow-sm shrink-0 leading-tight text-center">{edu.score}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
