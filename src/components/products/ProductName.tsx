import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProductNameProps extends HTMLAttributes<HTMLHeadingElement> {}

export const ProductName = ({ className, children }: ProductNameProps) => {
  return (
    <h2
      className={cn(
        "font-Manrope text-white tracking-[2px] font-bold uppercase",
        className
      )}
    >
      {children}
    </h2>
  );
};
