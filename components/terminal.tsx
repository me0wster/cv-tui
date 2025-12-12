"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";

import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { EducationSection } from "./sections/education";
import { ExperienceSection } from "./sections/experience";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";

const commands = [
  { cmd: "about", desc: "Display personal information" },
  { cmd: "experience", desc: "Show work experience" },
  { cmd: "education", desc: "Show education history" },
  { cmd: "skills", desc: "List technical skills" },
  { cmd: "projects", desc: "Display notable projects" },
  { cmd: "contact", desc: "Show contact information" },
  { cmd: "help", desc: "Show available commands" },
  { cmd: "clear", desc: "Clear the terminal" },
];

type HistoryEntry = {
  id: number;
  command: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (trimmedCmd === "") {
      setHistory((prev) => [
        ...prev,
        {
          id: idCounter.current++,
          command: cmd,
          output: null,
        },
      ]);
      setInput("");
      return;
    }

    let output: React.ReactNode;
    switch (trimmedCmd) {
      case "about":
        output = <AboutSection />;
        break;
      case "experience":
        output = <ExperienceSection />;
        break;
      case "education":
        output = <EducationSection />;
        break;
      case "skills":
        output = <SkillsSection />;
        break;
      case "projects":
        output = <ProjectsSection />;
        break;
      case "contact":
        output = <ContactSection />;
        break;
      case "help":
        output = <HelpSection onCommand={handleCommand} />;
        break;
      default:
        output = (
          <div className="text-(--terminal-red) text-sm">
            command not found. Type 'help' for available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: idCounter.current++,
        command: cmd,
        output,
      },
    ]);

    setInput("");
  }, []);

  useEffect(() => {
    // Auto-run welcome on mount
    setTimeout(() => {
      setHistory([
        {
          id: idCounter.current++,
          command: "cat welcome.txt",
          output: <WelcomeSection />,
        },
        {
          id: idCounter.current++,
          command: "help",
          output: <HelpSection onCommand={handleCommand} />,
        },
      ]);
    }, 300);
  }, [handleCommand]);

  useEffect(() => {
    // Scroll to bottom when history changes
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="border border-border rounded-md bg-background flex-1 overflow-y-auto p-4 sm:p-6">
      <div className="space-y-4">
        {history.map((entry) => (
          <div key={entry.id} className="space-y-2">
            <div className="text-foreground text-sm">
              <span className="text-(--terminal-green)">$ </span>
              {entry.command}
            </div>
            {entry.output}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-(--terminal-green)">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground font-mono text-sm caret-(--terminal-green)"
            placeholder="Type a command... (try 'help')"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

const ASCII_ART = [
  "████████╗██╗███╗   ███╗ ██████╗ ████████╗██╗  ██╗██╗   ██╗     ██████╗██╗  ██╗██╗███╗   ██╗",
  "╚══██╔══╝██║████╗ ████║██╔═══██╗╚══██╔══╝██║  ██║╚██╗ ██╔╝    ██╔════╝██║  ██║██║████╗  ██║",
  "   ██║   ██║██╔████╔██║██║   ██║   ██║   ███████║ ╚████╔╝     ██║     ███████║██║██╔██╗ ██║",
  "   ██║   ██║██║╚██╔╝██║██║   ██║   ██║   ██╔══██║  ╚██╔╝      ██║     ██╔══██║██║██║╚██╗██║",
  "   ██║   ██║██║ ╚═╝ ██║╚██████╔╝   ██║   ██║  ██║   ██║       ╚██████╗██║  ██║██║██║ ╚████║",
  "   ╚═╝   ╚═╝╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝   ╚═╝        ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝",
].join("\n");

function WelcomeSection() {
  return (
    <div className="space-y-4 text-sm text-foreground">
      <pre className="text-(--terminal-blue) text-[10px] leading-tight overflow-x-auto">
        {ASCII_ART}
      </pre>
      <div className="border-l-2 border-(--terminal-blue) pl-4 space-y-2">
        <p className="text-foreground">Explore my portfolio and experience!</p>
        <p className="text-muted-foreground">
          Type <span className="text-(--terminal-green)">'help'</span> to see
          available commands.
        </p>
      </div>
    </div>
  );
}

function HelpSection({ onCommand }: { onCommand: (cmd: string) => void }) {
  return (
    <div className="space-y-2 text-sm">
      <div className="text-foreground border-b border-border pb-2 mb-3">
        Available Commands:
      </div>
      {commands.map((cmd) => (
        <button
          key={cmd.cmd}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCommand(cmd.cmd);
          }}
          className="flex w-full items-center gap-4 text-left text-(--ctp-subtext1) hover:text-(--terminal-yellow) transition-colors cursor-pointer"
        >
          <span className="text-(--terminal-green) w-24 underline decoration-dotted">
            {cmd.cmd}
          </span>
          <span className="text-(--ctp-overlay0)">—</span>
          <span>{cmd.desc}</span>
        </button>
      ))}
    </div>
  );
}
