import { audiophileAPI } from "@/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Categories = async () => {
  const { categories } = await audiophileAPI.product.category.all();

  return (
    <div className="flex gap-8">
      {categories.map((category) => (
        <div
          key={category._id}
          className="flex flex-col justify-end relative h-52 py-5 max-w-[350px] w-full bg-light-gray rounded-[8px]"
        >
          <Image
            width={160}
            height={160}
            src={category.image}
            alt={category.name}
            className="absolute right-1/2 left-1/2 -translate-x-1/2 -top-8"
          />
          <div className="flex flex-col items-center gap-[15px]">
            <h4 className="font-Manrope text-lg tracking-[1.286px] uppercase font-bold">
              {category.name}
            </h4>
            <div className="flex cursor-pointer items-center gap-2">
              <Link
                href={`/category/${category.name}`}
                className="uppercase font-Manrope font-bold tracking-[1px] text-[13px] opacity-50"
              >
                Shop
              </Link>
              <ChevronRight className="text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
