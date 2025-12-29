const ASCII_ART = [
  "████████╗██╗███╗   ███╗ ██████╗ ████████╗██╗  ██╗██╗   ██╗     ██████╗██╗  ██╗██╗███╗   ██╗",
  "╚══██╔══╝██║████╗ ████║██╔═══██╗╚══██╔══╝██║  ██║╚██╗ ██╔╝    ██╔════╝██║  ██║██║████╗  ██║",
  "   ██║   ██║██╔████╔██║██║   ██║   ██║   ███████║ ╚████╔╝     ██║     ███████║██║██╔██╗ ██║",
  "   ██║   ██║██║╚██╔╝██║██║   ██║   ██║   ██╔══██║  ╚██╔╝      ██║     ██╔══██║██║██║╚██╗██║",
  "   ██║   ██║██║ ╚═╝ ██║╚██████╔╝   ██║   ██║  ██║   ██║       ╚██████╗██║  ██║██║██║ ╚████║",
  "   ╚═╝   ╚═╝╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝   ╚═╝        ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝",
].join("\n");

export function WelcomeSection() {
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
