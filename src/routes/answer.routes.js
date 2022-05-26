import { Router } from "express";
const router = Router();

import * as answerCtrl from '../controllers/answer.controller'

router.post('/:questionId/:userId', answerCtrl.createAnswer)