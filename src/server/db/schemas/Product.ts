import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: {
      thumbnail: { type: String },
      presentation: { type: Array<String> },
    },
    features: { type: String, required: true },
    inTheBox: [
      {
        name: { type: String },
        quantity: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", ProductSchema);
