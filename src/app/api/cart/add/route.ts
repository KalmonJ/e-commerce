import { db } from "@/lib/db";
import { addValidator } from "@/lib/validators/cart";
import z from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { ownerId, productId, productQuantity } = addValidator.parse(body);

    const product = await db.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    const cart = await db.cart.findUnique({
      where: {
        ownerId: Number(ownerId),
      },
    });

    const user = await db.user.findUnique({
      where: {
        id: Number(ownerId),
      },
    });

    if (!user)
      return new Response(
        JSON.stringify({
          message: "fail",
          error: "User not found",
          data: null,
        }),
        {
          status: 404,
        }
      );

    if (!cart) {
      await db.cart.create({
        data: {
          total: 0,
          ownerId: user.id,
        },
      });
    }

    if (!product)
      return new Response(
        JSON.stringify({
          message: "fail",
          error: "Product not found",
          data: null,
        }),
        {
          status: 404,
        }
      );

    const cartItem = await db.cartItem.create({
      data: {
        productId: Number(productId),
        cartId: Number(ownerId),
        quantity: Number(productQuantity),
      },
    });

    const updatedCart = await db.cart.update({
      where: {
        ownerId: Number(ownerId),
      },
      data: {
        total: cart?.total! + product.price * productQuantity,
        cartItems: {
          connect: {
            id: cartItem.id,
          },
        },
      },
      include: {
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return new Response(
      JSON.stringify({ message: "success", data: updatedCart, error: null })
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ message: "fail", data: null, error: error.message }),
        {
          status: 400,
        }
      );
    }

    console.log(error, "erro");

    return new Response(
      JSON.stringify({
        message: "fail",
        error: "Unknown error try again later",
        data: null,
      }),
      {
        status: 500,
      }
    );
  }
}
