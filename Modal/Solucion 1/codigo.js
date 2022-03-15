const btnModal = document.getElementById("openModal");
const btnCloseModal = document.getElementById("closeNewModal");
const newModal =  document.querySelector(".section-items2");
const beforeModal = document.querySelector(".section-items")
const bodyBg = document.querySelector(".body");

btnModal.addEventListener("click", ()=>{

    newModal.classList.toggle("show-window");
    beforeModal.classList.toggle("vanish-window")
    bodyBg.classList.toggle("bg-blur")

});

btnCloseModal.addEventListener("click", ()=>{

    newModal.classList.toggle("show-window");
    beforeModal.classList.toggle("vanish-window")
    bodyBg.classList.toggle("bg-blur")

});