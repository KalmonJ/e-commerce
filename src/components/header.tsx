import { Logo } from "./icons";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { UserDialog } from "./user-dialog";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserMenu } from "./user-menu";

const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full flex flex-col items-center pt-8 ">
      <div className="w-full flex pb-8 justify-between items-center">
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
          <Button variant="link" size="sm">
            <ShoppingCart color="#ffffff" />
          </Button>
          {!session?.user && <UserDialog />}
          {/* @ts-expect-error */}
          {session && session.user && <UserMenu user={session.user} />}
        </div>
      </div>
      <hr className="w-full bg-[#FFFFFF] opacity-20" />
    </header>
  );
};
