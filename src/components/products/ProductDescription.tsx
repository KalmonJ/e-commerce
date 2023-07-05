import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProductDescritionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const ProductDescription = ({
  className,
  children,
}: ProductDescritionProps) => {
  return (
    <p
      className={cn(
        "font-Manrope text-white font-medium opacity-75",
        className
      )}
    >
      {children}
    </p>
  );
};
