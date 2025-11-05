import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Program Lead',
    company: 'Nimbus Labs',
    period: '2022 — Present',
    summary:
      'Led a portfolio of AI-driven products, delivering a 25% cycle-time reduction by improving flow efficiency and cross-team alignment.',
  },
  {
    role: 'Senior Project Manager',
    company: 'Northstar Systems',
    period: '2019 — 2022',
    summary:
      'Scaled delivery practices across 6 teams, introduced outcome-focused roadmaps, and improved forecast accuracy by 30%.',
  },
  {
    role: 'Project Manager',
    company: 'Orbit Apps',
    period: '2016 — 2019',
    summary:
      'Delivered multiple SaaS releases, aligning engineering, design, and GTM for on-time, on-budget launches.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-500/40 via-white/10 to-transparent sm:left-6" />
          <ul className="space-y-6">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-sky-400 sm:left-2">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-lg font-medium">
                      {exp.role} • <span className="text-white/80">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Calendar className="h-4 w-4 text-sky-400" /> {exp.period}
                    </div>
                  </div>
                  <p className="mt-2 text-white/80">{exp.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
