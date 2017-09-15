var mail = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply@gmail.com',
    pass: 'stupidpass'
  }
});

var mailOptions = {
  from: 'noreply@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

var doNotify = function function_name (argument) {
	// body... 
	console.log("Notifying ");
}