import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    

    if (!token) return res.status(403).json({message: 'Token no valido'})

    const decoded = jwt.verify(token, config.SECRET)
    console.log(decoded)
    req.userId = decoded.id;


    const user =  await User.findById(req.userId, {password: 0})
    if (!user) return res.status(404).json({message: 'Usuario no encontrado'})

    next()
}