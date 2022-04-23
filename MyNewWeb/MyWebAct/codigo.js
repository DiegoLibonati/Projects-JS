// NAV
const btnOpenNav = document.getElementById("open");
const btnCloseNav = document.getElementById("close");
const navContainer = document.querySelector(".nav_container");
const navContainerPosition = navContainer.getBoundingClientRect();
const navYPosition = navContainerPosition.y;
const navContainerNav = document.querySelector(".nav_container_nav");
const navContainerLogo = document.querySelector(".nav_container_logo");
const colorsNav = "ABCDEF1234567890";

let hexColor;
let randomNumber;
let randomColor;
let navStatus = false;

// SECTION HOME
const btnSectionHomeMoreInfo = document.querySelector(".section_home_container_information_button");
const pSectionHomeMoreInfo = document.querySelector(".section_home_container_information_p");
const containerSectionHome = document.querySelector(".section_home_container_center");
const containerSectionHomeInformation = document.querySelector(".section_home_container_information");
const imgSectionHomeMoreInfo = document.querySelector(".section_home_container_information_img");
const dataText = ["WELCOME TO MY WORLD"];

let btnStatusMoreInfo = false;
let pHomeStatus = false;

// SECTION PORTFOLIO
const btnPortfolioOpenPython = document.querySelector(".section_portfolio_container_projects_python_div_button");
const btnPortfolioOpenJs = document.querySelector(".section_portfolio_container_projects_js_div_button");
const containerSectionPortfolioProjects = document.querySelector(".section_portfolio_container_projects");
const containerNewPython = document.querySelector(".section_portfolio_container_projects_python_open");
const containerNewPythonBtn = document.querySelector(".section_portfolio_container_projects_python_open_title_button");
const containerNewPythonDivs = document.querySelectorAll(".section_portfolio_container_projects_python_open_div_list_item_div");
const containerNewPythonPs = document.querySelectorAll(".vanish");

const containerNewJs = document.querySelector(".section_portfolio_container_projects_js_open");
const containerNewJsBtn = document.querySelector(".section_portfolio_container_projects_js_open_title_button");
const containerNewJsDivs = document.querySelectorAll(".section_portfolio_container_projects_js_open_div_list_item_div");
const containerNewJsPs = document.querySelectorAll(".vanish");

const containerNewPythonDivsH = document.querySelectorAll(".section_portfolio_container_projects_Hpython_description_container_list_item");
const containerNewPythonPsH = document.querySelectorAll(".section_portfolio_container_projects_Hpython_description_container_two_item");
const containerNewPythonCloseBtn = document.querySelector(".section_portfolio_container_projects_Hpython_title_button");
const containerNewPythonFatherH = document.querySelector(".section_portfolio_container_projects_Hpython");

const containerNewJsDivsH = document.querySelectorAll(".section_portfolio_container_projects_Hjs_description_container_list_item");
const containerNewJsPsH = document.querySelectorAll(".section_portfolio_container_projects_Hjs_description_container_two_item");
const containerNewJsCloseBtn = document.querySelector(".section_portfolio_container_projects_Hjs_title_button");
const containerNewJsFatherH = document.querySelector(".section_portfolio_container_projects_Hjs");

// General Configs
const queryMatch = window.matchMedia("(min-width:1024px)");
let queryMatches = false;


// NAV - Functions

// Open and Close NAV
btnOpenNav.addEventListener("click", navFunction);

function navFunction(){
    navContainerNav.classList.add("show-nav");
    btnOpenNav.style.display = "none";
    btnCloseNav.style.display = "block";

    navStatus = true;

    btnCloseNav.addEventListener("click", ()=>{
        navContainerNav.classList.remove("show-nav");
        btnOpenNav.style.display = "block";
        btnCloseNav.style.display = "none";

        navStatus = false;
    })
}

// Rainbow Colors NAV

