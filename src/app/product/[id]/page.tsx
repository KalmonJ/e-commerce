import { ProductCard } from "@/components/products/ProductCard";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Product({ params }: { params: { id: string } }) {
  const product = await db.product.findFirst({
    where: { id: Number(params.id) },
  });

  if (!product) return notFound();

  return (
    <section className="flex mt-40 justify-center">
      <div className="max-w-7xl w-full flex flex-col gap-40">
        <span className="text-black opacity-50 font-Manrope font-medium text-[15px] leading-[25px]">
          Go Back
        </span>

        <ProductCard product={product} />
      </div>
    </section>
  );
}
