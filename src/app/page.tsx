import { Categories } from "@/components/products/Categories";
import { FeaturedSection } from "@/components/products/FeaturedSection";
import { Hero } from "@/components/Hero";

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
