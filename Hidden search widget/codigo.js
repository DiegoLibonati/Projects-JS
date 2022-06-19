const input = document.querySelector(".inputClass");
const buttonPressed = document.querySelector(".article_container button");

const openInput = () => {

    input.classList.toggle("openInput");

}

buttonPressed.addEventListener("click", openInput);