import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';
const createPassword = require('../libs/createPassword')

export const signUp = async (req, res) =>{
    const passwordRandom = createPassword()
    const { name, username, email, roles } = req.body;

    const newUser = new User({
        name, 
        username,
        email,
        password: await User.encryptPassword(passwordRandom)
    })



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
        password: passwordRandom
    } 

    await newUser.save();

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


    res.status(200).json({token})


    // const role = await Role.find({_id: {$in: userFound.roles}})
    
    // console.log(userFound.isLoggedIn)
    
    // if (!userFound.isLoggedIn) {


    //     if(role[0].name === 'user'){
    //             userFound.isLoggedIn = true
    //             await userFound.save();
    //             console.log('es un usuario')
    //             console.log(userFound.isLoggedIn)
    //     }

    //     const token =  jwt.sign({id: userFound._id}, config.SECRET, {
    //     expiresIn: 3600 // 1 hora
    //     } )

    //     res.status(200).json({token})
    // }

    // if (userFound.isLoggedIn) return res.status(401).json({token: null, message: 'No puedes ingresar por segunda vez'})

}
