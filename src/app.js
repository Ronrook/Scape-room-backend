import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";



const app = express()
createRoles()



app.use(morgan("dev"));
app.use(express.json());
// Settings
app.set("pkg", pkg);



app.get("/", (req, res) => {
    res.json({
      message: "Welcome to users Scape room  API",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });


app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

  export default app;