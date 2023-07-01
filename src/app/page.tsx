import { Hero } from "@/components/hero";
import { Categories } from "@/components/products/Categories";
import { FeaturedSection } from "@/components/products/FeaturedSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 bg-white items-center">
      {/* @ts-ignore */}
      <Hero />
      {/* @ts-ignore */}
      <Categories />
      {/* @ts-ignore */}
      <FeaturedSection />
    </main>
  );
}
