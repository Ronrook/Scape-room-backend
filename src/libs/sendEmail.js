
import { transporter } from './mailer';

const sendEmail = async (user)  => {
    const { username, email, password} = user
    try {
        // send mail with defined transport object
        await transporter.sendMail({
        from: '"Fred Foo" <jdquimbayo72@misena.edu.co>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `Hola ${username} tus credenciales de acceso son  
        email:${email} 
        passsword:${password}`, // plain text body
        html: "<b>Hello world?</b>", // html body
        })
    } catch (error) {
        return 'error al envial email'
        
    }

}


module.exports = sendEmail