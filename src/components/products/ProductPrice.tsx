import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProductPriceProps extends HTMLAttributes<HTMLSpanElement> {
  price: number;
}

export const ProductPrice = ({ className, price }: ProductPriceProps) => {
  const format = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format;

  return (
    <span
      className={cn(
        "text-black font-Manrope font-bold tracking-[1.286px] uppercase text-lg",
        className
      )}
    >
      {format(price)}
    </span>
  );
};
