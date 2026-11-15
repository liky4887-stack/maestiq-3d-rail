import { Check } from "lucide-react";

const VALUES = [
  "Grown and woven in Portugal",
  "Closed-loop water reclamation",
  "Fair-wage atelier production",
  "Plastic-free packaging",
];

export function Atelier() {
  return (
    <section id="atelier" className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src="https://images.pexels.com/photos/7775459/pexels-photo-7775459.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
            alt="Tailor marking fabric with chalk in a sewing workshop"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-xl bg-background/90 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Est. 2019</p>
            <p className="text-sm font-medium text-foreground">Porto, Portugal</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-background/50">
            The atelier
          </p>
          <h2 className="mb-6 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Made slowly, worn for years
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-background/70">
            Every piece begins as raw organic cotton in the fields of southern Portugal,
            travels thirty kilometres to our atelier in Porto, and leaves as a garment
            designed to outlast the season that named it.
          </p>

          <ul className="space-y-4">
            {VALUES.map((value) => (
              <li key={value} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-background/10">
                  <Check className="size-3.5 text-background" />
                </span>
                <span className="text-sm text-background/80">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-12">
            <div>
              <p className="text-3xl font-medium tracking-tight">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-background/50">Organic cotton</p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tight">30km</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-background/50">Supply chain</p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tight">12</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-background/50">Artisans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
