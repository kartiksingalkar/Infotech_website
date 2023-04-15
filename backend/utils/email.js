const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // host: process.env.HOST,
            // service: process.env.SERVICE,
            // port: process.env.EMAIL_PORT,
            host: "mail.ellorainfotech.com",
            service:"goddaddy",
            port: 465,
            secure: true,
            secureConnection: false,
            debug: true,
            auth: {
                // user: process.env.USER,
                // pass: process.env.PASS,
                // user: "mayursonar306@gmail.com",
                // pass: "cilt zdor xlih udcp"
                user:"sanket@ellorainfotech.com",
                pass:"Sanket,123"

            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            html: text,
        });
        console.log("email sent sucessfully");
    } catch (error) {

        // res.status(401).json({err: error.message})
        console.log("email not sent");
        console.log(error);
    }
};

module.exports = sendEmail;