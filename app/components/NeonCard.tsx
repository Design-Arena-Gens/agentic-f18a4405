import type { PropsWithChildren, ReactNode } from "react";

interface NeonCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export function NeonCard({ title, subtitle, icon, children }: PropsWithChildren<NeonCardProps>) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 via-transparent to-neon/10 opacity-60" />
      <div className="relative flex items-center gap-3">
        {icon}
        <div>
          <h3 className="font-display text-xl text-neon">{title}</h3>
          {subtitle ? <p className="text-sm text-slate-300/80">{subtitle}</p> : null}
        </div>
      </div>
      <div className="relative mt-4 space-y-3 text-sm text-slate-200/90">{children}</div>
    </div>
  );
}
