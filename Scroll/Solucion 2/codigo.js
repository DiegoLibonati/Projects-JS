// Fecha dinamica
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();


// close links. Dinamic Nav

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    // linksContainer.classList.toggle("show-links");
    // Height de 0 pq estan ocultos. Height = 0;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    // Height de la UL que se altera gracias a que agregamos mas li
    const linksHeight = links.getBoundingClientRect().height;


        if (containerHeight === 0){ // Si esta oculto el nav ....
            linksContainer.style.height = `${linksHeight}px`;
        } else{
            linksContainer.style.height = 0; // Nav vuelve a 0.
        }

        // EN LA MEDIA QUERY PARA BIG SCREEN hay que agregar height: auto !important; links-containers
});

// Fix navbar. Cuando pasa la altura del navbar se transforme en fixed.

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener(`scroll`, function(){

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    } else{
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500){
        topLink.classList.add("show_link_top")
    } else{
        topLink.classList.remove("show_link_top")
    }


});


//smooth

// In html: scroll-behavior: smooth;

// in JS: 
// IN HTML: a los a que hacen scroll tienen la clase: scroll-link
const scrollLinks = document.querySelector(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefualt(); // Cancela el scroll.
        

        // Nav a x spot

        const id = e.currentTarget.getAttribute(`href`).slice(1); // No cuentes el # empeza desde el index1 ejemplo: de id = #home empeza por h -> id = home
        const element = document.getElementById(id);

        // calculate the heights:
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        // Sirve cuando el nav esta fixed
        let position = element.offsetTop - navHeight; // Posicion de los sections

        if (!fixedNav){ // Si esta en static, si el navfixed es FALSE
            position = position - navHeight // Big screen. El nav no fixed.
        }

        if (navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0, top:position,
        })

        // Ocultar los links cuando te redirigas
        links.linksContainer.style.height = 0;

    });
});