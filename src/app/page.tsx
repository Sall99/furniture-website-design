import HeroCard from "@/components/ui/hero-card";
import Showcase from "@/components/ui/showcase";
import WhyChoosingUs from "@/components/ui/why-choosing-us";

export default function Home() {
  return (
    <main className="mx-auto">
      <Showcase />
      <HeroCard />
      <WhyChoosingUs />
    </main>
  );
}
