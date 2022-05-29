const btnSendContactMe = document.querySelector(".contact_container_main_form_button");
const formContact = document.querySelector(".contact_container_main_form");

function recaptcha_callback(){

  btnSendContactMe.removeAttribute("disabled");
  btnSendContactMe.style.cursor = "pointer";
  btnSendContactMe.textContent = "SEND";

}

function handleCaptchaExpired(){
  btnSendContactMe.setAttribute("disabled", "");
  btnSendContactMe.style.cursor = "not-allowed";
  btnSendContactMe.textContent = "YOU NEED VALIDATE CAPTCHA";
}

const sendMail = (e) => {

  e.preventDefault();

  const clientName = document.getElementById("nombre").value;
  const clientEmail = document.getElementById("email").value;
  const clientMessage = document.getElementById("message").value;

  fetch("https://formsubmit.co/ajax/diego.libonati1998@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: `${clientName}`,
        email: `${clientEmail}`,
        message: `${clientMessage}`,
    })
})
    .then(response => {

      if (response.ok){
        
        if (clientName.split(" ").join("") == "" || clientEmail.split(" ").join("") == "" || clientMessage.split(" ").join("") == ""){

          btnSendContactMe.textContent = "SENDING.";

          setTimeout(function(){
              btnSendContactMe.textContent = "SENDING..";
          },500);
  
          setTimeout(function(){
              btnSendContactMe.textContent = "SENDING...";
          },1000);
  
  
          setTimeout(function(){
              btnSendContactMe.style.background = "red";
              btnSendContactMe.style.color = "#fff";
              btnSendContactMe.textContent = "ERROR | Check the inputs ❌";
          },2000);
         
  
          setTimeout(function(){
            formContact.reset();
            grecaptcha.reset();
            btnSendContactMe.style.background = "#f76c6c";
            btnSendContactMe.style.color = "#fff";
            btnSendContactMe.setAttribute("disabled", "");
            btnSendContactMe.style.cursor = "not-allowed";
            btnSendContactMe.textContent = "YOU NEED VALIDATE CAPTCHA";
          },6000);

        } else {
          btnSendContactMe.textContent = "SENDING.";

          setTimeout(function(){
              btnSendContactMe.textContent = "SENDING..";
          },500);
  
          setTimeout(function(){
              btnSendContactMe.textContent = "SENDING...";
          },1000);
  
          setTimeout(function(){             
              btnSendContactMe.style.background = "green";
              btnSendContactMe.style.color = "#fff";
              btnSendContactMe.textContent = "SENT SUCCESSFULLY ✔️";
          },2000);
          
              setTimeout(function(){
                formContact.reset();
                grecaptcha.reset();
                btnSendContactMe.style.background = "#f76c6c";
                btnSendContactMe.style.color = "#fff";
                btnSendContactMe.setAttribute("disabled", "");
                btnSendContactMe.style.cursor = "not-allowed";
                btnSendContactMe.textContent = "YOU NEED VALIDATE CAPTCHA";
              },6000);
        }

      }

    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

}

formContact.addEventListener("submit", sendMail);
