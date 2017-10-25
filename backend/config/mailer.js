// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
var fs = require('fs');

var apiKey = fs.readFileSync('sendgrid.env', 'utf8');

sgMail.setApiKey(apiKey);


module.exports = function(toMail, recoveryLink) {
    const msg = {
        to: toMail,
        from: 'noreply@squid.com',
        subject: 'Password Recovery, Squid',
        text: 'Go to the Recovery Link at  ' + recoveryLink,
        html: 'Click to the Recovery Link at <a href="'+recoveryLink+'">'+recoveryLink+'</a>' 
      };
      sgMail.send(msg);
}