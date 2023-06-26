// @ts-nocheck

import { Hero } from "@/components/hero";
import { Categories } from "@/components/products/Categories";
import { FeaturedSection } from "@/components/products/FeaturedSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 bg-white items-center">
      <Hero />
      <Categories />
      <FeaturedSection />
    </main>
  );
}
