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


productSchema.methods.setImgUrl = function setImgUrl(filename) {
  const {HOST, PORT} = config;
  this.imgURL = `${HOST}/public/${filename}`
}



export default model("Product", productSchema);
