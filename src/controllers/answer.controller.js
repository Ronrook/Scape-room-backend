import Question from "../models/Question";
import User from '../models/User';
import Answer from '../models/Answer';

export const createAnswer = async (req, res) => {
    const userid = await User.findById(req.params['userId']);
    const questionid = await Question.findById(req.params['questionId']);
    const answer = new Answer(req.body)
    console.log(userid)
    console.log(questionid)
    console.log(answer)
}