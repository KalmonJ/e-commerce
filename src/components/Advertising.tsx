import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const Advertising = () => {
  return (
    <section className="flex items-center justify-between max-w-7xl w-full">
      <div className="flex flex-col gap-8 max-w-[445px] w-full">
        <h3 className="font-Manrope font-bold tracking-[1.429px] text-[40px] leading-10 uppercase">
          Bring you the <b className="text-primary">best</b> audio gear
        </h3>
        <p className="font-Manrope text-[15px] font-medium opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="overflow-hidden rounded">
        <Image
          src="/image-best-gear.jpg"
          className="object-cover transition-transform hover:scale-105"
          height={588}
          width={540}
          loading="lazy"
          alt="man with headphones"
        />
      </div>
    </section>
  );
};
