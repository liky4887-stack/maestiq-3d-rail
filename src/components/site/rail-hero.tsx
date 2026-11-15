import { ArrowRight } from "lucide-react";
import { ClothingRailHero } from "@/components/ui/product-rail-gallery";
import { RAIL_ITEMS } from "@/data/rail-items";

export function RailHero() {
  return (
    <section id="top" className="relative">
      <ClothingRailHero
        items={RAIL_ITEMS}
        hanger="none"
        eyebrow="New season — Ten pieces on the rail"
        heading="A clothing rail you can handle, right on the page."
        caption="Brush along the rail, slide a hanger, lift a piece to see the back."
        autoplay
        interval={3000}
        action={
          <a
            href="#collection"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-all hover:-translate-y-px hover:shadow-lg"
          >
            Shop the edit
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        }
      />
    </section>
  );
}
