import mongoose from "mongoose";

export const createDBConnection = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://kalmon:kalmon@cluster0.k0hmnyk.mongodb.net/e-commerce?retryWrites=true&w=majority"
    );
    console.log("db connection successfully");
    return db;
  } catch (error) {
    console.error(error);
  }
};
