import mongoose from "mongoose";

export const createDBConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kalmon:kalmon@cluster0.k0hmnyk.mongodb.net/e-commerce?retryWrites=true&w=majority"
    );

    console.log("db connection successfully");
  } catch (error) {
    console.log(error);
  }
};
