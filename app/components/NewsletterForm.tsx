"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 md:flex-row md:items-center"
    >
      <label htmlFor="email" className="flex-1">
        <span className="block text-xs uppercase tracking-[0.3em] text-slate-400">Join the Drop List</span>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-slate-800/60 bg-night/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon/80 focus:outline-none"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
          }}
          required
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-magenta via-neon to-cyan-400 px-4 py-3 text-sm font-semibold text-night shadow-[0_0_18px_rgba(14,249,249,0.5)] transition hover:scale-[1.01] md:w-auto"
      >
        Lock In
      </button>
      {status === "success" ? (
        <span className="text-xs text-neon">Welcome to the wave. See you in the front row.</span>
      ) : null}
      {status === "error" ? <span className="text-xs text-rose-400">Drop a valid email and try again.</span> : null}
    </form>
  );
}
