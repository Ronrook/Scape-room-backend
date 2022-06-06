import Answer from "../models/Answer";
import User from "../models/User";
import KataAnswer from "../models/KataAnswer";

export const getSeleccions = async (req, res) => {

    let userResponse = {
        userName: "",
        question: "",
        correct_answer: "",
        user_answer: false,
        use_tip:false,
        use_answer:false,
        kataDescription: "",
        kataSolution: "",
        userSolution: "",
    } 



    const user = await User.find();

    user.forEach(item => {
        let answers = await Answer.find({_id: [item._id]});
        let kataAnswers = await KataAnswer.find({_id: [item._id]});
        answers.forEach(item => {
            user.userName = item.user
            user.question = item.question
            user.correct_answer = item.correct_answer
            user.user_answer = item.user_answer
            user.use_tip = item.use_tip
            user.use_answer = item.use_answer
        });
    
        kataAnswers.forEach(item => {
            user.kataDescription = item.kataDescription
            user.kataSolution = item.kataSolution
            user.userSolution = item.userSolution
        });
    });
    return res.json(userResponse);
};