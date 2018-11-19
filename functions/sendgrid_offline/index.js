const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handle = function(event, ctx, cb){
  const msg = {
    to: event.email,
    from: {
      name: 'isyoursite.online',
      email: 'no-reply@isyoursite.online',
    },
    subject: 'your site is offline',
    templateId: 'd-6171b02881ea4115a088acdbafdba2f6',
    dynamic_template_data: {
      website_url: event.website,
    },
  };
  return sgMail.send(msg).then(function (response) {
    cb(null, response);
  }).catch((error) => {
    cb(error);
  });
};
