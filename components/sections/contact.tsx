import { SectionFooter, SectionHeader } from "./section-wrapper";

export function ContactSection() {
  return (
    <div className="space-y-3 text-sm">
      <SectionHeader title="CONTACT" />
      <div className="pl-2 space-y-3">
        <div className="text-foreground">
          <div className="text-(--terminal-green) mb-2">GET IN TOUCH:</div>
          <div className="pl-4 space-y-2">
            <div className="flex gap-3">
              <span className="text-(--ctp-overlay1) w-20">EMAIL:</span>
              <span className="text-primary">
                timothyckl.interview@gmail.com
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-(--ctp-overlay1) w-20">GITHUB:</span>
              <span className="text-primary">github.com/me0wster</span>
            </div>
            <div className="flex gap-3">
              <span className="text-(--ctp-overlay1) w-20">LINKEDIN:</span>
              <span className="text-primary">
                linkedin.com/in/timothychinkl
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-(--ctp-overlay1) w-20">WEBSITE:</span>
              <span className="text-primary">timothychinkl.dev</span>
            </div>
          </div>
        </div>
      </div>
      <SectionFooter />
    </div>
  );
}
