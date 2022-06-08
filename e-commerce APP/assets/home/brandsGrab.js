const sliderContainer = document.querySelector(".brands_container_article");
const slider = document.querySelector(".brands_container_article_list");
const sliderItem = document.querySelector(".brands_container_article_list li");

let arrayOfImgs = ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
                    "https://i.pinimg.com/originals/a1/5c/34/a15c34b095a9dc0427869f9a37341e4a.jpg",
                    "https://img.freepik.com/free-vector/jewelry-logo-design-template-ring-icon_18099-968.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c6e5293e-cae6-4376-b190-5e9359103804.__CR0,0,1200,360_PT0_SX600_V1___.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acer_Logo.svg/2560px-Acer_Logo.svg.png",
                    ];

let clicked = false;
let xAxis;
let x;
let wallLeft = false;
let wallRight = false;
let arrayClone = [];


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
    arrayClone = [];
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
    arrayClone = [];
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
    let sliderItemPosition = sliderItem.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0){
        wallLeft = true;
        cloneHtml();
    } else if ((parseInt(slider.style.left) * -1) > sliderIn.width - sliderItemPosition.width - 700){
        wallRight = true;
        cloneHtml();
    }


}

const checkSizeMobile = () => {

    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();
    let sliderItemPosition = sliderItem.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0){
        wallLeft = true;
        cloneHtml();
    } else if ((parseInt(slider.style.left) * -1) > sliderIn.width - sliderItemPosition.width - 1000){
        wallRight = true;
        cloneHtml();
    }

}

const cloneHtml = () => {

    for (let i = 0; i < arrayOfImgs.length; i++){
        const newNode = document.createElement("li");
        const newImg = document.createElement("img");
        
        newImg.setAttribute("src", `${arrayOfImgs[i]}`);
        newImg.setAttribute("alt", `brand logo`);

        newNode.appendChild(newImg);

        if (!(arrayClone.length >= 5)){
            arrayClone.push(newNode);
        }

    }

    let slider2 = document.querySelector(".brands_container_article_list");
 

    if (wallRight === true && wallLeft === false){

        for (let i = 0; i < arrayClone.length; i++){
            slider.insertAdjacentElement("beforeend", arrayClone[i]);
            slider.style.gridTemplateColumns = `repeat(${slider.children.length}, 1fr)`;
            slider.style.left = `-525px`;
        }

        if (slider2.children.length > 50){
            for (let i = 0; i < 5; i++){
                slider2.removeChild(slider2.children[i]);
            }
        }
    }


    if (wallRight === false && wallLeft === true){

        for (let i = (arrayClone.length - 1); i >= 0; i--){
            slider.insertBefore(arrayClone[i], slider.children[0]);
            slider.style.gridTemplateColumns = `repeat(${slider.children.length}, 1fr)`;
            slider.style.left = `-900px`;
        }

        if (slider2.children.length > 50){
            for (let i = 25; i >= 20; i--){
                slider2.removeChild(slider2.children[i]);
            }
        }

    }

    wallLeft = false;
    wallRight = false;
}

const moveBrands = () => {

    let sliderTwo = document.querySelector(".brands_container_article_list");
    let sliderIn = sliderTwo.getBoundingClientRect();


    if (mediaQuery1024Px.matches){
        sliderTwo.style.left = `${sliderIn.left -= 900}px`;
        checkSizeDesktop();
    } else {
        sliderTwo.style.left = `${sliderIn.left -= 300}px`;
        checkSizeMobile();
    }
}

setInterval(moveBrands, 5000)