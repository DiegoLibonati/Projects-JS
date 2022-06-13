const barsContainer = document.querySelector(".header_container_bars");
const mainContainer = document.querySelector(".main_container");

barsContainer.addEventListener("click", () => {

    barsContainer.classList.toggle("barsTransition");
    mainContainer.classList.toggle("rotateMain");
    document.body.scrollTo(0, document.body.scrollHeight); // Scroll to bottom
    document.body.classList.toggle("overflowDisabled");

});