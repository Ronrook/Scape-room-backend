import express from "express";
const cors = require("cors"); 
import morgan from "morgan";
import config from "./config";
const multer = require('multer')

import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routers"


import excelRoutes from "./routes/excel.routes";





const app = express()

// app.use(multer())
app.use(cors())
createRoles()



app.use(morgan("dev"));
app.use(express.json());

app.use('/public', express.static(`${__dirname}/storage/imgs`))

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
app.use('/api/excel', excelRoutes)

export default app;