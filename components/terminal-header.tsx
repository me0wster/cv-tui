import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export function TerminalHeader() {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-(--terminal-red) border border-(--terminal-red)" />
            <div className="w-3 h-3 rounded-full bg-(--terminal-yellow) border border-(--terminal-yellow)" />
            <div className="w-3 h-3 rounded-full bg-(--terminal-green) border border-(--terminal-green)" />
          </div>
          <div className="text-muted-foreground text-sm">
            bash — resume - Timothy Chin
          </div>
        </div>
        <ThemeSwitcher />
      </div>
      <div className="border border-border rounded-md">
        <div className="bg-card px-3 py-1.5 border-b border-border">
          <div className="text-xs text-muted-foreground">
            ~/portfolio/resume
          </div>
        </div>
      </div>
    </div>
  );
}
