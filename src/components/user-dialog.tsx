import { User2 } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { AuthTabs } from "./auth-tabs";

export const UserDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <User2 color="#ffffff" />
      </DialogTrigger>
      <DialogContent className="pt-11">
        <AuthTabs />
      </DialogContent>
    </Dialog>
  );
};
