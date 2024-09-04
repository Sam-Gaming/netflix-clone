import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("Mongo DB connected: " + con.connection.host);
  } catch (error) {
    console.log("Error connecting to MongoDB: " + error.message);
    process.exit(1); // 1 means error
  }
};
