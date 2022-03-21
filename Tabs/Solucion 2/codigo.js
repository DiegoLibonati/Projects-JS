const btns = document.querySelectorAll(".tab-btn"); 
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    // console.log(e.target.dataset.id)
    const id = e.target.dataset.id;

    if (id){ // If ID existe y no es undefined. Comprobar que estoy clickeando en los botones y no en el article
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active"); // Remueve el bg
            e.target.classList.add("active"); // Al clickear en u nbutton remueve y agrega el borde mas el bg que esta active
        });

        // hide other articles
        articles.forEach(function(article){
            article.classList.remove("active");
            const element = document.getElementById(id);

            element.classList.add("active");
        });
    }

    });