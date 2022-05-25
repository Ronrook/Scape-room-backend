import { Schema, model } from "mongoose";
import config from "../config";

const productSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);


productSchema.method.setImgUrl = function setImgUrl(fileName) {
  const {HOST, PORT} = config;
  this.imgURL = `${HOST}:${PORT}/public/${fileName}`
}



export default model("Product", productSchema);
