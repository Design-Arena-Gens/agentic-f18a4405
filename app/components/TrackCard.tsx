import Image from "next/image";
import type { Track } from "../data/tracks";

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/30">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={track.cover}
          alt={`${track.title} cover art`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">{track.year}</p>
          <h3 className="font-display text-2xl text-white">{track.title}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 text-sm text-slate-300/90">
        <p>{track.description}</p>
        {track.collaborators?.length ? (
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Featuring {track.collaborators.join(" · ")}
          </p>
        ) : null}
        <iframe
          src={track.spotifyEmbed}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="h-20 w-full rounded-xl border border-slate-800/80"
        />
      </div>
    </article>
  );
}
