const btnsLi = document.querySelectorAll(".portfolio-item-title");

const openInformationOfLi = (e) => {

    e.preventDefault()

    let hasClassOpenInformationLi =  e.currentTarget.parentElement.children[1].classList.contains("open-information-li");

    if (hasClassOpenInformationLi){
        e.currentTarget.parentElement.children[1].classList.remove("open-information-li");
        e.currentTarget.children[1].setAttribute("class", "fa-solid fa-chevron-down")
    } else{
        e.currentTarget.parentElement.children[1].classList.add("open-information-li");
        e.currentTarget.children[1].setAttribute("class", "fa-solid fa-chevron-up")
    }


}

btnsLi.forEach(function (btnLi){

    btnLi.addEventListener("click", openInformationOfLi);

});