import Answer from "../models/Answer";

export const createAnswer = async (req, res) => {
    const { question_id, answer, use_tip, use_answer, user_id} = req.body;

    try {
        const newAnswer = new Answer({
            question_id,
            answer,
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