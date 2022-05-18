import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';
const createPassword = require('../libs/createPassword')

export const signUp = async (req, res) =>{
    const { name, username, email, roles } = req.body;

    const newUser = new User({
        name, 
        username,
        email,
    })


    const clave = createPassword()
    

    if (roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role =  await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }



    const user = {
        username: newUser.username,
        email: newUser.email,
        password: clave

    } 


    try {
        console.log('prueba try')
        newUser.password = await User.encryptPassword(clave)
        console.log('despues de try')
        
        
    } catch (error) {
        console.log('prueba catch')
        return res.status(401).json({message: 'no se puede'})
        
    }
    

    await newUser.save();

    // const token =  jwt.sign({id: savedUser._id}, config.SECRET, {
    //     expiresIn: 3600 // 1 hora
    // } )

    const id = savedUser._id
    // const user =  await User.findById(id, {_id: 0, createdAt: 0, updatedAt: 0})

    res.status(200).json(user)

}

export const signin = async (req, res) =>{
    const { email, password } = req.body;

    const userFound = await User.findOne({email: email}).populate("roles");

    if (!userFound) return res.status(400).json({message: 'Usuario no encontrado'})

    const matchPassword = await User.comparePassword(password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: 'password invalido'})


    const token =  jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 3600 // 1 hora
    } )

    const clave = createPassword(8, true)
    console.log(clave)


    res.status(200).json({token})
}