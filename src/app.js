import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../package.json";


import productRoutes from "./routes/products.routes";

const app = express()



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


app.use('/products', productRoutes)

  export default app;