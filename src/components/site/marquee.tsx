const MARQUEE_ITEMS = [
  "Free shipping over $150",
  "New season — Autumn / Winter 26",
  "Crafted in Portugal",
  "Organic cotton certified",
  "30-day returns",
  "Carbon-neutral delivery",
];

export function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative flex overflow-hidden border-y border-border/40 bg-foreground py-3.5">
      <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-12 pr-12">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-xs font-medium uppercase tracking-[0.2em] text-background/90">
            {item}
            <span className="size-1.5 rounded-full bg-background/40" />
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-12 pr-12" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-xs font-medium uppercase tracking-[0.2em] text-background/90">
            {item}
            <span className="size-1.5 rounded-full bg-background/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
