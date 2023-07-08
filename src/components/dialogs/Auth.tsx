import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { AuthTabs } from "../AuthTabs";
import { ReactNode } from "react";

type AuthProps = {
  trigger: ReactNode
}

export const Auth = ({trigger}: AuthProps) => {
  return (
    <Dialog modal>
      <DialogTrigger>
        {trigger}
      </DialogTrigger>
      <DialogContent className="pt-11">
        <AuthTabs />
      </DialogContent>
    </Dialog>
  );
};
