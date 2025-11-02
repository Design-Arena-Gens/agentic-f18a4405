interface TimelineItem {
  year: number;
  event: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-slate-800/70 pl-6">
      {items.map((item, index) => (
        <li key={item.year} className="mb-8">
          <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-neon/40 bg-slate-950">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#0ef9f9]" />
          </div>
          <h4 className="font-display text-lg text-white">{item.year}</h4>
          <p className="text-sm text-slate-300/80">{item.event}</p>
          {index < items.length - 1 ? (
            <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-neon/50 via-magenta/30 to-transparent" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
