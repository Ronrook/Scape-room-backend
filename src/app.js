import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../package.json";

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);


app.get("/", (req, res) => {
    res.json({
      message: "Welcome to my Products API",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });
