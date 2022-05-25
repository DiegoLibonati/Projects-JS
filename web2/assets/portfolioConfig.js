const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const arrayOfTechnologies = document.querySelectorAll(".portfolio_option");

let currentPositionOfI = 0;

const removeClass = () =>{

    for (let i = 0; i < arrayOfTechnologies.length; i++){

        if (arrayOfTechnologies[i].classList.contains("current-option")){
            arrayOfTechnologies[i].classList.remove("current-option");
        }

    }

}

const prevTechnologie = (e) => {

    removeClass()
    arrayOfTechnologies[currentPositionOfI].style.transform = "translateX(200%)"
    currentPositionOfI--

    if (currentPositionOfI < 0){

        for (let i = 0; i < arrayOfTechnologies.length; i++){
            arrayOfTechnologies[i].style.transform = "translateX(-200%)"
        }

        currentPositionOfI = arrayOfTechnologies.length - 1;
        arrayOfTechnologies[currentPositionOfI].style.transform = "translateX(0%)"
        arrayOfTechnologies[currentPositionOfI].classList.add("current-option");

    } else {

        arrayOfTechnologies[currentPositionOfI].style.transform = "translateX(0%)"
        arrayOfTechnologies[currentPositionOfI].classList.add("current-option");
    }

}

const nextTechnologie = (e) => {

    removeClass()
    arrayOfTechnologies[currentPositionOfI].style.transform = "translateX(-200%)"
    currentPositionOfI++

    if (currentPositionOfI > arrayOfTechnologies.length - 1){

        for (let i = 0; i < arrayOfTechnologies.length; i++){
            arrayOfTechnologies[i].style.transform = "translateX(200%)"
        }

        currentPositionOfI = 0;
        arrayOfTechnologies[currentPositionOfI].style.transform = "translateX(0%)"
        arrayOfTechnologies[currentPositionOfI].classList.add("current-option");

    } else {

        arrayOfTechnologies[currentPositionOfI].style.transform = "translateX(0%)"
        arrayOfTechnologies[currentPositionOfI].classList.add("current-option");
    }


}


leftButton.addEventListener("click", prevTechnologie);
rightButton.addEventListener("click", nextTechnologie);