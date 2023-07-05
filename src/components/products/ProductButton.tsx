import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { HTMLAttributes } from "react";

interface ProductButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const ProductButton = ({ className }: ProductButtonProps) => {
  return (
    <Button className={cn("uppercase border-none", className)}>
      ADD TO CART
    </Button>
  );
};
