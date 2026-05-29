const row1 = [
  "Meta Ads", "Instagram", "Facebook", "TikTok", "Google Ads", "YouTube", "WhatsApp Business", "LinkedIn",
];
const row2 = [
  "Canva", "Adobe Photoshop", "Illustrator", "Premiere Pro", "CapCut", "Figma", "Mailchimp", "Metricool",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white px-5 py-2.5 font-display text-base font-medium text-[color:var(--color-fg)]/80 shadow-soft">
      <span className="size-1.5 rounded-full bg-[color:var(--color-accent)]" />
      {label}
    </span>
  );
}

export function TechMarquee() {
  return (
    <section className="relative bg-[color:var(--color-bg)] py-16">
      <div className="absolute inset-0 -z-10 dot-grid opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />

      <div className="container-page mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          · Herramientas
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
          Plataformas y herramientas que dominamos
        </h3>
      </div>

      <div className="marquee-group space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-4 whitespace-nowrap pr-4 animate-marquee">
          {[...row1, ...row1].map((t, i) => (
            <Chip key={`r1-${t}-${i}`} label={t} />
          ))}
        </div>
        <div className="flex w-max gap-4 whitespace-nowrap pr-4 animate-marquee-rev">
          {[...row2, ...row2].map((t, i) => (
            <Chip key={`r2-${t}-${i}`} label={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
