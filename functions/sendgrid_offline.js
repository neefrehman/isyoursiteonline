
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

module.exports = function helperSendEmail(email, website){
  const msg = {
    to: email,
    from: 'no-reply@isyoursite.offline',
    subject: 'your site is offline',
    templateId: 'd-6171b02881ea4115a088acdbafdba2f6',
    substitutions: {
      website_url: website,
    },
  };
  return sgMail.send(msg).then(function (response) {
    console.log("sendgrid: then: " + JSON.stringify(response.data));
  }).catch((error) => {
      console.log("sendgrid: catch: " + error);
  });
};
