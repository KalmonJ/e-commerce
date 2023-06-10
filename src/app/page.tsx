import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
