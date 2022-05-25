const scrollLinks = document.querySelectorAll(".nav_container_list-li");
const containerSections = document.querySelectorAll(".section");

let mediaQuery1023Px = window.matchMedia("(max-width:1023px)");
let id;
let navHeight = 100;

const autoScrollToSection = (e) => {

  e.preventDefault();

  // Se remueven todos los efectos de underline en los li a
  for (let i = 0; i < containerNavLi.length; i++){
    containerNavLi[i].classList.remove("show-underline-effect");
  }

  // Se agrega el efecto underline al li a que se clickeo
  e.currentTarget.classList.add("show-underline-effect");
  
  // Por debajo de los 1023 px, se remueve la list si esta abierta
  if (mediaQuery1023Px.matches){

    for (let i = 0; i < containerNavLi.length; i++){
      containerNavLi[i].classList.remove("show-li-height");
    }    
    containerNav.classList.remove("show-nav");
    btnCloseNav.style.display = "none";
    btnOpenNav.style.display = "flex";
    btnCloseNav.style.opacity = "0";

    setTimeout(()=> {

      btnOpenNav.style.opacity = "1";
  
    },300);

  }

  // Se selecciona el ID de los li A
  id = e.currentTarget.href.split("#").pop();

  // Se recorre los sections y si es igual al id, obtiene el offstop del section y se dirige al mismo
  for (let i = 0; i < containerSections.length; i++){

    if (id === containerSections[i].id){

      const sectionTop = containerSections[i].offsetTop - navHeight;

      window.scrollTo({
        left: 0, top: sectionTop,
      })

    }

  }

}

// Se agrega un addeventlistener a cada scrollLink
scrollLinks.forEach(function(scrollLink){

  scrollLink.addEventListener("click", autoScrollToSection);

});
