import { transporter } from './mailer';

const sendEmail = async (user)  => {
    const { username, email, password} = user
try {
    // send mail with defined transport object
    await transporter.sendMail({
    from: '"Scape room  EducaMás" <jdquimbayo72@misena.edu.co>', // sender address
    to: email, // list of receivers
    subject: "Bienvenido a Scape Room ✔️", // Subject line
    html: `<h1> Hola ${username} tus credenciales de acceso son <br> 
    email: ${email} <br>
    passsword: ${password}</h1>`, // html body
    })
        
    } catch (error) {
        return 'error al envial email'
        
    }

}


module.exports = sendEmail