// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'edwinclement08@gmail.com',
  from: 'noreply@squid.com',
  subject: 'Password Recovery, Squid',
  text: 'link is :sfssfesfesfsf:',
  html: '<strong>adsfjs</strong>',
};
sgMail.send(msg);