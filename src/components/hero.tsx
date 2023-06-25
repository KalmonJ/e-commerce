import { audiophileAPI, environments } from "@/client";
import { Header } from "./header";
import {
  CardProduct,
  ProductDescrition,
  ProductName,
} from "./products/CardProduct";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = async () => {
  const response = await fetch(environments[process.env.NODE_ENV], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: /* GraphQL */ `
        query feature {
          featuredProduct {
            name
            _id
            description
          }
        }
      `,
    }),
  });

  const feature = await response.json();

  return (
    <section className="bg-featured bg-no-repeat bg-[#141414] bg-cover flex flex-col items-center w-full h-screen">
      <div className="max-w-[1280px] w-full">
        {/* @ts-expect-error */}
        <Header />
      </div>
      <section className="max-w-7xl h-full flex items-center w-full">
        <CardProduct className="max-w-[398px] w-full">
          <ProductDescrition className="uppercase text-sm tracking-[10px]">
            new product
          </ProductDescrition>
          <ProductName className="text-[56px] leading-[58px]">
            {feature?.featuredProduct?.name}
          </ProductName>
          <ProductDescrition className="text-base">
            {feature?.featuredProduct?.description}
          </ProductDescrition>
          <Link href={`/products/${feature?.featuredProduct?._id}`}>
            <Button variant="default" className="w-40" size="sm">
              See Product
            </Button>
          </Link>
        </CardProduct>
      </section>
    </section>
  );
};
