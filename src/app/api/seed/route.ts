import { db } from "@/lib/db";
import { faker } from "@faker-js/faker";
import { hash } from "bcrypt";

export async function GET(request: Request) {
  async function main() {
    await db.product.upsert({
      create: {
        id: 1,
        thumbnail:
          "https://res.cloudinary.com/dz3ucqpmn/image/upload/v1681167249/products/product-zx9-speaker/image-product_jmsctf.jpg",
        category: "SPEAKER",
        features:
          "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        price: 4500.0,
        name: "ZX9 SPEAKER",
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        images: [
          "https://res.cloudinary.com/dz3ucqpmn/image/upload/v1681167249/products/product-zx9-speaker/image-gallery-1_sitq8u.jpg",
          "https://res.cloudinary.com/dz3ucqpmn/image/upload/v1681167249/products/product-zx9-speaker/image-gallery-2_qoi4mm.jpg",
          "https://res.cloudinary.com/dz3ucqpmn/image/upload/v1681167249/products/product-zx9-speaker/image-gallery-3_rb4kpw.jpg",
        ],
      },
      where: {},
      update: {},
    });
    await db.inTheBox.upsert({
      create: {
        name: "Speaker Unit",
        quantity: 2,
        productId: 1,
      },
      where: {},
      update: {},
    });
    await db.inTheBox.upsert({
      create: {
        name: "Speaker Cloth Panel",
        quantity: 2,
        productId: 1,
      },
      where: {},
      update: {},
    });
    await db.inTheBox.upsert({
      create: {
        name: "User Manual",
        quantity: 1,
        productId: 1,
      },
      where: {},
      update: {},
    });
    await db.inTheBox.upsert({
      create: {
        name: "3.55mm 10m Audio Cable",
        quantity: 1,
        productId: 1,
      },
      where: {},
      update: {},
    });
    await db.inTheBox.upsert({
      create: {
        name: "10m Optical Cable",
        quantity: 1,
        productId: 1,
      },
      where: {},
      update: {},
    });
  }

  main()
    .then(
      () =>
        new Response("migration successfuly", {
          status: 200,
        })
    )
    .catch(
      (err) =>
        new Response(err.message, {
          status: 500,
        })
    );
}
