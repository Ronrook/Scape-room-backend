import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";

import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routers"



const app = express()
createRoles()


//middlewares
app.use(morgan("dev"));
app.use(express.json());

// Settings
app.set("pkg", pkg);
app.set("port", config.PORT);


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
app.use('/api/users', usersRoutes)

export default app;