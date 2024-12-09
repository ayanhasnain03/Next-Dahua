import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGO_URI as string);
=======
    await mongoose.connect("mongodb+srv://ayanhasnain2572006:8797131193@practicemern.lebin.mongodb.net/diziimpact");
>>>>>>> cf845455e425bebe8e3e720ffa5ee6fe73845558
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
