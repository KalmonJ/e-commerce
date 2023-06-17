import mongoose from "mongoose";

export const createDBConnection = async () => {
  try {
    mongoose
      .connect(process.env.NEXT_PUBLIC_MONGODB_URI as string)
      .then(() => console.log("db connection successfuly"));
  } catch (error) {
    console.error(error);
    return;
  }
};
