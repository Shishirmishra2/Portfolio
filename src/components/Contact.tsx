import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('appointments')
        .insert([formData]);

      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || 'Unknown error');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-bg py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-serif text-[0.9rem] italic text-accent shrink-0">07</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-[1.1] shrink-0">Get In Touch</h2>
        <div className="flex-1 h-[1px] bg-border mb-1"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Booking Form */}
        <div className="reveal order-2 lg:order-1 flex flex-col">
          <h3 className="font-serif text-[1.4rem] text-ink mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-b border-border py-2 text-ink placeholder:text-ink-soft text-[0.95rem] focus:outline-none focus:border-accent transition-colors"
                disabled={status === 'loading'}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-b border-border py-2 text-ink placeholder:text-ink-soft text-[0.95rem] focus:outline-none focus:border-accent transition-colors"
                disabled={status === 'loading'}
              />
            </div>
            <textarea
              placeholder="What would you like to discuss?"
              rows={4}
              required
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="bg-transparent border-b border-border py-2 text-ink placeholder:text-ink-soft text-[0.95rem] focus:outline-none focus:border-accent transition-colors resize-none"
              disabled={status === 'loading'}
            ></textarea>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-4 self-start bg-ink text-bg px-8 py-3 text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:bg-accent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="text-sm text-green-500 mt-2">Appointment request sent successfully! I will get in touch with you soon.</p>}
            {status === 'error' && <p className="text-sm text-red-500 mt-2">Failed to send request: {errorMessage}</p>}
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col reveal order-1 lg:order-2" style={{ transitionDelay: '0.15s' }}>
          <p className="font-serif text-[clamp(1.2rem,2vw,1.8rem)] text-ink mb-12">
            Open to internships, full-time roles, and research collaborations in AI, ML, and Full-Stack Engineering.
          </p>
          {[
            { label: 'Email', val: 'shishirmishra2303@gmail.com', link: 'mailto:shishirmishra2303@gmail.com' },
            { label: 'Phone', val: '+91 8619224604', link: 'tel:+918619224604' },
            { label: 'GitHub', val: 'github.com/shishirmishra2', link: 'https://github.com/shishirmishra2' },
            { label: 'LinkedIn', val: 'linkedin.com/in/shishir-mishra-65ab34334', link: 'http://www.linkedin.com/in/shishir-mishra-65ab34334' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-baseline gap-6 py-5 border-b border-border">
              <span className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-ink-soft w-20 shrink-0">{item.label}</span>
              <a href={item.link} target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : '_self'} rel="noreferrer" className="text-[0.95rem] text-ink no-underline transition-colors hover:text-accent">
                {item.val}
              </a>
            </div>
          ))}
          <div className="flex items-baseline gap-6 py-5 border-b border-border">
            <span className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-ink-soft w-20 shrink-0">Location</span>
            <span className="text-[0.95rem] text-ink">Chennai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
