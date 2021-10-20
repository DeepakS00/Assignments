import ejs from "ejs";
import nodemailer from "nodemailer";
import { config } from "dotenv";

config();
export const mailer = (name: string, email: string) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.GMAIL_PW,
    },
  });
  ejs.renderFile("./views/mail.ejs", { name: name }, (err, data) => {
    if (err) {
      return err;
    } else {
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to the Family",
        html: data,
      };
      transport.sendMail(mailOptions, (err, info) => {
        if (err) return err;
        console.log(info.response);
      });
    }
  });
};
