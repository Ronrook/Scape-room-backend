
const XLSX = require('xlsx');
import {  createUser }  from '../controllers/user.controller'
import {  validateCreateuser }  from '../middlewares/verifySignup'
const sendEmail = require('../libs/sendEmail')

export const saveDataExcel = async (req, res) => {
    const data = req.body

    

    try {

        data.forEach(async user => {

            const respuesta = await validateCreateuser(user)
            
            

            if (!respuesta) {
                const userSave = await  createUser(user)
                console.log(userSave)
                const resEmail = sendEmail(userSave)
                console.log(resEmail)
            }
        });
        
    } catch (error) {
        
        return res.status(401).json({message: 'error en la carga de datos'})
        
    }

    res.status(200).json('hecho'); 
}



