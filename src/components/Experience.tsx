import { useEffect, useRef } from 'react';

const experiences = [
  {
    title: 'R&D Operations',
    company: 'Stealth Startup',
    location: 'San Francisco, CA',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [],
  },
  {
    title: 'Software Engineer / Scrum Master / Product Owner',
    company: 'University of California, Santa Cruz',
    location: 'Santa Cruz, CA',
    period: 'Jan 2024 – Dec 2024',
    current: false,
    bullets: [
      'Led Agile teams of 6, managing full-cycle software engineering, Scrum Master, and Product Owner duties.',
      'Developed core full-stack and mobile features, delivering production-ready code throughout the SDLC.',
      'Facilitated Scrum ceremonies to ensure consistent, high-velocity sprint delivery.',
      'Owned product backlogs, translating sponsor needs into actionable user stories and goals.',
      'Optimized task allocation via Slack and Trello based on team capacity and strengths.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative min-h-screen flex items-center py-20 md:py-32 px-6 snap-start">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="reveal opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-blue-400 font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`reveal opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${exp.current
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                      : 'bg-space-700 border border-space-500'
                      }`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`glass-card rounded-2xl flex-1 ${exp.bullets.length > 0 ? 'p-8' : 'px-8 py-5'}`}>
                    <div className={`flex flex-wrap items-center justify-between gap-4`}>
                      <div>
                        <h3 className="text-white text-xl font-bold">{exp.title}</h3>
                        <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${exp.current
                          ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                          : 'bg-space-600 text-space-200'
                          }`}>
                          {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                          {exp.period}
                        </span>
                        <p className="text-space-300 text-sm mt-1">{exp.location}</p>
                      </div>
                    </div>

                    {exp.bullets.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-space-200 text-sm leading-relaxed">
                            <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
