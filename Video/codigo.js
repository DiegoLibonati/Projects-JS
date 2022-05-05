const video = document.getElementById("myVideo");
const btns = document.querySelectorAll(".button");



btns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        const hola = e.currentTarget.dataset.id;

            if (hola == "play"){
                video.play();
            } else {
                video.pause();
            }
    });
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", ()=>{
    preloader.classList.add("hide_preloader");
});