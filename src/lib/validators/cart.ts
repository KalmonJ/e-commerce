import z from "zod";

export const addValidator = z.object({
  ownerId: z.string(),
  productId: z.string(),
  productQuantity: z.number(),
});

export type AddProduct = z.infer<typeof addValidator>;
