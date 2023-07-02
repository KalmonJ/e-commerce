import { Twitter, Facebook, Instagram } from "lucide-react";
import { Logo } from "./icons";

export const Footer = () => {
  return (
    <section className="w-full mt-32 bg-main-black h-[365px] items-center flex justify-center">
      <footer className="max-w-7xl w-full flex justify-between items-baseline">
        <div className="flex flex-col max-w-[540px] w-screen gap-14">
          <div className="flex flex-col gap-9">
            <Logo />
            <p className="font-Manrope opacity-50 text-white text-[15px] leading-[25px] font-medium">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <span className="font-Manrope text-white text-[15px] leading-[25px] opacity-50 font-bold">
            Copyright 2021. All Rights Reserved
          </span>
        </div>

        <div className="w-full flex flex-col items-end">
          <ul className="flex gap-9 items-center">
            <li className="uppercase font-Manrope font-bold text-white text-sm tracking-[2px]">
              Home
            </li>
            <li className="uppercase font-Manrope font-bold text-white text-sm tracking-[2px]">
              Headphones
            </li>
            <li className="uppercase font-Manrope font-bold text-white text-sm tracking-[2px]">
              Speakers
            </li>
            <li className="uppercase font-Manrope font-bold text-white text-sm tracking-[2px]">
              Earphones
            </li>
          </ul>

          <div className="flex mt-28 gap-4">
            <Facebook color="#fff" />
            <Twitter color="#fff" />
            <Instagram color="#fff" />
          </div>
        </div>
      </footer>
    </section>
  );
};
