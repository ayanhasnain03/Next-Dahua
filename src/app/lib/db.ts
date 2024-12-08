import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://ayanhasnain2572006:8797131193@practicemern.lebin.mongodb.net/diziimpact");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
