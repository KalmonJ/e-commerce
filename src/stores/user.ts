import { User } from "@/types/user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  user: User;
  hasUser: boolean;
  setUser: (user: User) => void;
};

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {} as User,
      setUser(user) {
        set(() => ({ user, hasUser: true }));
      },
      hasUser: false,
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
