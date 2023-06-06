import mongoose from "mongoose";

export const createDBConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kalmon:kalmon@cluster0.k0hmnyk.mongodb.net/e-commerce?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.error(error);
    return;
  }
};
