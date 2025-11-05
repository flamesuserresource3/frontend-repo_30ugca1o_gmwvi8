import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">AR</span>
            <span className="ml-2 hidden text-white/70 sm:inline">Project Manager</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white shadow shadow-sky-500/30 transition hover:bg-sky-400"
          >
            Let’s talk
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
