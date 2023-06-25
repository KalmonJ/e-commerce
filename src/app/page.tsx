import { Hero } from "@/components/hero";
import { Categories } from "@/components/products/Categories";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 bg-white items-center">
      <Hero />
      <section className="h-screen max-w-7xl w-full">
        <Categories />
      </section>
    </main>
  );
}
