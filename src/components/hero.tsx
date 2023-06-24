import { Header } from "./header";
import {
  CardProduct,
  ProductDescrition,
  ProductName,
} from "./products/CardProduct";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="bg-featured bg-no-repeat bg-[#141414] bg-cover flex flex-col items-center w-full h-screen">
      <div className="max-w-[1280px] w-full">
        {/* @ts-expect-error */}
        <Header />
      </div>
      <section className="max-w-7xl h-full flex items-center w-full">
        <CardProduct className="max-w-[398px] w-full">
          <ProductDescrition className="uppercase text-sm tracking-[10px]">
            new product
          </ProductDescrition>
          <ProductName className="text-[56px] leading-[58px]">
            XX99 Mark II Headphones
          </ProductName>
          <ProductDescrition className="text-base">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </ProductDescrition>
          <Button variant="default" className="w-40" size="sm">
            See Product
          </Button>
        </CardProduct>
      </section>
    </section>
  );
};
