import { Logo } from "./icons";
import { ShoppingCart, User2 } from "lucide-react";
import { Button } from "./ui/button";
import { Auth } from "./dialogs/Auth";

import { UserMenu } from "./UserMenu";
import { getServerSession } from "@/lib/auth";
import { Cart } from "./dialogs/Cart";

const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];

export const Header = async () => {
  const session = await getServerSession();

  return (
    <header className="w-full flex fixed bg-main-black right-1/2 left-1/2 -translate-x-1/2 z-[9999] flex-col items-center pt-8 ">
      <div className="w-full max-w-7xl flex pb-8 justify-between items-center">
        <Logo />
        <ul className="flex gap-[34px]">
          {menuOptions.map((option) => (
            <li
              className="text-white uppercase cursor-pointer text-sm font-bold tracking-[2px]"
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <Cart
            trigger={
              <Button variant="link" size="sm">
                <ShoppingCart color="#ffffff" />
              </Button>
            }
          />
          {!session && <Auth trigger={<User2 color="#ffffff" />} />}
          {/* @ts-ignore */}
          {session && session.id && <UserMenu user={{ ...session }} />}
        </div>
      </div>
      <hr className="w-full bg-[#FFFFFF] opacity-20" />
    </header>
  );
};
