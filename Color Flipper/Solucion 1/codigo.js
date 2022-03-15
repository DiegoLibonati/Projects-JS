// let colors = ["red", "blue", "yellow"];

let hexLetters = "0123456789ABCDEF";

const btn = document.getElementById("hola")
const cont = document.querySelector(".contenedor_div")
const color = document.querySelector(".color")



btn.addEventListener('click', () =>{
// let random = Math.floor(Math.random() * colors.length);
hexColor = "#";

for (let i = 0; i<=5; i++){
    hexColor += hexLetters.charAt(Math.floor(Math.random() * hexLetters.length))
}

document.body.style.backgroundColor = hexColor;

let nameColor = hexColor;

cont.innerHTML = `Background Color: ${nameColor}`;

});

