const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handle= function(event, ctx, cb){
  const msg = {
    to: event.email,
    from: {
      name: 'isyoursite.online',
      email: 'no-reply@isyoursite.online',
    },
    subject: 'your site is offline',
    templateId: 'd-9e95ebaf3cc04ce79b82423e57383c5e',
    dynamic_template_data: {
      confirm_email: event.confirm_url,
    },
  };
  return sgMail.send(msg).then((response) => {
    cb(null, 'Email successfully sent');
  }).catch((error) => {
    cb(error);
  });
};
