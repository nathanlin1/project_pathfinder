import { useRef } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  useRevealOnScroll(containerRef);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 snap-start"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-500/[0.04] blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center w-full">
        <p className="reveal text-space-300 text-xs sm:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase font-light" style={{ transitionDelay: '200ms' }}>
          Hey, I'm
        </p>

        <h1 className="reveal mt-4 sm:mt-5" style={{ transitionDelay: '450ms' }}>
          <span className="text-gradient text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none">
            Nathan
          </span>
        </h1>

        <div className="reveal flex justify-center mt-6 sm:mt-8" style={{ transitionDelay: '650ms' }}>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>

        <p className="reveal text-space-200 text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium mt-5 sm:mt-6" style={{ transitionDelay: '800ms' }}>
          Software Engineer
        </p>

        <div className="reveal mt-10 sm:mt-12" style={{ transitionDelay: '1000ms' }}>
          <a
            href="#contact"
            id="cta-contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-transparent border border-space-500/60 hover:border-blue-500/40 rounded-full text-space-200 hover:text-white text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-400 hover:bg-blue-500/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="reveal" style={{ transitionDelay: '1200ms' }}>
          <a href="#about" className="text-space-500 hover:text-blue-400 transition-colors">
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
