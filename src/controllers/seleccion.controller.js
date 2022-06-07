import Answer from "../models/Answer";
import User from "../models/User";
import KataAnswer from "../models/KataAnswer";

export const getSeleccions = async (req, res) => {

    // let userResponse = {
    //     userName: "",
    //     question: "",
    //     correct_answer: "",
    //     user_answer: false,
    //     use_tip:false,
    //     use_answer:false,
    //     kataDescription: "",
    //     kataSolution: "",
    //     userSolution: "",
    // } 



    // const user = await User.find();

    // user.forEach(async item => {
    //     let answers = await Answer.find({userId: [item._id]});
    //     console.log(answers);
    //     console.log('antes')
    //     let kataAnswers = await KataAnswer.find({_id: [item._id]});
    //     console.log(kataAnswers)
    //     answers.forEach(item => {
    //         user.userName = item.user
    //         user.question = item.question
    //         user.correct_answer = item.correct_answer
    //         user.user_answer = item.user_answer
    //         user.use_tip = item.use_tip
    //         user.use_answer = item.use_answer
    //     });
    
    //     kataAnswers.forEach(item => {
    //         user.kataDescription = item.kataDescription
    //         user.kataSolution = item.kataSolution
    //         user.userSolution = item.userSolution
    //     });
    // });

    const userResponse = {
            id: '',            
            userName: 'maria',
            answersQuestions: [],
            answerKatas: [],
    
    }


        
    let allusers = []    
    const users = await User.find();

    
    
    users.forEach(async user => {

        userResponse.userName = user.name
        userResponse.id =user._id
        const answers = await Answer.find({user_id: [user._id]});
        const kataAnswers = await KataAnswer.find({userId: [user._id]});
        console.log(kataAnswers)
        console.log(answers)
    
        answers.forEach(async item => {
            userResponse.answersQuestions.push(item) 
        });
        userResponse.answerKatas.push(kataAnswers) 

        

    
        // allusers = [...userResponse]
        
    })

    console.log(allusers)



    return res.json(userResponse);
};