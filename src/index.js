import express from "express";
import router from "./routes.js";
import mongoose from "mongoose";
import {} from "dotenv/config";

async function main() {
  const app = express();
  app.use(express.json());
  app.use(router);

  try {
    await mongoose.connect(process.env.MONGODB_URI_DASH);

    app.listen(process.env.PORT, () => {
      console.log("app running in port:", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

try {
  main();
} catch (error) {
  console.log(error);
}
