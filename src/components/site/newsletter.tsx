import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/30 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--color-foreground) 4%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Stay close
        </p>
        <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
          New pieces, early access, studio notes.
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          One letter per month. No sales, no urgency, no noise. Just the next rail
          before it reaches the shop floor.
        </p>

        <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:-translate-y-px hover:shadow-lg"
          >
            {submitted ? (
              <>
                <Check className="size-4" />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
        <p className="text-xs text-muted-foreground">
          Unsubscribe in one click. We never share your address.
        </p>
      </div>
    </section>
  );
}
