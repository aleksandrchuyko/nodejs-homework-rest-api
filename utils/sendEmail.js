const sendgridMail = require('@sendgrid/mail');

const { SUPPORT_EMAIL, SENDGRID_API_KEY } = process.env;

sendgridMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const mail = { ...data, from: SUPPORT_EMAIL };
    await sendgridMail.send(mail);
    return true;
}

module.exports = sendEmail;