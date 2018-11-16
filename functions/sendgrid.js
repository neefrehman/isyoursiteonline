
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

module.exports = function helperSendEmail(email, name){
  const msg = {
    to: email,
    bcc: 'neef@ustwo.com',
    from: 'helloadventure@ustwo.com',
    subject: 'Welcome to Adventure',
    templateId: '126f4377-f2f1-4fb7-8db1-5707b752f7ab',
    substitutions: {
      firstName: name,
    },
  };
  return sgMail.send(msg).then(function (response) {
    console.log("sendgrid: then: " + JSON.stringify(response.data));
  }).catch((error) => {
      console.log("sendgrid: catch: " + error)
  });
}
