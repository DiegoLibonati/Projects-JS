const nav = document.querySelector(".nav_container");
const btnNav = document.getElementById("btn")

btnNav.addEventListener("click", ()=>{

    nav.classList.add("show-nav");
    window.scrollTo(0,0);

});

function scrollView(view){

    nav.classList.remove("show-nav");

    const headerHeight = 65.3;

        view.scrollIntoView(true);
        
        let scrolledY = window.scrollY
    
        if(scrolledY){
            window.scroll(0, scrolledY - headerHeight);
        }
        
    

}

const btnsList = document.querySelectorAll(".btnList, .subir");
const aboutView = document.querySelector(".about_container");
const homeView = document.querySelector(".home_container");
const servicesView = document.querySelector(".services_container");
const toursView = document.querySelector(".tours_container");

btnsList.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        const scrollBtn = e.currentTarget.dataset.id;

        console.log(scrollBtn)

            if (scrollBtn == "about"){
                scrollView(aboutView);
            } else if (scrollBtn == "services") {
                scrollView(servicesView);
            } else if (scrollBtn == "tours"){
                scrollView(toursView);
            } else {
                scrollView(homeView);
            }

    });
});


