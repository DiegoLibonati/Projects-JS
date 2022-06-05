const sliderContainer = document.querySelector(".brands_container_article");
const slider = document.querySelector(".brands_container_article_list");
const sliderItem = document.querySelector(".brands_container_article_list li");

let clicked = false;
let xAxis;
let x;

sliderContainer.addEventListener("mouseup", () => {

    sliderContainer.style.cursor = "grab";

});

sliderContainer.addEventListener("mousedown", (e) => {

    clicked = true;
    xAxis = e.offsetX - slider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";

});

window.addEventListener("mouseup", () => {
    clicked = false;
})

sliderContainer.addEventListener("mousemove", (e) => {

    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;

    checkSizeDesktop();
});


sliderContainer.addEventListener("touchstart", (e) => {

    clicked = true;
    xAxis = e.touches[0].pageX - slider.offsetLeft;

});

window.addEventListener("touchend", () => {
    clicked = false;
})

sliderContainer.addEventListener("touchmove", (e) => {

    if (!clicked) return;
    e.preventDefault();

    x = e.touches[0].pageX;
    slider.style.left = `${x - xAxis}px`;

    checkSizeMobile();

});

const checkSizeDesktop = () => {

    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0){
        slider.style.left = `0px`;
    } else if (sliderIn.right - sliderContainerOut.right){
        slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`
    }

}

const checkSizeMobile = () => {

    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();
    let sliderItemPosition = sliderItem.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0){
        slider.style.left = `0px`;
    } else if ((parseInt(slider.style.left) * -1) > sliderIn.width - sliderItemPosition.width){
        slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`;
    }

}