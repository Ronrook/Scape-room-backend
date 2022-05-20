
const XLSX = require('xlsx');
import  createUser from '../controllers/user.controller'
import User from '../models/User';




export const getExcel = async (req, res) => {
    const {urlExcel} = req.body;
    console.log(urlExcel);
    
    const excel = XLSX.readFile(
        
        'D:/Desktop/scape_room_backend/src/usuarios.xlsx'
    );

    const nombreHoja = excel.SheetNames; //esto me regresa un array
    const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    console.log(datos);
    User.insertMany(datos,(err,data)=>{  
        if(err){  
            console.log(err);  
        }else{  
            res.redirect('/');  
        }  
        }); 
    
}
    
    





