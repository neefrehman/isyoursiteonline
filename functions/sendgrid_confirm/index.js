const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

module.exports = function helperSendEmail(email, confirm_url){
  const msg = {
    to: email,
    from: 'no-reply@isyoursite.offline',
    subject: 'your site is offline',
    templateId: 'd-9e95ebaf3cc04ce79b82423e57383c5e',
    substitutions: {
      confirm_email: confirm_url,
    },
  };
  return sgMail.send(msg).then(function (response) {
    console.log("sendgrid: then: " + JSON.stringify(response.data));
  }).catch((error) => {
      console.log("sendgrid: catch: " + error);
  });
};
