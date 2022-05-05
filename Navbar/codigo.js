const navContainer = document.querySelector(".header_nav_container");

const btnOpenNav = document.getElementById("openNav");
const btnCloseNav = document.getElementById("closeNav");


btnOpenNav.addEventListener("click", ()=>{

    navContainer.classList.add("show-nav");
    btnOpenNav.classList.add("noshow-btn");
    btnCloseNav.style.display = "block";

});

btnCloseNav.addEventListener("click", ()=>{

    navContainer.classList.remove("show-nav");
    btnOpenNav.classList.remove("noshow-btn");
    btnCloseNav.style.display = "none";

});