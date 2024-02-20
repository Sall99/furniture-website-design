import BestSellingProducts from "@/components/ui/best-selling-products";
import ByRoom from "@/components/ui/by-room";
import HeroCard from "@/components/ui/hero-card";
import Newstler from "@/components/ui/newstler";
import Showcase from "@/components/ui/showcase";
import Testmonials from "@/components/ui/testmonials";
import TheBestChoice from "@/components/ui/the-best-choice";
import WhyChoosingUs from "@/components/ui/why-choosing-us";

export default function Home() {
  return (
    <main className="mx-auto">
      <Showcase />
      <HeroCard />
      <WhyChoosingUs />
      <ByRoom />
      <BestSellingProducts />
      <TheBestChoice />
      <Testmonials />
      <Newstler />
    </main>
  );
}
