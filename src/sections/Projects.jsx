import { useState } from 'react';

const projects = [
  {
    title: 'Plant — NUACM Hackathon Education Track Winner',
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'Firebase', 'Gemini'],
    description:
      'Built a Next.js app with a team of 3 that helps students plan academic schedules with AI-powered course recommendations, requirement tracking, and drag-and-drop semester planning. Web-scraped 1000+ courses and 100+ majors; integrated Firebase Auth and Google Gemini for personalized suggestions.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Machine Learning Essentials Bootcamp – AI Club, Northeastern',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    description:
      'Implemented linear regression, PCA, and K-means clustering from scratch on real-world datasets (Spotify, UCI Wine). Built a multi-layer perceptron neural network from scratch with backpropagation, dropout, and mini-batch gradient descent; achieved 86.5% test accuracy.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'NU AI Club Hackathon — Evacuation Simulation',
    tech: ['React', 'TypeScript', 'Leaflet', 'Spring Boot', 'WebSockets', 'Gemini API'],
    description:
      'Real-time evacuation simulation using React, Spring Boot, and WebSockets. Streams agent movement with Gemini API-powered traffic analysis and OpenStreetMap road data.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Elevator Simulation',
    tech: ['Java', 'JavaFX', 'MVC', 'FSM'],
    description:
      'JavaFX GUI elevator simulation using MVC and Finite State Machines. Tested elevator efficiency across large datasets of passengers.',
    github: 'https://github.com/raydl18',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-container mx-auto">
        <p className="font-inter text-xs font-bold text-primary uppercase tracking-widest mb-2">Projects</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-16">
          Past projects
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab nav */}
          <div className="flex flex-row md:flex-col overflow-x-auto scrollbar-hide md:overflow-visible md:min-w-[270px] border-b md:border-b-0 md:border-r border-outline-variant/30">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`flex-shrink-0 text-left px-3 md:px-4 py-3 md:py-3.5 font-inter text-sm leading-snug whitespace-nowrap md:whitespace-normal transition-colors
                  border-b-[3px] md:border-b-0 md:border-r-[3px] ${
                  selected === i
                    ? 'border-primary text-primary font-semibold'
                    : 'border-transparent text-on-surface-variant font-medium hover:text-on-surface'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="flex-1 p-6 md:p-8 border border-outline-variant/30 bg-white rounded-xl min-h-[200px] hover:shadow-[2px_3px_0_#c4c6cf] transition-shadow">
            <h3 className="font-inter font-semibold text-on-surface text-base mb-3 leading-snug">{proj.title}</h3>
            <p className="font-newsreader text-sm text-on-surface-variant leading-relaxed mb-5">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {proj.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-inter font-semibold text-[0.8rem] text-primary hover:underline"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
