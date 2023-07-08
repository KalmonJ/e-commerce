"use client";

import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export type UserMenuProps = Pick<Session, "user">;

export const UserMenu = async (props: UserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8">
          <AvatarImage src={props.user?.image ?? ""} />
          <AvatarFallback className="font-Manrope font-extrabold text-base">
            {props.user?.name?.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="!z-[999999]">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-none  font-semibold">
              {props.user?.name}
            </p>
            <p className="text-xs leading-none font-semibold text-muted-foreground">
              {props.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm leading-none font-semibold">
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => await signOut()}
          className="gap-3"
        >
          <LogOut color="#D87D4A" width={18} height={18} />
          <p className="font-semibold leading-none text-sm">Log out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
