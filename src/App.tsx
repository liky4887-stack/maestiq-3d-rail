import { Navbar } from "@/components/site/navbar";
import { RailHero } from "@/components/site/rail-hero";
import { Marquee } from "@/components/site/marquee";
import { Collections } from "@/components/site/collections";
import { Atelier } from "@/components/site/atelier";
import { Lookbook } from "@/components/site/lookbook";
import { Journal } from "@/components/site/journal";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <RailHero />
        <Marquee />
        <Collections />
        <Atelier />
        <Lookbook />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
