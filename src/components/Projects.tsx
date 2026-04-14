import { useEffect, useRef, useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

const EXCLUDED_REPOS = new Set(['risposta.org', 'borealis', 'diligent', 'nathanlin1', 'project_pathfinder', 'nathanlin1.github.io']);

const projects = [
  {
    title: 'Risposta.org',
    description: 'A community-driven Q&A platform with 70+ theme support, user preference persistence via cookies, and a full voting system backed by Supabase.',
    tech: ['Deno', 'Fresh', 'Tailwind', 'Supabase'],
    highlights: [
      'Created a theme selection feature supporting 70+ themes',
      'Implemented post and comment voting system enabling community-driven content prioritization',
      'Refactored critical logic into middleware, improving load speed by over 100%',
    ],
    github: 'https://github.com/nathanlin1/risposta.org',
    color: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Borealis Voice',
    description: 'An iOS application that monitors live speaking volume with real-time visual feedback through decibel readouts and dynamic waveform displays.',
    tech: ['React Native', 'Expo', 'Node.js'],
    highlights: [
      'Real-time audio monitoring with configurable alert thresholds',
      'Dynamic waveform visualizations and decibel readouts',
      'Developed as an iOS app with native performance',
    ],
    github: 'https://github.com/nathanlin1/borealis',
    color: 'from-cyan-500 to-blue-600',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Diligent',
    description: 'A full-stack Slack clone supporting real-time messaging, channels, and role-based permissions with secure authentication and Docker deployment.',
    tech: ['React', 'Express', 'Node.js', 'Docker', 'PostgreSQL', 'Jest'],
    highlights: [
      'Real-time messaging with channels and role-based permissions',
      'Secure authentication with encrypted credentials in PostgreSQL',
      'RESTful APIs with test-driven development, deployed via Docker',
    ],
    github: 'https://github.com/nathanlin1/diligent',
    color: 'from-blue-500 to-cyan-600',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

type Project = typeof projects[number];

function GitHubIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="reveal" style={{ transitionDelay: `${200 + index * 150}ms` }}>
      <div className="glass-card rounded-2xl p-6 md:p-8 h-full relative overflow-hidden group">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5 md:mb-6">
            <div className="p-2.5 md:p-3 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
              <span className="text-blue-300">{project.icon}</span>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-space-400 hover:text-blue-400 transition-colors p-2"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-space-200 text-sm leading-relaxed mb-5 md:mb-6">
            {project.description}
          </p>

          <ul className="space-y-2 mb-6 md:mb-8">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-space-300 text-xs sm:text-sm">
                <span className="text-blue-400 mt-0.5">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 md:px-3 py-1 text-[11px] md:text-xs font-mono font-medium rounded-full bg-space-700 text-blue-300 border border-space-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useRevealOnScroll(sectionRef, { threshold: 0.05, deps: [repos] });

  useEffect(() => {
    fetch('https://api.github.com/users/nathanlin1/repos?sort=updated&per_page=100')
      .then(async (res) => {
        if (!res.ok) {
          console.error('GitHub API error', res.status, await res.text());
          return [];
        }
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data.filter(
          (r) => !r.fork && !EXCLUDED_REPOS.has(r.name.toLowerCase())
        );
        setRepos(filtered);
      })
      .catch((err) => {
        console.error('GitHub fetch failed', err);
        setRepos([]);
      });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen flex items-center py-16 md:py-32 px-6 snap-start">
      <div className="absolute top-1/3 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-blue-500/5 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="reveal mb-10 md:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-blue-400 font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>
          <p className="text-space-300 text-base md:text-lg max-w-2xl mt-4">
            A selection of projects that showcase my range — from real-time mobile apps to full-stack web platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {repos.length > 0 && (
          <div className="reveal mt-12 md:mt-16" style={{ transitionDelay: '500ms' }}>
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <h3 className="text-white text-lg md:text-xl font-semibold">More from GitHub</h3>
              <span className="text-space-400 text-xs font-mono">scroll →</span>
            </div>
            <div className="flex gap-4 overflow-x-auto overflow-y-visible pt-2 pb-4 snap-x snap-mandatory -mx-6 px-6 scrollbar-thin">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start shrink-0 w-64 sm:w-72 glass-card rounded-xl p-5 hover:border-blue-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-blue-400 min-w-0">
                      <GitHubIcon className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors truncate">
                        {repo.name}
                      </span>
                    </div>
                    {repo.stargazers_count > 0 && (
                      <span className="text-space-400 text-xs flex items-center gap-1 shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                  <p className="text-space-300 text-xs leading-relaxed line-clamp-3 min-h-[3rem]">
                    {repo.description || 'No description provided.'}
                  </p>
                  {repo.language && (
                    <div className="mt-4 pt-3 border-t border-space-700">
                      <span className="text-xs font-mono text-blue-300">{repo.language}</span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="reveal text-center mt-10 md:mt-12" style={{ transitionDelay: '700ms' }}>
          <a
            href="https://github.com/nathanlin1"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-blue-300 hover:text-white border border-blue-500/30 hover:border-blue-500/60 rounded-xl transition-all duration-300 hover:bg-blue-500/5"
          >
            <span>View All on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
