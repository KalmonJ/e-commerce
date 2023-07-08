"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { ProductCartItem } from "../products/ProductCartItem";
import { Button } from "../ui/button";
import { cartStore } from "@/stores/cart";
import Link from "next/link";
import { userStore } from "@/stores/user";
import { Auth } from "./Auth";

type CartDialogProps = {
  trigger: ReactNode;
};

export const Cart = ({ trigger }: CartDialogProps) => {
  const cartItems = cartStore((state) => state.cartItems);
  const hasUser = userStore((state) => state.hasUser);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[377px] right-[15%] top-32">
        <div className="flex w-full py-4 justify-between">
          <h3 className="font-Manrope font-bold uppercase text-lg text-black tracking-[1.286px]">
            Cart({cartItems.length})
          </h3>
          {cartItems.length !== 0 && (
            <span className="underline font-Manrope font-medium text-black opacity-50 text-[15px] leading-[25px]">
              Remove all
            </span>
          )}
        </div>

        {!hasUser && (
          <div className="flex flex-col gap-6">
            <span className="text-center tracking-[1.1px] text-sm text-foreground font-Manrope font-bold">
              Log in and start shopping
            </span>
            <Auth
              trigger={<Button className="w-full border-none">SIGN IN</Button>}
            />
          </div>
        )}

        {cartItems.length === 0 && hasUser && (
          <div className="flex flex-col gap-6">
            <span className="text-center tracking-[1.1px] text-sm text-foreground font-Manrope font-bold">
              Your shopping cart is empty
            </span>
            <Link className="w-full" href="/">
              <Button className="border-none w-full">SHOP NOW</Button>
            </Link>
          </div>
        )}
        {cartItems.map((item) => (
          <ProductCartItem key={item.id} cartItem={item} />
        ))}
        {cartItems.length !== 0 && (
          <div className="flex justify-between items-center">
            <span className="text-black font-Manrope font-medium uppercase opacity-50 text-[15px]">
              Total
            </span>
            <h3 className="text-black font-bold uppercase text-lg font-Manrope ">
              5,396
            </h3>
          </div>
        )}
        {cartItems.length !== 0 && (
          <DialogFooter>
            <Button className="w-full border-none">CHECKOUT</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
