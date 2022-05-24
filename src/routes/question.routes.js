import { Router } from "express";
const router = Router();

import * as questionsCtrl from '../controllers/questions.controller'

router.get('/', questionsCtrl.getQuestions)
router.get('/:questionId', questionsCtrl.getQuestionById)

router.put('/:questionId', questionsCtrl.updateQuestionById)

router.delete('/:questionId', questionsCtrl.deleteQuestionById)

router.post('/createquestion', questionsCtrl.createQuestion)



module.exports = router;
