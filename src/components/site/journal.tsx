import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    category: "Process",
    title: "Why we weave our own cotton",
    excerpt: "A thirty-kilometre journey from field to atelier, and why it matters.",
    date: "Nov 2026",
    readTime: "6 min",
  },
  {
    category: "Care",
    title: "How to wash a heavyweight tee",
    excerpt: "Cold water, mild detergent, flat dry. A short guide to keeping your cotton.",
    date: "Oct 2026",
    readTime: "4 min",
  },
  {
    category: "Stories",
    title: "The twelve hands of Porto",
    excerpt: "Meet the artisans who cut, sew, and finish every piece in our atelier.",
    date: "Sep 2026",
    readTime: "8 min",
  },
];

export function Journal() {
  return (
    <section id="journal" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Notes from the studio
          </p>
          <h2 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            The journal
          </h2>
        </div>
        <a
          href="#journal"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
        >
          All entries
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-muted/40"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h3 className="text-xl font-medium leading-snug tracking-tight">
              {post.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
