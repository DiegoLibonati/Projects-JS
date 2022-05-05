const btnMenu = document.getElementById("btnMenu");
const btnClose = document.getElementById("btnClose");
const Menu = document.querySelector(".nav-container");


btnMenu.addEventListener("click", ()=>{

    hasClass = Menu.classList.contains("nav-show");

    if (hasClass){
        Menu.classList.remove("nav-close");
        Menu.classList.remove("nav-show");
    } else{
        Menu.classList.remove("nav-close");
        Menu.classList.add("nav-show");
    }

});


btnClose.addEventListener("click", () =>{

    hasClass = Menu.classList.contains("nav-show");

    if (hasClass){
        Menu.classList.add("nav-close")
        Menu.classList.remove("nav-show");
    } 

});
