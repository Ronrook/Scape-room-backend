import { Router } from "express";
const router = Router();

import * as seleccionCtrl from "../controllers/seleccion.controller"

router.get('/', seleccionCtrl.getSeleccions)

module.exports = router;