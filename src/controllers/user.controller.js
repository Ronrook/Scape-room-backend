import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User';


export const createUser = (req, res) => {
    res.json('usuario creado')
} 





export const getUserByToken = async (req, res) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: 'No se proporcionó token'})

        const decoded = jwt.verify(token, config.SECRET)
        console.log(decoded)
        req.userId = decoded.id;


        const user =  await User.findById(req.userId, {password: 0})

        if (!user) return res.status(404).json({message: 'Usuario no encontrado'})
        
        res.status(200).json(user);

        

    } catch (error) {
        return res.status(401).json({message: 'No autorizado'})
    }
    

};