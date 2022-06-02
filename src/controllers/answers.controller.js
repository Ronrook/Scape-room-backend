import Question from "../models/Question";
import User from "../models/User";
import Answer from "../models/Answer";

export const createAnswer = async (req, res) => {
    const { answer, correct_answer, use_tip, use_answer} = req.body;
    const question_id = await Question.findById(req.params['questionId']);
    const user_id = await User.findById(req.params['userId']);
       
    try {
        const newAnswer = new Answer({
            question_id,
            answer,
            correct_answer,
            use_tip,
            use_answer,
            user_id,
        });

        const answerSaved = await newAnswer.save();

        res.status(201).json(answerSaved);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const getAnswer = async (req, res) => {
    const answer = await Answer.find();
    return res.json(answer);

};