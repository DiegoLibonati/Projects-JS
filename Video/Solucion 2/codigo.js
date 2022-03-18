const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".vide-container");

btn.addEventListener("click", ()=>{
    if (!btn.classList.contaions("slide")){
        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    };
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", ()=>{
    preloader.classList.add("hide_preloader");
});