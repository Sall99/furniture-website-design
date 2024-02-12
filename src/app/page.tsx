import HeroCard from "@/components/ui/hero-card";
import Showcase from "@/components/ui/showcase";

export default function Home() {
  return (
    <main className="mx-auto">
      <Showcase />
      <HeroCard />
      <p className="h-7"></p>
    </main>
  );
}
