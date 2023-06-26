import Image from "next/image";
import { CardProduct, ProductDescrition, ProductName } from "./CardProduct";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ration";
import { audiophileAPI } from "@/client";
import Link from "next/link";

export const FeaturedSection = async () => {
  const data = await audiophileAPI.product.featuredProducts();

  const { featuredSectionProducts } = data;
  const [product_1, product_2, product_3] = featuredSectionProducts;

  return (
    <section className="flex flex-col max-w-screen-xl w-full gap-8">
      <div className="bg-primary overflow-hidden bg-featured-section flex justify-center items-center bg-no-repeat rounded-md h-[560px] w-full">
        <div className="h-full w-full flex items-end">
          <div className="h-[493px] flex justify-center relative w-full">
            <Image
              width={410}
              height={493}
              src="https://res.cloudinary.com/dz3ucqpmn/image/upload/v1687742730/products/product-zx9-speaker/image-speaker-zx9_jejuoq.png"
              alt={product_1.name}
              className="absolute -bottom-3"
            />
          </div>
        </div>
        <div className="w-full pl-8">
          <CardProduct className="max-w-[349px] gap-6 w-full">
            <ProductName className="text-[56px] leading-[58px]">
              {product_1.name}
            </ProductName>
            <ProductDescrition className="text-[15px] leading-[25px]">
              {product_1.description}
            </ProductDescrition>
            <Link href={`/product/${product_1._id}`}>
              <Button
                variant="default"
                size="sm"
                className="bg-black w-[160px] uppercase hover:text-black transition-all duration-300 hover:bg-transparent hover:border hover:border-solid hover:border-black mt-4"
              >
                See Product
              </Button>
            </Link>
          </CardProduct>
        </div>
      </div>
      <div className="w-full gap-8 h-[320px] flex flex-col justify-center pl-16 bg-featured-section-speaker bg-no-repeat bg-cover">
        <h4 className="font-Manrope text-[28px] font-bold tracking-[2px] uppercase">
          {product_2.name}
        </h4>
        <div>
          <Link href={`/product/${product_2._id}`}>
            <Button
              variant="outline"
              size="sm"
              className="max-w-[160px] w-full hover:bg-black hover:border-none transition-all duration-300 hover:text-white"
            >
              See Product
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-[30px]">
        <div className="w-full rounded-md ">
          <AspectRatio ratio={16 / 9} className="h-[320px]">
            <Image
              fill
              src="https://res.cloudinary.com/dz3ucqpmn/image/upload/v1687744710/products/product-yx1-earphones/image-earphones-yx1_tftk5v.jpg"
              alt={product_3.name}
              className="rounded-md"
            />
          </AspectRatio>
        </div>
        <div className="w-full flex flex-col justify-center gap-8 pl-16 rounded-md h-[320px] bg-light-gray">
          <h4 className="font-Manrope text-[28px] font-bold tracking-[2px] uppercase">
            {product_3.name}
          </h4>
          <div>
            <Link href={`/product/${product_3._id}`}>
              <Button
                variant="outline"
                size="sm"
                className="max-w-[160px] w-full hover:bg-black hover:border-none transition-all duration-300 hover:text-white"
              >
                See Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