function rainbowNav(){

    hexColor = "#"
            
    for (i = 0; i < 6; i++){
        randomNumber = Math.floor(Math.random() * colorsNav.length);
    
        randomColor = colorsNav.charAt(randomNumber);
    
        hexColor += randomColor;
    }

    if (queryMatches === false){

        if (navStatus === false){
            navContainerLogo.style.border = `3px solid ${hexColor}`;
            navContainerLogo.style.backgroundColor = "rgba(0, 0, 0, 0.549)";
            navContainer.style.backgroundColor = "";
            navContainer.style.border = `none`;
        } else {
            navContainer.style.border = `3px solid ${hexColor}`;
            navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.549)";
            navContainerLogo.style.backgroundColor = "";
            navContainerLogo.style.border = `none`;
        }

    } else {
        navContainer.style.border = `3px solid ${hexColor}`;
        navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.549)";
        navContainerLogo.style.border = `none`;
    }



    
}

setInterval(rainbowNav, 1000);

// SECTION HOME - FUNCTIONS

btnSectionHomeMoreInfo.addEventListener("click", sectionHomeFunctionMoreInfo);

function sectionHomeFunctionMoreInfo(){

    if (queryMatches === false){


        if (pHomeStatus){
            pSectionHomeMoreInfo.classList.remove("show-section-home-p");
            containerSectionHome.classList.remove("show-section-home-p-height");
            btnSectionHomeMoreInfo.innerHTML =  `<i class="fa-solid fa-angle-down"></i>`;
            pHomeStatus = false;
        } else {
            pSectionHomeMoreInfo.classList.add("show-section-home-p");
            containerSectionHome.classList.add("show-section-home-p-height");
            btnSectionHomeMoreInfo.innerHTML =  `<i class="fa-solid fa-angle-up"></i>`;
            pHomeStatus = true;
        }

    } else {
        pSectionHomeMoreInfo.classList.add("show-section-home-p-H");
        btnSectionHomeMoreInfo.classList.add("show-section-home-btn");
        imgSectionHomeMoreInfo.classList.add("blur-img");

        btnStatusMoreInfo = true;

        if (btnStatusMoreInfo == true){
            setTimeout(()=>{
                pSectionHomeMoreInfo.classList.remove("show-section-home-p-H");
                btnSectionHomeMoreInfo.classList.remove("show-section-home-btn");
                imgSectionHomeMoreInfo.classList.remove("blur-img");
            }, 5000)
        }

    }

}

// SECTION PORTFOLIO - FUNCTIONS

btnPortfolioOpenPython.addEventListener("click", openPythonPortfolio);

function openPythonPortfolio(){

    if (queryMatches == false){
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewPython.classList.add("show-display-projects");

        setTimeout(function(){
            containerNewPython.style.opacity = "1";
        })

        containerNewPythonBtn.addEventListener("click",()=>{
            containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
            containerNewPython.classList.remove("show-display-projects");
            containerNewPython.style.opacity = "0";
        });
    } else {
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewPythonFatherH.classList.add("show");

        setTimeout(function(){
            containerNewPythonFatherH.style.opacity = "1";
        })

    }

}

containerNewPythonDivs.forEach(function(btn){
    btn.addEventListener("click", (e)=>{

        const divBtn =  e.currentTarget.children[1]

        divBtn.classList.toggle("show-display-p");
        btn.classList.toggle("show-border");

        containerNewPythonPs.forEach(function(p){
            if (p !== divBtn){
                p.classList.remove("show-display-p");
            }
        });


    });
})

btnPortfolioOpenJs.addEventListener("click", openJsPortfolio);

function openJsPortfolio(){

    if (queryMatches == false){
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewJs.classList.add("show-display-projects");

        setTimeout(function(){
            containerNewJs.style.opacity = "1";
        })

        containerNewJsBtn.addEventListener("click",()=>{
            containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
            containerNewJs.classList.remove("show-display-projects");
            containerNewJs.style.opacity = "0";
        });
    } else {
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewJsFatherH.classList.add("show");

        setTimeout(function(){
            containerNewJsFatherH.style.opacity = "1";
        })
    }

}

containerNewJsDivs.forEach(function(btn){
    btn.addEventListener("click", (e)=>{

        const divBtn =  e.currentTarget.children[1]

        divBtn.classList.toggle("show-display-p");
        btn.classList.toggle("show-border");

        containerNewJsPs.forEach(function(p){
            if (p !== divBtn){
                p.classList.remove("show-display-p");
            }
        });


    });
})

