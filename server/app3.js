// nodemailer

import mailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

async function sendEmail() {
    try {
        let email = process.env.EMAIL 
        let pass = process.env.PASS

        let userdetail = await mailer.createTransport({
            service:"gmail",
            auth:{
                user: email,
                pass: pass,
            }

    })
 
        let sender =await  userdetail.sendMail({
            from:email,
            to:"suhail@code.in",
            subject:"This is Rayyan",
            text:"Greetings, Suhail sir  Rayyan this side a passionate full stack developer "
        })
        console.log("Email sent at ",sender.messageId);




    } catch (error) {
        console.log(error);
    }
}

sendEmail()