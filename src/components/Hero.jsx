import React from 'react';
import Spline from '@splinetool/react-spline';
import { FileText, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Tech-forward Portfolio • Interactive • Modern
        </span>
        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Alex Rivera</span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          Senior Project Manager translating strategy into shipped outcomes. I lead cross‑functional teams, streamline delivery, and bring complex tech initiatives to life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:translate-y-[-1px] hover:bg-sky-400"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <FileText className="h-4 w-4" /> View Experience
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-3">
          {[
            { label: 'Years', value: '8+' },
            { label: 'Teams Led', value: '20+' },
            { label: 'Projects', value: '50+' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-xl font-semibold">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
