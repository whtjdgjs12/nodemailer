//mailer.js 
var nodemailer = require('nodemailer');

//message 
var message = { 
         from : 'qpqp214402@gmail.com', 
         to : 'c214402@naver.com', 
         subject : 'hi', 
         text : 'test' 
};

var smtpConfig = { 
         host : 'smtp.gmail.com', 
         port : 465, 
         secure : true, //SSL 
         auth : { 
                 user : 'qpqp214402@gmail.com', 
                 pass : 'cc214402' 
         } 
};

var transporter = nodemailer.createTransport(smtpConfig);

transporter.sendMail(message, function(err, response){ 
         console.log(err || response); 
}); 
