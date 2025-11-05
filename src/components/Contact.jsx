import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center shadow-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something great</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            I partner with engineering, design, and business teams to deliver predictable, high-impact outcomes.
            Open to full-time roles and select consulting engagements.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:alex.rivera.pm@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:translate-y-[-1px] hover:bg-sky-400"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" /> Resume Snapshot
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Alex Rivera. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
