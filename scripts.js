
    function sendmail() {

        var name = $('#Name').val();
        var city = $('#City').val();
        var emailaddress = $('#Sender').val();
        var subject = $('#Subject').val();
        var composeemail = $('#Composeemail').val();
        // var body = $('#body').val();
  
        var Body = 'Name: ' + name + '<br>City:' + city + '<br>Emailaddress: ' + emailaddress + '<br>Subject: ' + subject + '<br>Composeemail: ' + composeemail;
        //console.log(name, phone, Emailaddress, message);
  
        Email.send({
          Host: "smtp.google.com",
          Username: "puranokitab69@gmail.com",
          Password: "SamBae@123",
          To: '077bei035@ioepc.edu.np',
          From: "puranokitab69@gmail.com",
          Subject: "New Email on contact from " + name,
          Body: Body
        }).then(
          Email => {
            //console.log (message);
            if (Email == 'OK') {
              alert('Your Email has been sent. Thank you for messaging.');
            }
            else {
              console.error(Email);
              alert('There is error at sending Email.')
  
            }
  
          }
        );
  
      }
      $(document).ready(function(){
        $('#demo').carousel();
        $('#demos').carousel();
      })