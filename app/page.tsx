import { timeline, tourStops, signatureTracks } from "./data/tracks";
import { WaveformVisualizer } from "./components/WaveformVisualizer";
import { TrackCard } from "./components/TrackCard";
import { TourCard } from "./components/TourCard";
import { Timeline } from "./components/Timeline";
import { NeonCard } from "./components/NeonCard";
import { NewsletterForm } from "./components/NewsletterForm";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-16">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/60 bg-slate-900/40 p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-magenta/30 via-transparent to-neon/20 opacity-70" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-magenta/40 blur-3xl" />
        <div className="absolute -right-16 top-10 h-60 w-60 rounded-full bg-neon/30 blur-3xl" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-night/70 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">
              DJ Snake Universe
            </span>
            <h1 className="font-display text-4xl text-white md:text-5xl">
              Global basslines. Neon nights. Immersive storytelling from the decks of DJ Snake.
            </h1>
            <p className="max-w-xl text-base text-slate-300/90">
              Step beyond the mainstage and into an interactive dossier covering the hits, the tours, and the sonic DNA
              of the French icon redefining dance culture.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="#tracks"
                className="rounded-full bg-gradient-to-r from-magenta via-neon to-cyan-400 px-5 py-3 font-semibold text-night shadow-[0_0_25px_rgba(14,249,249,0.5)] transition hover:scale-[1.02]"
              >
                Explore discography
              </a>
              <a
                href="#tour"
                className="rounded-full border border-slate-700/80 px-5 py-3 font-semibold text-slate-200 transition hover:border-neon/80 hover:text-neon"
              >
                Upcoming tour stops
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative h-64 w-full max-w-sm overflow-hidden rounded-[2rem] border border-neon/40 bg-night/80 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,249,249,0.3),_transparent_60%)]" />
              <div className="relative flex h-full flex-col items-center justify-center gap-4">
                <div className="h-20 w-20 rounded-full border border-neon/60 bg-gradient-to-br from-neon/60 to-magenta/60 shadow-[0_0_25px_rgba(255,78,205,0.5)]" />
                <p className="text-center text-sm text-slate-200/90">
                  “I build cinematic worlds you can rave inside. This is our arena.”
                </p>
                <span className="text-xs uppercase tracking-[0.3em] text-neon/80">DJ Snake</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tracks" className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Signature records</p>
            <h2 className="font-display text-3xl text-white">Anthems that shook the skyline</h2>
          </div>
          <p className="max-w-lg text-sm text-slate-300/80">
            A curated spin through seismic releases that set the tone for global dance culture, complete with embeds to
            relive every drop.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {signatureTracks.map((track) => (
            <TrackCard key={track.title} track={track} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
        <WaveformVisualizer />
        <div className="flex flex-col gap-6">
          <NeonCard title="Studio toolkit" subtitle="Sound design DNA">
            <ul className="space-y-2 text-sm">
              <li>Hybridized moombahton and trap templates layered with cinematic Foley hits.</li>
              <li>Analog synth stacks from the Prophet-6, drenched in sidechained reverb.</li>
              <li>Vocals sculpted through granular chopping, then stitched with airy delays.</li>
            </ul>
          </NeonCard>
          <NeonCard title="Essential gear" subtitle="Live rig">
            <ul className="space-y-2 text-sm">
              <li>Pioneer DJM-V10 with custom Serato stems routing and Ableton link sync.</li>
              <li>Custom-built LED wall mapped via Resolume Arena with audio-reactive shaders.</li>
              <li>RFID crowd control bracelets pulsing to BPM for immersive light choreography.</li>
            </ul>
          </NeonCard>
        </div>
      </section>

      <section id="tour" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Global takeover</p>
            <h2 className="font-display text-3xl text-white">Tour radar 2024</h2>
          </div>
          <p className="max-w-lg text-sm text-slate-300/80">
            Pull up to a city near you—expect surprise guests, 360° visuals, and walls of subs tuned for chest-rattling
            impact.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tourStops.map((stop) => (
            <TourCard key={stop.city} {...stop} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-[2.5rem] border border-slate-800/60 bg-slate-900/40 p-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Visual document</p>
          <h2 className="font-display text-3xl text-white">From Paris rooftops to world domination</h2>
          <p className="text-sm text-slate-300/85">
            Trace the evolution of DJ Snake&apos;s sonic storytelling, from viral club weapons to arena-scale experiences.
          </p>
          <Timeline items={timeline} />
        </div>
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-3xl border border-slate-800/60 shadow-[0_0_45px_rgba(14,249,249,0.25)]">
            <iframe
              src="https://www.youtube.com/embed/32UDN1bTBY0"
              title="DJ Snake Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <NewsletterForm />
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/60 pt-8 text-xs text-slate-400">
        <span>Built to celebrate the kinetic world of DJ Snake.</span>
        <span>© {new Date().getFullYear()} DJ Snakes Experience</span>
      </footer>
    </main>
  );
}
