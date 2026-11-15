import { ArrowUpRight } from "lucide-react";

const COLLECTIONS = [
  {
    title: "Tops & Tees",
    count: "24 pieces",
    description: "Heavyweight cottons, graphic prints, and quiet essentials.",
    image: "https://images.pexels.com/photos/8342914/pexels-photo-8342914.jpeg?auto=compress&cs=tinysrgb&h=900&w=650",
  },
  {
    title: "Knitwear",
    count: "16 pieces",
    description: "Lambswool cardigans, fleece crewnecks, and ribbed henleys.",
    image: "https://images.pexels.com/photos/3894550/pexels-photo-3894550.jpeg?auto=compress&cs=tinysrgb&h=900&w=650",
  },
  {
    title: "Shirting",
    count: "12 pieces",
    description: "Oxford weaves, button-down collars, and tailored fits.",
    image: "https://images.pexels.com/photos/20387329/pexels-photo-20387329.jpeg?auto=compress&cs=tinysrgb&h=900&w=650",
  },
];

export function Collections() {
  return (
    <section id="collection" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Shop by category
          </p>
          <h2 className="max-w-lg text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Three collections, one rail
          </h2>
        </div>
        <a
          href="#lookbook"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
        >
          View all pieces
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {COLLECTIONS.map((col) => (
          <a
            key={col.title}
            href="#collection"
            className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={col.image}
              alt={col.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 p-6 text-white">
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                {col.count}
              </p>
              <h3 className="mb-2 text-2xl font-medium tracking-tight">{col.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-white/80">{col.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                Explore
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
