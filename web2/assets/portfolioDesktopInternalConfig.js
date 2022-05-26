const btnsClosePortfolioDesktop = document.querySelectorAll(".portfolio_desktop_center_header i");
const btnsOpenPortfolioDesktop = document.querySelectorAll(".portfolio_option button");
const btnsListPortfolioDesktop = document.querySelectorAll(".portoflio_desktop_center_menu_list li");
const informationAboutLiClicked = document.querySelectorAll(".portfolio-information-desktop");
const containerOfTechProjects = document.querySelectorAll(".portfolio_desktop_center");


const openPortfolioDesktop = (e) => {

    let idOfContainerFromButtonClicked = e.currentTarget.parentElement.id;

    for (let i = 0; i < containerOfTechProjects.length; i++){

        if (idOfContainerFromButtonClicked === containerOfTechProjects[i].id.substring(1)){
            containerOfTechProjects[i].style.display = "flex";
        }

    }

}

const closePortfolioDesktop = (e) => {

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

    let idFromLi = e.currentTarget.outerText

    for (let i = 0; i < informationAboutLiClicked.length; i++){

        if (idFromLi === informationAboutLiClicked[i].id){

            if (informationAboutLiClicked[i].classList.contains("show-board-desktop")){

                informationAboutLiClicked[i].classList.remove("show-board-desktop");

            } else{
                informationAboutLiClicked[i].classList.add("show-board-desktop");
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