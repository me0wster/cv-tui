export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center text-(--ctp-overlay1) pb-2">
      <span className="mr-1">┌─</span>
      <span className="text-primary font-bold mx-2">{title}</span>
      <span className="flex-1 border-t border-dashed border-border" />
      <span className="ml-1">┐</span>
    </div>
  );
}

export function SectionFooter() {
  return (
    <div className="flex items-center text-(--ctp-surface2) pt-2">
      <span className="mr-1">└</span>
      <span className="flex-1 border-t border-dashed border-border" />
      <span className="ml-1">┘</span>
    </div>
  );
}
