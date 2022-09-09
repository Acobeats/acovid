import nodemailer from "nodemailer";
import './Contact';
import Contact from "./Contact";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c4c1266bbe7ee3",
      pass: "8650557b99465d"
    }
  });

  let mailOptions = {
    from: JSON.stringify(Contact.data.email),
    to: "fgarcialollini@gmail.com",
    subject: `Consulta de la pagina`,
    html: `The body of the email goes here in HTML`,
    attachments: [
      {
        filename: `${name}.pdf`,
        path: path.join(__dirname, `../../src/assets/books/${name}.pdf`),
        contentType: 'application/pdf',
      },
    ],
  };
  
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.json(err);
    } else {
      res.json(info);
    }
  });