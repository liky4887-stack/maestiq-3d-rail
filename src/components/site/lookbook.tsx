const LOOKBOOK = [
  {
    image: "https://images.pexels.com/photos/1066171/pexels-photo-1066171.jpeg?auto=compress&cs=tinysrgb&h=900&w=650",
    title: "Studio I",
    subtitle: "Bone tee · Oxford shirt",
    span: "lg:row-span-2",
  },
  {
    image: "https://images.pexels.com/photos/28863302/pexels-photo-28863302.jpeg?auto=compress&cs=tinysrgb&h=600&w=650",
    title: "Studio II",
    subtitle: "Graphic tee · Brick henley",
    span: "",
  },
  {
    image: "https://images.pexels.com/photos/10483258/pexels-photo-10483258.jpeg?auto=compress&cs=tinysrgb&h=600&w=650",
    title: "Studio III",
    subtitle: "Hoodie · Crewneck",
    span: "",
  },
  {
    image: "https://images.pexels.com/photos/14008893/pexels-photo-14008893.jpeg?auto=compress&cs=tinysrgb&h=900&w=650",
    title: "Studio IV",
    subtitle: "Breton · Lilac sweat",
    span: "lg:row-span-2",
  },
  {
    image: "https://images.pexels.com/photos/18567265/pexels-photo-18567265.jpeg?auto=compress&cs=tinysrgb&h=600&w=650",
    title: "Studio V",
    subtitle: "Cardigan · Polo",
    span: "",
  },
  {
    image: "https://images.pexels.com/photos/8342914/pexels-photo-8342914.jpeg?auto=compress&cs=tinysrgb&h=600&w=650",
    title: "Studio VI",
    subtitle: "Oversized tee · Henley",
    span: "",
  },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Autumn / Winter 26
          </p>
          <h2 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            The lookbook
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Six studio portraits from the new season. Shot in natural light at our
          Porto atelier, styled with pieces from the rail.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {LOOKBOOK.map((item) => (
          <figure
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl bg-muted ${item.span}`}
          >
            <div className="aspect-[3/4] lg:aspect-auto lg:h-full">
              <img
                src={item.image}
                alt={`${item.title} — ${item.subtitle}`}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <figcaption className="absolute bottom-0 left-0 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium tracking-tight">{item.title}</p>
              <p className="text-xs text-white/70">{item.subtitle}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
