let sendBtn = document.getElementById("btnEnviar");
let idName = document.getElementById("nombre");
let idMail = document.getElementById("correo");
let idMessage = document.getElementById("mensaje");

sendBtn.addEventListener("click", ()=>{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "diego.libonati1998@gmail.com",
        Password : "", // por temas de seguridad no subo pass.
        To : "diego.libonati1998@gmail.com",
        From : idMail.value,
        Subject : idName.value,
        Body : idMessage.value
    }).then(
        alert("Gracias, se envio con exito.")
    );
});