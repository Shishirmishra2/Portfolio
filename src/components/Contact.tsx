export default function Contact() {
  return (
    <section id="contact" className="bg-[#1A1814] py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-[#3A6EA5] shrink-0">07</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[rgba(247,245,240,0.92)] leading-[1.1] shrink-0">Get In Touch</h2>
        <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.14)] mb-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        <p className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] text-[rgba(247,245,240,0.88)] leading-[1.45] reveal">
          Open to internships, full-time roles, and research collaborations in AI, ML, and Full-Stack Engineering.
        </p>
        <div className="flex flex-col reveal" style={{ transitionDelay: '0.15s' }}>
          {[
            { label: 'Email', val: 'sm3865@srmist.edu.in', link: 'mailto:sm3865@srmist.edu.in' },
            { label: 'Phone', val: '+91 8619224604', link: 'tel:+918619224604' },
            { label: 'GitHub', val: 'github.com/shishirmishra', link: 'https://github.com/shishirmishra' },
            { label: 'LinkedIn', val: 'linkedin.com/in/shishirmishra', link: 'https://linkedin.com/in/shishirmishra' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-baseline gap-6 py-5 border-b border-[rgba(255,255,255,0.09)]">
              <span className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-[rgba(255,255,255,0.38)] w-20 shrink-0">{item.label}</span>
              <a href={item.link} target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : '_self'} rel="noreferrer" className="text-[0.95rem] text-[rgba(247,245,240,0.88)] no-underline transition-colors hover:text-[#3A6EA5]">
                {item.val}
              </a>
            </div>
          ))}
          <div className="flex items-baseline gap-6 py-5 border-b border-[rgba(255,255,255,0.09)]">
            <span className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-[rgba(255,255,255,0.38)] w-20 shrink-0">Location</span>
            <span className="text-[0.95rem] text-[rgba(247,245,240,0.88)]">Chennai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
