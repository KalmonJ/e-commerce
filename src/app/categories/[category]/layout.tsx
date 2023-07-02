import { Hero } from "@/components/Hero";
import { ReactNode } from "react";

export default function CategoryLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { category: string };
}) {
  return (
    <section>
      {/* @ts-ignore */}
      <Hero {...params} />
      {children}
    </section>
  );
}
