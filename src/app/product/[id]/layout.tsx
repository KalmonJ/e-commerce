import { Hero } from "@/components/Hero";
import { ReactNode } from "react";

export default function ProductLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { product: string };
}) {
  return (
    <section>
      <Hero onlyHeader />
      {children}
    </section>
  );
}
