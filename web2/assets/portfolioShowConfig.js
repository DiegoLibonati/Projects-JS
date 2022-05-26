const btnsOpenPortfolioProjects = document.querySelectorAll(".portfolio_option button");
const containerPortfolio = document.querySelector(".show-portfolio");
const btnsClosePortfolio = document.querySelectorAll(".portfolio-header i");
const containerContentPortfolio = document.querySelectorAll(".portfolio-center");

const openPortfolioWindow = (e) =>{

    containerPortfolio.classList.add("open-portfolio");
    
    setTimeout(() => {
        containerPortfolio.style.transform = "translateX(0%)"
        containerPortfolio.style.transition = "transform 1s"
    }, 200);

    document.body.style.overflowY = "hidden";

    let idParentElementOfButton = e.currentTarget.parentElement.id;

    for (let i = 0; i < containerContentPortfolio.length; i++){

        if (idParentElementOfButton === containerContentPortfolio[i].id){
            containerContentPortfolio[i].style.display = "flex";
        }

    }

}

const closePortfolioWindow = () => {

    setTimeout(() => {
        containerPortfolio.style.transform = "translateX(-200%)"
        containerPortfolio.style.transition = "transform 1s"
    }, 200);

    setTimeout(() => {
        containerPortfolio.classList.remove("open-portfolio");

        document.body.style.overflowY = "";

        for (let i = 0; i < containerContentPortfolio.length; i++){
    
            containerContentPortfolio[i].style.display = "none";
    
        }
    }, 500);
    


}

btnsClosePortfolio.forEach(function(btnClosePortfolio){

    btnClosePortfolio.addEventListener("click", closePortfolioWindow);

});

btnsOpenPortfolioProjects.forEach(function(btnOpenPortfolioProjects){

    btnOpenPortfolioProjects.addEventListener("click", openPortfolioWindow);

});

