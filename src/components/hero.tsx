import { Header } from "./header";
import {
  CardProduct,
  ProductDescrition,
  ProductName,
} from "./products/CardProduct";
import { Button } from "./ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

export const Hero = async () => {
  const featuredProduct = await db.product.findUnique({
    where: {
      id: 2,
    },
  });

  if (!featuredProduct) return notFound();

  return (
    <section className="bg-featured bg-no-repeat bg-[#141414] bg-cover flex flex-col items-center w-full h-screen">
      <div className="max-w-[1280px] w-full">
        {/* @ts-ignore */}
        <Header />
      </div>
      <section className="max-w-7xl h-full flex items-center w-full">
        <CardProduct className="max-w-[398px] w-full">
          <ProductDescrition className="uppercase text-sm tracking-[10px]">
            new product
          </ProductDescrition>
          <ProductName className="text-[56px] leading-[58px]">
            {featuredProduct.name}
          </ProductName>
          <ProductDescrition className="text-base">
            {featuredProduct.description}
          </ProductDescrition>
          <Link href={`/products/${featuredProduct.id}`}>
            <Button variant="default" className="w-40" size="sm">
              See Product
            </Button>
          </Link>
        </CardProduct>
      </section>
    </section>
  );
};
