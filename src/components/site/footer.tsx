import { Instagram, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Shop",
    links: ["New arrivals", "Tops & tees", "Knitwear", "Shirting", "Gift cards"],
  },
  {
    title: "Studio",
    links: ["The atelier", "Materials", "Sustainability", "Journal", "Care guide"],
  },
  {
    title: "Help",
    links: ["Shipping", "Returns", "Size guide", "Contact", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold tracking-[0.2em] uppercase text-foreground">
              Maestiq
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Slow-made essentials from a twelve-person atelier in Porto. One rail at a time.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Instagram className="size-4" />
              @maestiq
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Maestiq Studio Lda. Porto, Portugal.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
