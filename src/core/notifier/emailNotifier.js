var mail = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahcnoreply@gmail.com',
    pass: 'testpass'
  }
});

var mailOptions = {
  from: 'ahcnoreply@gmail.com',
  to: '',
  subject: 'Your application is unhealthy!',
  text: ''
};

var doNotify = function function_name(dest) {
	//validate(dest);
	mailOptions.to = dest;
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
}