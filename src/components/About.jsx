import React from 'react';
import { Briefcase, CheckCircle, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
            <p className="mt-3 text-white/80">
              I’m a project leader who loves blending product thinking with delivery excellence. From discovery to launch, I align strategy, scope, and teams to deliver outcomes that matter.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Agile & hybrid delivery models',
                'Roadmapping, OKRs, and stakeholder alignment',
                'Risk management and dependency mapping',
                'Data-informed decisions and measurable impact',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                  <Briefcase className="h-6 w-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Current Role</div>
                  <div className="font-medium">Senior Project Manager</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Location</div>
                  <div className="mt-1 flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4 text-sky-400" /> Remote-first
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Methods</div>
                  <div className="mt-1 font-medium">Agile, Scrum, Kanban</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Domains</div>
                  <div className="mt-1 font-medium">SaaS, FinTech, AI</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Tooling</div>
                  <div className="mt-1 font-medium">Jira, Notion, Linear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
