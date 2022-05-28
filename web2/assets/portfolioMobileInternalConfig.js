const btnsLi = document.querySelectorAll(".portfolio-item-title");

const openInformationOfLi = (e) => {

    e.preventDefault()

    let containerPortfolio =  e.currentTarget.parentElement.children[1];
    let hasClassOpenInformationLi =  containerPortfolio.classList.contains("open-information-li");

    if (hasClassOpenInformationLi){

        setTimeout(() => {
            containerPortfolio.classList.remove("open-information-li");
        }, 100)

        setTimeout(() => {
            containerPortfolio.style.display = "none";
        }, 1000)

        e.currentTarget.children[1].setAttribute("class", "fa-solid fa-chevron-down")
        
    } else{

        containerPortfolio.style.display = "flex";

        setTimeout(() => {
            containerPortfolio.classList.add("open-information-li");
        }, 100)

        e.currentTarget.children[1].setAttribute("class", "fa-solid fa-chevron-up")
    }

    for (let i = 0; i < btnsLi.length; i++){
        let item = btnsLi[i].parentElement.children[1];
        let itemChevron = btnsLi[i].children[1];
        if (btnsLi[i].parentElement.children[1] != containerPortfolio){

            setTimeout(() => {
                item.classList.remove("open-information-li")
            }, 100)
    
            setTimeout(() => {
                item.style.display = "none";
            }, 1000)

            itemChevron.setAttribute("class", "fa-solid fa-chevron-down")
        }

    }


}

btnsLi.forEach(function (btnLi){

    btnLi.addEventListener("click", openInformationOfLi);

});