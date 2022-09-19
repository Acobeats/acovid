const axios = require('axios');
const nodemailer = require("nodemailer");
require ("dotenv").config();

// Make a request for a user with a given ID

const getInfoMail = async (req, res) => {
   
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: (process.env.SMTP_MAIL_USER),
          pass: (process.env.SMTP_MAIL_PASS)
        }
      });
    
      // send mail with defined transport object
      await transporter.sendMail({
        from: (req.body.name.name) + ' ' + (req.body.name.email) , // sender address
        to: "fgarcialollini@gmail.com", // list of receivers
        subject: "Consulta", // Subject line
        text: (req.body.name.asunto), // plain text body
      });

console.log(req.body);
res.status(200).send();

}


module.exports={getInfoMail};