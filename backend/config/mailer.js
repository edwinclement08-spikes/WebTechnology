// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

module.exports = function(toMail, recoveryLink) {
    const msg = {
        to: toMail,
        from: 'noreply@squid.com',
        subject: 'Password Recovery, Squid',
        text: 'Go to recovery link to Change Password: ' + recoveryLink,
        html: 'Click on recovery link to Change Password: <a href="'+recoveryLink+'">'+recoveryLink+'</a>',
      };
      console.log(msg);
      sgMail.send(msg);
}