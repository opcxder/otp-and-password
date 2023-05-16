// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC20f10ded175ab082597b84c881251394";
const authToken = "bead2f3f767a90c575d1b8b66652ad13";
const verifySid = "VA03de9f94b8044cdf0d6d0395ad640bbb";
const client = require("twilio")(accountSid, authToken);


const express = require('express')
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const { generateOTP, generatePassword } = require('./otp');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.post('/', (req, res) => {
  const user_number = req.body.user_number;
  const user_choice = req.body.choice;

  if (user_choice === 'otp') {
    const otpCode = generateOTP();

    //code to send otp 

    client.verify.v2
  .services(verifySid)
  .verifications.create({ to: user_number, channel: "sms" })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: user_number, code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());

  });
 
    } 
      else if (user_choice === 'password') {
        const password = generatePassword();
      
        // Code to send the password 
        
    }else {
        res.status(400).send('Invalid choice.');
      }
    });

// port 
app.listen(5000,()=>{
    console.log("listing in port 5000");
})