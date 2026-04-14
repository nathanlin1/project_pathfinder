import { useRef } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="relative flex-1 flex items-center py-16 md:py-32 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] rounded-full bg-blue-500/5 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="reveal mb-10 md:mb-16">
          <span className="text-blue-400 font-mono text-sm">05. What's Next?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">Get In Touch</h2>
        </div>

        <p className="reveal text-space-200 text-base md:text-lg max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed" style={{ transitionDelay: '200ms' }}>
          My inbox is always open! Whether you have a question, a project idea, or just want to say hello —{' '}
          <span className="text-blue-300">I'd love to hear from you</span>.
        </p>

        <div className="reveal grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12" style={{ transitionDelay: '400ms' }}>
          <a
            href="https://github.com/nathanlin1"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-github"
            className="glass-card rounded-2xl p-5 md:p-6 text-center group"
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <p className="text-white font-medium text-sm mb-1">GitHub</p>
            <p className="text-space-300 text-xs font-mono">nathanlin1</p>
          </a>

          <a
            href="https://www.linkedin.com/in/nathan-lin-58116a1ab"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin"
            className="glass-card rounded-2xl p-5 md:p-6 text-center group"
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <p className="text-white font-medium text-sm mb-1">LinkedIn</p>
            <p className="text-space-300 text-xs font-mono">nathan-lin</p>
          </a>
        </div>
      </div>
    </section>
  );
}
