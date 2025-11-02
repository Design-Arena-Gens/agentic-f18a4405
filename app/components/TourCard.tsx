interface TourCardProps {
  city: string;
  venue: string;
  date: string;
  description: string;
}

export function TourCard({ city, venue, date, description }: TourCardProps) {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
      <div className="flex items-baseline justify-between">
        <h4 className="font-display text-xl text-white">{city}</h4>
        <span className="text-xs uppercase tracking-[0.25em] text-neon/90">{formattedDate}</span>
      </div>
      <p className="text-sm text-slate-300/90">{venue}</p>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
    </div>
  );
}
