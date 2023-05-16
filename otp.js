function generateOTP() {
  const otpCode = Math.floor(1000 + Math.random() * 9000);
  return otpCode;
}

function generatePassword() {
  const password = Math.random().toString(36).substring(2, 8);
  return password;
}

module.exports = {
  generateOTP,
  generatePassword
};







  // <script>
  // $(document).ready(function() {
  //   $('form').on('submit', function(e) {
  //     e.preventDefault();
  //     var number = $('#number-input').val();
  //     var gender = $('#gender-select').val();
  //     var choice = $('input[name="choice"]:checked').val();
  //     var message = '';
  //     if (choice === 'otp') {
  //       message = 'Your OTP is: ' + Math.floor(1000 + Math.random() * 9000); // Generate a random OTP
  //     } else if (choice === 'password') {
  //       message = 'Your password is: ' + Math.random().toString(36).substring(2, 8); // Generate a random password
  //     }
  //     var apiKey = ''; 
  //     var data = {
  //       'apikey': apiKey,
  //       'numbers': number,
  //       'message': message,
  //       'sender': 'Test'
  //     };
  //     $.ajax({
  //       type: 'POST',
  //       url: 'https://api.textlocal.in/send/',
  //       data: data,
  //       success: function(response) {
  //         alert('OTP or password sent successfully!');
  //         alert(response)
  //       },
  //       error: function(xhr, status, error) {
  //         alert('Error: ' + error);
  //       }
  //     });
  //   })
  // });
  // </script>





// const accountSid = '';
// const authToken = '';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'heLLO',
//         from: '+15075954518',
//         to: '+919644069134'
//     })
//     .then(message => console.log(message.sid))
//     .done();
 