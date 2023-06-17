import { SessionProvider } from "next-auth/react";
import { Header } from "./header";

export const Hero = () => {
  return (
    <section className="bg-[#0E0E0E] flex justify-center w-full h-screen">
      <div className="max-w-[1280px] w-full">
        {/* @ts-expect-error */}
        <Header />
      </div>
    </section>
  );
};
