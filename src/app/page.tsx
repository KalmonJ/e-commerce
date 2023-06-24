import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error */}
      <Hero />
    </main>
  );
}
