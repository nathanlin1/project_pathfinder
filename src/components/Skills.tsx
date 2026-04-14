import { useRef } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const skillCategories = [
  {
    title: 'Languages',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    skills: ['React', 'Express', 'Node.js', 'React Native', 'Astro', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ['Git', 'Docker', 'PostgreSQL', 'Supabase', 'Jest'],
  },
];

const coursework = [
  'Computer Systems Design',
  'Data Structures & Algorithms',
  'Software Engineering',
  'Full-Stack Development',
  'Computer Networks',
  'Database Systems',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="skills" ref={sectionRef} className="relative min-h-screen flex items-center py-16 md:py-32 px-6 snap-start">
      <div className="max-w-6xl mx-auto w-full">
        <div className="reveal mb-10 md:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-blue-400 font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Skills</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="reveal"
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-white text-lg font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-lg bg-space-700/80 text-space-100 border border-space-500/60 hover:border-blue-500/30 hover:text-blue-300 hover:bg-space-600/50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 md:mt-12" style={{ transitionDelay: '700ms' }}>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-bold text-lg mb-5 md:mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-lg bg-space-700 text-space-100 border border-space-500 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
