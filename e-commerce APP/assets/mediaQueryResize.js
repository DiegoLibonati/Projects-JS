const mediaQuery1024Px = window.matchMedia("(min-width: 1024px)");
const iconsChanges = document.querySelectorAll(".externalI");
const iconsArrows = document.querySelectorAll(".downArrow");

const resizeChanges = () => {

    if (mediaQuery1024Px.matches){

        styleAddOrRemove(iconsChanges, "flex");
        styleAddOrRemove(iconsArrows, "none");
        navContainer.style.boxShadow = "0px 0px 0px 0px"

    } else {

        styleAddOrRemove(iconsChanges, "none");
        styleAddOrRemove(iconsArrows, "block");

    }

}

window.addEventListener("DOMContentLoaded", resizeChanges);
window.addEventListener("resize", resizeChanges);

const styleAddOrRemove = (arr, condicion) => {

    for (let i = 0; i < arr.length; i++){
        arr[i].style.display = `${condicion}`;
    }

}

