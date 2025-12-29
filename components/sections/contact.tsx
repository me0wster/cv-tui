import { Github, Globe, Linkedin, Mail } from "lucide-react";

import { SectionFooter, SectionHeader } from "./section-wrapper";

const contactItems = [
  {
    label: "EMAIL:",
    value: "timothyckl.interview@gmail.com",
    href: "mailto:timothyckl.interview@gmail.com",
    icon: Mail,
  },
  {
    label: "GITHUB:",
    value: "github.com/me0wster",
    href: "https://github.com/me0wster",
    icon: Github,
  },
  {
    label: "LINKEDIN:",
    value: "linkedin.com/in/timothychinkl",
    href: "https://linkedin.com/in/timothychinkl",
    icon: Linkedin,
  },
  {
    label: "WEBSITE:",
    value: "timothychinkl.dev",
    href: "https://timothychinkl.dev",
    icon: Globe,
  },
];

export function ContactSection() {
  return (
    <div className="space-y-3 text-sm">
      <SectionHeader title="CONTACT" />
      <div className="pl-2 space-y-3">
        <div className="text-foreground">
          <div className="text-(--terminal-green) mb-2">GET IN TOUCH:</div>
          <div className="pl-4 space-y-2">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-3 items-center group">
                <span className="text-(--ctp-overlay1) w-20">{item.label}</span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-(--terminal-green) transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{item.value}</span>
                  <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter />
    </div>
  );
}
