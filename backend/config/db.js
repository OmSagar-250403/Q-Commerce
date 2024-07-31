import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.mongo_url);

  console.log(`Database is connect with ${connection.host}`);
};