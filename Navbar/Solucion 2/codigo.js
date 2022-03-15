const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){

    if(links.classList.contains("show-links") == true){
        links.classList.remove("show-links");
    } else{
        links.classList.add("show-links");
    }

    // haciendo: links.classList.toggle("show-links") -> hace automaticamente todo lo anterior.
});