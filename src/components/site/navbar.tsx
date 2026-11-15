import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Atelier", href: "#atelier" },
  { label: "Journal", href: "#journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="text-lg font-semibold tracking-[0.2em] uppercase text-foreground"
            aria-label="Maestiq home"
          >
            Maestiq
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background md:flex"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="size-4" />
              <span>Bag</span>
              <span className="text-xs text-muted-foreground group-hover:text-background/70">(0)</span>
            </button>

            <button
              className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="text-lg font-semibold tracking-[0.2em] uppercase">Maestiq</span>
            <button
              className="flex size-10 items-center justify-center rounded-full hover:bg-foreground/5"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-medium tracking-tight text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-10">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-medium text-background">
              <ShoppingBag className="size-4" />
              Shopping Bag (0)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
