import { SectionFooter, SectionHeader } from "./section-wrapper";

export function EducationSection() {
  return (
    <div className="space-y-3 text-sm">
      <SectionHeader title="EDUCATION" />
      <div className="pl-2 space-y-4">
        <div>
          <div className="text-foreground">
            <span className="text-(--terminal-green)">[1]</span>
            <span className="pl-3 font-bold">
              BSc (Hons) Business Systems Information, Information Technology
            </span>
          </div>
          <div className="pl-7 text-muted-foreground">
            HELP University College • 2004 - 2007
          </div>
          <div className="pl-7 text-(--ctp-overlay1) text-xs mt-1">
            GPA: 3.8/4.0
          </div>
        </div>
        <div>
          <div className="text-foreground">
            <span className="text-(--terminal-green)">[2]</span>
            <span className="pl-3 font-bold">
              Relevant Certifications & Courses
            </span>
          </div>
          <div className="pl-7 space-y-1 mt-2">
            <div className="text-muted-foreground flex gap-2">
              <span className="text-(--ctp-overlay1)">•</span>
              <span>AWS Solutions Architect Associate</span>
            </div>
            <div className="text-muted-foreground flex gap-2">
              <span className="text-(--ctp-overlay1)">•</span>
              <span>Certified Backstage Associate (Exam Creator)</span>
            </div>
            <div className="text-muted-foreground flex gap-2">
              <span className="text-(--ctp-overlay1)">•</span>
              <span>
                Certified Cloud Native Platform Engineering Associate (CNPA)
              </span>
            </div>
            <div className="text-muted-foreground flex gap-2">
              <span className="text-(--ctp-overlay1)">•</span>
              <span>GitLab Professional Services Engineer</span>
            </div>
          </div>
        </div>
      </div>
      <SectionFooter />
    </div>
  );
}
