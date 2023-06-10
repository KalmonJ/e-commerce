import mongoose from "mongoose";

export const createDBConnection = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
  } catch (error) {
    console.error(error);
    return;
  }
};
