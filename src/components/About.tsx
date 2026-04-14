import { useRef } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const quickBio = [
  { label: 'Education', value: 'B.S. Computer Science', sub: 'UC Santa Cruz' },
  { label: 'Graduated', value: 'June 2025' },
  { label: 'Focus', value: 'Full-Stack Development' },
  { label: 'Location', value: 'CA' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex items-center py-16 md:py-32 px-6 snap-start">
      <div className="max-w-6xl mx-auto w-full">
        <div className="reveal mb-10 md:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-blue-400 font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-3 space-y-5 md:space-y-6">
            <p className="reveal text-space-200 text-base md:text-lg leading-relaxed" style={{ transitionDelay: '200ms' }}>
              I'm a recent Computer Science graduate from the{' '}
              <span className="text-blue-400 font-medium">University of California, Santa Cruz</span>{' '}
              with a passion for building software that's both functional and delightful to use. My journey through CS has given me a strong foundation
              in{' '}
              <span className="text-blue-300">system design</span>,{' '}
              <span className="text-blue-300">data structures</span>, and{' '}
              <span className="text-blue-300">full-stack development</span>.
            </p>
            <p className="reveal text-space-200 text-base md:text-lg leading-relaxed" style={{ transitionDelay: '300ms' }}>
              I thrive in collaborative, agile environments — having served as both a Scrum Master and Product Owner, I understand the full lifecycle of software development from requirement gathering to deployment.
            </p>
          </div>

          <div className="reveal lg:col-span-2" style={{ transitionDelay: '500ms' }}>
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4 md:space-y-5">
              <h3 className="text-white font-semibold text-lg mb-4 md:mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Bio
              </h3>

              {quickBio.map((fact) => (
                <div key={fact.label} className="flex justify-between items-start gap-3 border-b border-space-600 pb-3 md:pb-4 last:border-0 last:pb-0">
                  <span className="text-space-300 text-xs sm:text-sm">{fact.label}</span>
                  <div className="text-right">
                    <span className="text-white text-xs sm:text-sm font-medium">{fact.value}</span>
                    {fact.sub && <span className="block text-blue-400 text-[11px] sm:text-xs mt-0.5">{fact.sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
