interface SectionBadgeProps {
  text: string;
}

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-400 uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
      {text}
    </span>
  );
}
