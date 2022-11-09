const NodeMailer = require("nodemailer")

const Users = {
    Support: {
        user: 'support@prolancer.ge',
        pass: 'Acropolisi1122.',
    }
}

function SendMail(User, Data) {
    var Transporter = NodeMailer.createTransport({
        host: "server289.web-hosting.com",
        port: 465,
        secure: true,
        auth: User,
        tls: {
            rejectUnauthorized: false
        }
    });

    var MailOption = {
        from: User.user,
        to: Data.To,
        subject: Data.Subject,
        text: Data.Text
    };

    Transporter.sendMail(MailOption, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    Users: Users,
    SendMail: SendMail
}