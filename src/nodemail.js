const mailer = require("nodemailer");

module.exports = (nome, mensagem) => {
    const smtpTransport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    const mail = {
        from: `yuri Teste <${process.env.EMAIL}>`,
        to: process.env.EMAIL_TO,
        subject: `${nome} te enviou uma mensagem`,
        text: mensagem,
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}