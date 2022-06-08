const btnChangeImgs = document.querySelectorAll(".btnHomeImg");
const containerImgs = document.querySelectorAll(".home_img_container");
const containerTexts = document.querySelectorAll(".home_img_container_text");


const changeImg = (e) => {

    const i = e.currentTarget.id - 1;

    for (let y = 0; y < containerImgs.length; y++){

        if (containerImgs[y].classList.contains("show")){
            containerImgs[y].classList.remove("show");
            btnChangeImgs[y].classList.remove("colorBtn");
            containerTexts[y].classList.remove("showText");
        }

    }

    containerImgs[i].classList.add("show");
    btnChangeImgs[i].classList.add("colorBtn");
    containerTexts[i].classList.add("showText");

};

const applyColorToButton = () => {

    const positionOfI = getPositionOfClass();
    for (let i = 0; i < btnChangeImgs.length; i++){
        if ((positionOfI + 1) == btnChangeImgs[i].id){
            btnChangeImgs[i].classList.add("colorBtn");
        }
    }

}

const getPositionOfClass = () => {

    for (let i = 0; i < containerImgs.length; i++){
        if (containerImgs[i].classList.contains("show")){
            return i;
        }
    }

}

const carouselGalery = () => {

    let positionOfI = getPositionOfClass();
    positionOfI++;
    for (let y = 0; y < containerImgs.length; y++){

        if (containerImgs[y].classList.contains("show")){
            containerImgs[y].classList.remove("show");
            btnChangeImgs[y].classList.remove("colorBtn");
            containerTexts[y].classList.remove("showText");
        }

    }

    if (positionOfI >= containerImgs.length){
        positionOfI = 0;
        containerImgs[positionOfI].classList.add("show");
        btnChangeImgs[positionOfI].classList.add("colorBtn");
        containerTexts[positionOfI].classList.add("showText");
    } else {
        containerImgs[positionOfI].classList.add("show");
        btnChangeImgs[positionOfI].classList.add("colorBtn");
        containerTexts[positionOfI].classList.add("showText");
    }

}

btnChangeImgs.forEach(function(btnChangeImg){

    btnChangeImg.addEventListener("click", changeImg);

});

applyColorToButton();

setInterval(carouselGalery, 5000);

