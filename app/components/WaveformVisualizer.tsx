"use client";

import { useEffect, useRef, useState } from "react";

const fallbackTrack = "https://cdn.pixabay.com/download/audio/2022/03/30/audio_6604f00fb1.mp3?filename=edm-dance-11466.mp3";

export function WaveformVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let ctx: AudioContext | null = null;
    let dataArray: Uint8Array | null = null;

    const handlePlay = async () => {
      if (!ctx) {
        ctx = new AudioContext();
        const source = ctx.createMediaElementSource(audio);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        analyser.connect(ctx.destination);
        analyserRef.current = analyser;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        setIsReady(true);
      }
      if (ctx.state === "suspended") {
        await ctx.resume();
      }
      draw();
    };

    const handlePause = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const draw = () => {
      const canvas = canvasRef.current;
      const analyser = analyserRef.current;
      if (!canvas || !analyser || !dataArray) return;

      const ctx2d = canvas.getContext("2d");
      if (!ctx2d) return;

      analyser.getByteTimeDomainData(dataArray);
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx2d.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#0ef9f9");
      gradient.addColorStop(0.5, "#ffffff");
      gradient.addColorStop(1, "#ff4ecd");
      ctx2d.strokeStyle = gradient;
      ctx2d.lineWidth = 2;
      ctx2d.beginPath();

      const sliceWidth = (canvas.width * 1.0) / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx2d.moveTo(x, y);
        } else {
          ctx2d.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx2d.lineTo(canvas.width, canvas.height / 2);
      ctx2d.stroke();
      animationRef.current = requestAnimationFrame(draw);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handlePause);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (ctx) ctx.close();
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 via-transparent to-neon/10 opacity-70" />
      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Audio Sandbox</p>
          <h2 className="font-display text-2xl text-white">Pulse Visualizer</h2>
          <p className="text-sm text-slate-300/90">
            Toggle the deck to watch the waveform respond in real-time. Crafted with the Web Audio API for a
            festival-grade vibe.
          </p>
        </div>
        <canvas ref={canvasRef} width={640} height={120} className="w-full rounded-xl bg-night/80" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <audio ref={audioRef} src={fallbackTrack} controls className="w-full max-w-xs" preload="none" />
          <span className="rounded-full border border-slate-800/70 bg-slate-950/70 px-4 py-2 text-xs text-slate-300/80">
            {isReady ? "Visualizer live" : "Press play to activate"}
          </span>
        </div>
      </div>
    </div>
  );
}