// SECTION PORTFOLIO BIG SCREEN - FUNCTIONS
containerNewPythonDivsH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        
        let textRes = e.currentTarget.outerText;

        btn.classList.add("active");

        for (i = 0; i < containerNewPythonPsH.length; i++){
            if (textRes == containerNewPythonPsH[i].id){
    
                if (containerNewPythonPsH[i].classList.contains("show")){
                    containerNewPythonPsH[i].classList.remove("show");
                    btn.classList.remove("active");
                } else{
                    containerNewPythonPsH[i].classList.add("show");
                }
                
            } 
        }  
        
        let textResTwo = btn.parentElement.parentElement.parentElement.children[1].children;
        


        for (i = 0; i < textResTwo.length; i++){
            if (textResTwo[i].id !== textRes){
                textResTwo[i].classList.remove("show");
            }
        }

        for (i = 0; i < containerNewPythonDivsH.length; i++){
            if (containerNewPythonDivsH[i] !== btn){
                containerNewPythonDivsH[i].classList.remove("active");
            }
        }
    });
});

containerNewPythonCloseBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
    containerNewPythonFatherH.classList.remove("show");
    containerNewPythonFatherH.style.opacity = "0";

})

containerNewJsDivsH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        
        let textRes = e.currentTarget.outerText;

        btn.classList.add("active");

        for (i = 0; i < containerNewJsPsH.length; i++){
            if (textRes == containerNewJsPsH[i].id){
    
                if (containerNewJsPsH[i].classList.contains("show")){
                    containerNewJsPsH[i].classList.remove("show");
                    btn.classList.remove("active");
                } else{
                    containerNewJsPsH[i].classList.add("show");
                }
                
            } 
        }  
        
        let textResTwo = btn.parentElement.parentElement.parentElement.children[1].children;
        


        for (i = 0; i < textResTwo.length; i++){
            if (textResTwo[i].id !== textRes){
                textResTwo[i].classList.remove("show");
            }
        }

        for (i = 0; i < containerNewJsDivsH.length; i++){
            if (containerNewJsDivsH[i] !== btn){
                containerNewJsDivsH[i].classList.remove("active");
            }
        }
    });
});

containerNewJsCloseBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
    containerNewJsFatherH.classList.remove("show");
    containerNewJsFatherH.style.opacity = "0";

})

// General Stuff

document.addEventListener("DOMContentLoaded", ()=>{

    if (queryMatch.matches){
        queryMatches = true;

        btnSectionHomeMoreInfo.innerHTML = "MORE INFO";
    } else  {
        queryMatches = false;
    }

    function typeWriter(text, i, fnCallback) {

        if (i < (text.length)) {
    
         document.querySelector(".section_home_container_title_h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
    
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
    
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
    
       function StartTextAnimation(i) {
    
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 20000);
         }
    
        if (i < dataText[i].length) {
    
         typeWriter(dataText[i], 0, function(){
         });
        }
      }
    
      StartTextAnimation(0);

});

window.addEventListener("resize", ()=>{


        if (queryMatch.matches){
            queryMatches = true;
    
            btnOpenNav.style.display = "none";
            btnCloseNav.style.display = "none";
            navContainerLogo.style.backgroundColor = "";
    
            btnSectionHomeMoreInfo.innerHTML = "MORE INFO";
            pSectionHomeMoreInfo.classList.remove("show-section-home-p");
            containerSectionHome.classList.remove("show-section-home-p-height");
            pSectionHomeMoreInfo.classList.remove("show-section-home-p-H");
            btnSectionHomeMoreInfo.classList.remove("show-section-home-btn");
            imgSectionHomeMoreInfo.classList.remove("blur-img");

            containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
            containerNewPython.classList.remove("show-display-projects");
            containerNewJs.classList.remove("show-display-projects");
            containerNewPythonFatherH.classList.remove("show");
            containerNewJsFatherH.classList.remove("show");
    
        } else  {

            queryMatches = false;

            if (navStatus === false){
                btnOpenNav.style.display = "block";
                btnCloseNav.style.display = "none";
            } else {
                btnOpenNav.style.display = "none";
                btnCloseNav.style.display = "block";
            }
    
            btnSectionHomeMoreInfo.innerHTML =  `<i class="fa-solid fa-angle-down"></i>`;
    
        }





})
