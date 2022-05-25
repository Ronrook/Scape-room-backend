import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";

import { authJwt } from "../middlewares";

const upload = require('../libs/storage')

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.getProducts)

router.get("/:productId", [authJwt.verifyToken], productsCtrl.getProductById);

router.post("/", upload.single('image'), productsCtrl.createProduct);

router.put("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductById);

router.delete("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductById);


export default router;