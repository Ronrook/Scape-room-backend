import { Router } from "express";
const router = Router();
import * as excelCtrl from "../controllers/excel.controller";
import { authJwt } from "../middlewares";




router.post('/', [authJwt.verifyToken], excelCtrl.getExcel)


export default router;