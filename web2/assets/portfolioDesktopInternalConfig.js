const btnsClosePortfolioDesktop = document.querySelectorAll(".portfolio_desktop_center_header i");
const btnsOpenPortfolioDesktop = document.querySelectorAll(".portfolio_option button");
const btnsListPortfolioDesktop = document.querySelectorAll(".portoflio_desktop_center_menu_list li");
const informationAboutLiClicked = document.querySelectorAll(".portfolio-information-desktop");
const containerOfTechProjects = document.querySelectorAll(".portfolio_desktop_center");
const containerListPortfolioDesktop = document.querySelectorAll(".portoflio_desktop_center_menu_list");
const boardInformation = document.querySelectorAll(".board_information");


const openPortfolioDesktop = (e) => {

    let idOfContainerFromButtonClicked = e.currentTarget.parentElement.id;

    for (let i = 0; i < containerOfTechProjects.length; i++){

        if (idOfContainerFromButtonClicked === containerOfTechProjects[i].id.substring(1)){
            containerOfTechProjects[i].style.display = "flex";
        }

    }

}

const closePortfolioDesktop = (e) => {

    for (let i = 0; i < btnsListPortfolioDesktop.length; i++){
        let item = btnsListPortfolioDesktop[i];
        item.classList.remove("li-background");
        item.children[0].setAttribute("class", "fa-solid fa-chevron-right");
    }

    for (let i = 0; i < informationAboutLiClicked.length; i++){

        let list = informationAboutLiClicked[i].parentElement.parentElement.children[0];
        let board = informationAboutLiClicked[i].parentElement;

        informationAboutLiClicked[i].classList.remove("show-board-desktop");
        list.classList.remove("reduce-width-list");
        board.classList.remove("show-board-information");

    }

    setTimeout(() => {
        containerPortfolio.style.transform = "translateX(-200%)"
        containerPortfolio.style.transition = "transform 1s"
    }, 200);

    setTimeout(() => {
        containerPortfolio.classList.remove("open-portfolio");

        document.body.style.overflowY = "";

        for (let i = 0; i < containerOfTechProjects.length; i++){
            containerOfTechProjects[i].style.display = "none";
        }
    
    }, 500);


}

const openBoardInformation = (e) => {

    for (let i = 0; i < btnsListPortfolioDesktop.length; i++){
        let item = btnsListPortfolioDesktop[i];
        item.classList.remove("li-background");
        item.children[0].setAttribute("class", "fa-solid fa-chevron-right");
    }

    let idFromLi = e.currentTarget.outerText
    let itemChevron = e.currentTarget.children[0];

    for (let i = 0; i < informationAboutLiClicked.length; i++){
        if (idFromLi === informationAboutLiClicked[i].id){
           let list = informationAboutLiClicked[i].parentElement.parentElement.children[0];
           let board = informationAboutLiClicked[i].parentElement;

            if (informationAboutLiClicked[i].classList.contains("show-board-desktop")){

                informationAboutLiClicked[i].classList.remove("show-board-desktop");
                itemChevron.setAttribute("class", "fa-solid fa-chevron-right");
                list.classList.remove("reduce-width-list");
                board.classList.remove("show-board-information");


            } else{

                list.classList.add("reduce-width-list");
                board.classList.add("show-board-information");
                e.currentTarget.classList.add("li-background")
                informationAboutLiClicked[i].classList.add("show-board-desktop");
                itemChevron.setAttribute("class", "fa-solid fa-chevron-left")
            }
            

        }

        if (informationAboutLiClicked[i].id !== idFromLi){
            informationAboutLiClicked[i].classList.remove("show-board-desktop");
        }

    }

}

btnsClosePortfolioDesktop.forEach(function (btnClosePortfolioDesktop){

    btnClosePortfolioDesktop.addEventListener("click", closePortfolioDesktop);

})

btnsOpenPortfolioDesktop.forEach(function (btnOpenPortfolioDesktop){

    btnOpenPortfolioDesktop.addEventListener("click", openPortfolioDesktop);

})

btnsListPortfolioDesktop.forEach(function (btnsListPortfolioDesktop){

    btnsListPortfolioDesktop.addEventListener("click", openBoardInformation);

})