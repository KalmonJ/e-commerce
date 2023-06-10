import { Logo } from "./icons";
import { ShoppingCart, User2 } from "lucide-react";
import { Button } from "./ui/button";
import { UserDialog } from "./user-dialog";

const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];

export const Header = () => {
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
        <div>
          <Button variant="link" size="sm">
            <ShoppingCart color="#ffffff" />
          </Button>
          <UserDialog />
        </div>
      </div>
      <hr className="w-full bg-[#FFFFFF] opacity-20" />
    </header>
  );
};
