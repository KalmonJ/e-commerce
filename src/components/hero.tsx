import {
  CardProduct,
  ProductDescription,
  ProductInfo,
  ProductName,
} from "./products/CardProduct";
import { Button } from "./ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { Header } from "@/components/Header";

type HeroProps = {
  category?: string;
  onlyHeader?: boolean;
};

export const Hero = async ({ onlyHeader, category }: HeroProps) => {
  const featuredProduct = await db.product.findUnique({
    where: {
      id: 2,
    },
  });

  if (!featuredProduct) return notFound();

  return (
    <section
      className={`${
        !category && !onlyHeader && "bg-featured bg-no-repeat h-screen bg-cover"
      } bg-[#141414] flex flex-col items-center w-full`}
    >
      <div className="max-w-[1280px] w-full">
        {/* @ts-ignore */}
        <Header />
      </div>
      <section className="max-w-7xl h-full flex items-center w-full">
        {category && (
          <div className="flex justify-center w-full py-20">
            <h2 className="text-center font-Manrope font-bold uppercase tracking-[1.429px] text-white text-[40px] leading-[44px]">
              {category}
            </h2>
          </div>
        )}
        {!category && !onlyHeader && (
          <CardProduct>
            <ProductInfo className="max-w-[398px] w-full">
              <ProductDescription className="uppercase text-sm tracking-[10px]">
                new product
              </ProductDescription>
              <ProductName className="text-[56px] leading-[58px]">
                {featuredProduct.name}
              </ProductName>
              <ProductDescription className="text-base">
                {featuredProduct.description}
              </ProductDescription>
              <Link href={`/products/${featuredProduct.id}`}>
                <Button variant="default" className="w-40 uppercase" size="sm">
                  See Product
                </Button>
              </Link>
            </ProductInfo>
          </CardProduct>
        )}
      </section>
    </section>
  );
};
