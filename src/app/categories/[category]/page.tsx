import {
  CardProduct,
  ProductDescription,
  ProductInfo,
  ProductName,
} from "@/components/products/CardProduct";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const filteredByCategory = await db.product.findMany({
    where: {
      category: params.category.toUpperCase(),
    },
  });

  console.log(params.category.toUpperCase(), "categoryy??");

  if (!filteredByCategory) return notFound();

  return (
    <section className="w-full flex items-center pt-40 flex-col">
      <div className="max-w-7xl w-full flex flex-col gap-40">
        {filteredByCategory.map((product, index) => (
          <CardProduct
            className={`${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            productImage={
              <Image
                src={product.thumbnail}
                className="object-cover rounded-lg transition-transform hover:scale-110"
                fill
                alt={product.name}
              />
            }
            key={product.id}
          >
            <ProductInfo className="max-w-[445px]">
              <ProductDescription className="text-primary uppercase tracking-[10px]">
                New Product
              </ProductDescription>
              <ProductName className="text-black text-[40px] leading-[44px] tracking-[1.429px]">
                {product.name}
              </ProductName>
              <ProductDescription className="text-black opacity-50 text-[15px] leading-[25px]">
                {product.description}
              </ProductDescription>
              <Link href={`/product/${product.id}`}>
                <Button className="uppercase border-none">See Product</Button>
              </Link>
            </ProductInfo>
          </CardProduct>
        ))}
      </div>
    </section>
  );
}
