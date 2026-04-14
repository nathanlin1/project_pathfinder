import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 snap-start"
    >
      {/* Ambient glow — very subtle, off-center for depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center">
        {/* "Hey, I'm" — whisper-quiet intro */}
        <p className="reveal opacity-0 transition-all duration-700 delay-200 translate-y-6 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-space-300 text-sm sm:text-base tracking-[0.3em] uppercase font-light">
          Hey, I'm
        </p>

        {/* Name — the hero, massive and gradient */}
        <h1 className="reveal opacity-0 transition-all duration-700 delay-[450ms] translate-y-6 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-5">
          <span className="text-gradient text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none">
            Nathan
          </span>
        </h1>

        {/* Thin accent line */}
        <div className="reveal opacity-0 transition-all duration-700 delay-[650ms] [&.animate-in]:opacity-100 flex justify-center mt-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>

        {/* "Software Engineer" — understated, tracked out */}
        <p className="reveal opacity-0 transition-all duration-700 delay-[800ms] translate-y-4 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-space-200 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mt-6">
          Software Engineer
        </p>

        {/* CTA — single, ghost button */}
        <div className="reveal opacity-0 transition-all duration-700 delay-[1000ms] translate-y-4 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-12">
          <a
            href="#contact"
            id="cta-contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-space-500/60 hover:border-blue-500/40 rounded-full text-space-200 hover:text-white text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-400 hover:bg-blue-500/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll — bottom center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="reveal opacity-0 transition-all duration-500 delay-[1200ms] [&.animate-in]:opacity-100">
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
