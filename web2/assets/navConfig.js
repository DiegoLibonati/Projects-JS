const containerNav = document.querySelector(".nav_container_list");
const containerNavLi = document.querySelectorAll(".nav_container_list-li");

const btnOpenNav = document.getElementById("openNav");
const btnCloseNav = document.getElementById("closeNav");

// Functions

const openNav = () => {

  containerNav.classList.add("show-nav");

  btnCloseNav.style.display = "flex";
  btnOpenNav.style.display = "none";
  btnOpenNav.style.opacity = "0";

  setTimeout(()=> {

    btnCloseNav.style.opacity = "1";

  },300);

  setTimeout(()=>{
    for (let i = 0; i < containerNavLi.length; i++){
      containerNavLi[i].classList.add("show-li-height");
    }
  }, 300);



}

const closeNav = () => {

  containerNav.classList.remove("show-nav");

  btnCloseNav.style.display = "none";
  btnOpenNav.style.display = "flex";
  btnCloseNav.style.opacity = "0";

  setTimeout(()=> {

    btnOpenNav.style.opacity = "1";

  },300);

  for (let i = 0; i < containerNavLi.length; i++){
    containerNavLi[i].classList.remove("show-li-height");
  }

}

// Add event listeners

btnOpenNav.addEventListener("click", openNav)
btnCloseNav.addEventListener("click", closeNav)