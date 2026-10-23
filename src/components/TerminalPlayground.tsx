"use client";

import { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw } from "lucide-react";

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function TerminalPlayground() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-zinc-400 space-y-1">
          <p className="text-emerald-400 font-semibold">
            Interactive Developer Console [Version 1.0.0]
          </p>
          <p>
            Type <span className="text-teal-300 font-bold">&apos;help&apos;</span> to see the list of available commands.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-zinc-400">Available commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1 font-mono">
              <div><span className="text-emerald-400 font-bold">about</span> - Who am I?</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Technical stack</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - View top projects</div>
              <div><span className="text-emerald-400 font-bold">edu</span> - University &amp; GPA</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Reach out directly</div>
              <div><span className="text-emerald-400 font-bold">sudo hire</span> - Direct offer shortcut</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal</div>
            </div>
          </div>
        );
        break;

      case "about":
      case "whoami":
        output = (
          <p className="text-zinc-300">
            {portfolioData.personal.name} &bull; {portfolioData.personal.role}
            <br />
            {portfolioData.personal.bio}
          </p>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1">
            <p className="text-emerald-400 font-bold">Core Engineering Stack:</p>
            <p className="text-zinc-300">
              Languages: TypeScript, JavaScript, Python, Go, Java, C++, SQL
              <br />
              Full-Stack: Next.js 15/16, React 19, Tailwind CSS, Node.js, Express, FastAPI
              <br />
              Infrastructure: PostgreSQL, Redis, Docker, Git CI/CD, AWS
            </p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5">
            <p className="text-emerald-400 font-bold">Featured Projects:</p>
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="text-zinc-300">
                &bull; <span className="font-semibold text-white">{p.title}</span> ({p.category}) - {p.tagline}
              </div>
            ))}
          </div>
        );
        break;

      case "edu":
        output = (
          <p className="text-zinc-300">
            {portfolioData.education.degree} @ {portfolioData.education.university}
            <br />
            GPA: {portfolioData.education.gpa} &bull; {portfolioData.education.period}
          </p>
        );
        break;

      case "contact":
        output = (
          <div className="text-zinc-300 space-y-1">
            <p>Email: <span className="text-teal-300">{portfolioData.personal.email}</span></p>
            <p>GitHub: <a href={portfolioData.personal.github} className="text-emerald-400 underline" target="_blank">{portfolioData.personal.github}</a></p>
            <p>LinkedIn: <a href={portfolioData.personal.linkedin} className="text-emerald-400 underline" target="_blank">{portfolioData.personal.linkedin}</a></p>
          </div>
        );
        break;

      case "sudo hire":
      case "hire":
        output = (
          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Permission granted: Candidate added to Interview Queue!
            </p>
            <p className="text-xs text-zinc-300">
              Ready to schedule an interview? Drop a note via the contact form below or email{" "}
              <span className="text-white font-mono">{portfolioData.personal.email}</span>.
            </p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-rose-400">
            command not found: {cmd}. Type <span className="text-white font-bold">&apos;help&apos;</span> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal("");
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Interactive Console
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Explore My Background via CLI
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
            Try typing <span className="text-emerald-400">&apos;skills&apos;</span>, <span className="text-emerald-400">&apos;projects&apos;</span>, or <span className="text-emerald-400">&apos;sudo hire&apos;</span>
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-[#0c0d10] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-zinc-400 font-mono hidden sm:inline">
                visitor@michael-portfolio: ~ (bash)
              </span>
            </div>

            <button
              onClick={() => setHistory([])}
              title="Clear terminal"
              className="text-zinc-500 hover:text-zinc-300 p-1 rounded transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Terminal Content Body */}
          <div className="p-4 sm:p-6 min-h-[260px] max-h-[400px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4 text-zinc-300 leading-relaxed">{item.output}</div>
              </div>
            ))}

            {/* Input Prompt */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. help, skills, sudo hire)..."
                className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-xs sm:text-sm"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="submit"
                className="text-zinc-500 hover:text-emerald-400 transition-colors p-1"
                aria-label="Send command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
