import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_KEY);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
