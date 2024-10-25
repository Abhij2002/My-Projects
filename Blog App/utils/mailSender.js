const nodemailer = require("nodemailer");

async function mailSender (email, title, body){
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.MAIL_USER,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occured: " + error);
      } else {
        console.log("successfully sent to :" + to);
      }
    });
    return mailOptions;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { mailSender };
