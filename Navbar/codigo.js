const btn = document.getElementById("buttonNav");
const nav = document.querySelector(".list");
const btnRotate = document.querySelector(".boton")

btn.addEventListener("click", ()=>{

    let hasClass = nav.classList.contains("show_menu");
    let hasClassTwo = btnRotate.classList.contains("rotate_button");

    if (hasClass == true && hasClassTwo == true){
        nav.classList.remove("show_menu")
        btnRotate.classList.remove("rotate_button")
    } else{
        nav.classList.add("show_menu");
        btnRotate.classList.add("rotate_button")
    }    
});