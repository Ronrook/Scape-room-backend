import {  validateCreateuser }  from '../middlewares/verifySignup'
import {  createUser }  from '../controllers/user.controller'
const sendEmail = require('../libs/sendEmail')

export const saveDataExcel = async (req, res) => {
    // const {urlExcel} = req.body;


    const excel = XLSX.readFile(
        
        'D:/Desktop/scape_room_backend/src/usuarios.xlsx'
    );

    const nombreHoja = excel.SheetNames; 
    const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

    
    try {

        datos.forEach(async user => {

            const respuesta = await validateCreateuser(user)
            console.log(respuesta)

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



