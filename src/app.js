import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express()

import pkg from "../package.json";

// Settings
app.set("pkg", pkg);



app.get("/", (req, res) => {
    res.json({
      message: "Welcome to my Products API",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });


  export default app;