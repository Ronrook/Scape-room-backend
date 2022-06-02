import {  validateCreateuser }  from '../middlewares/verifySignup'
import {  createUser }  from '../controllers/user.controller'
const sendEmail = require('../libs/sendEmail')

export const saveDataExcel = async (req, res) => {
    const data = req.body;

<<<<<<< HEAD
    
=======
>>>>>>> 5d54b410aba694f4194cd0759ab0ca8aeb15f75d
    
    try {

        data.forEach(async user => {

            const verify = await validateCreateuser(user)
            console.log(verify)

            if (!verify) {
                const newUser = await  createUser(user)
                console.log(newUser)
                const resEmail = sendEmail(newUser)
                console.log(resEmail)
            }
        });
        
    } catch (error) {
        
        return res.status(401).json({message: 'error en la carga de datos'})
        
    }
    
    
    res.status(200).json('hecho'); 
}



