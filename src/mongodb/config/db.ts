import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL || "test";

const connectDB = () => {
  return mongoose.connect(
    DATABASE_URL,
	{},
    (err) => {
      if (err) {
        console.error("Connection to DB failed");
      } else {
        console.log("Connection to DB was successful");
      }
    }
  );
};

export default connectDB;
