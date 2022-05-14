// NAV
const btnOpenNav = document.getElementById("open");
const btnCloseNav = document.getElementById("close");
const navContainer = document.querySelector(".nav_container");
const navContainerPosition = navContainer.getBoundingClientRect();
const navYPosition = navContainerPosition.y;
const navContainerNav = document.querySelector(".nav_container_nav");
const navContainerLogo = document.querySelector(".nav_container_logo");
const navLinks = document.querySelectorAll(".nav_link");
const colorsNav = "ABCDEF1234567890";
const itemINav = document.querySelectorAll(".nav_container_nav_list_item");
const idNavHomeLi = document.getElementById("homesection");
const idNavAboutMeLi = document.getElementById("aboutmesection");
const idNavPortfolioLi = document.getElementById("portfoliosection");
const idNavContactMeLi = document.getElementById("contactmesection");

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
const arrayImg = ["templates/DiegoLibonati.png", "templates/mia2.png", "templates/mia3.png", "templates/mia4.png"];

let btnStatusMoreInfo = false;
let pHomeStatus = false;

imgSectionHomeMoreInfo.src = arrayImg[0];
let y = 0;

// SECTION ABOUTME
const btnSectionAboutMeLearnMore = document.querySelector(".section_aboutme_container_mobile_present_button");
const mainContainerSectionAboutMe = document.querySelector(".section_aboutme_container");
const containerSectionAboutMeMobile = document.querySelector(".section_aboutme_container_mobile");
const containerSectionAboutMeMobileLearnMore = document.querySelector(".section_aboutme_container_mobile_learnmore");
const btnsLearnMore = document.querySelectorAll(".btnAboutMe");
const profileInfo = document.querySelector(".section_aboutme_container_mobile_profile_text_div");
const educationInfo = document.querySelector(".section_aboutme_container_mobile_education_text_div");
const skillsInfo = document.querySelector(".section_aboutme_container_mobile_skills_text_div");
const certificatesInfo = document.querySelector(".section_aboutme_container_mobile_certificates_text_div");
const imgSectionAboutMeLearnMore = document.querySelector(".section_aboutme_container_mobile_present_img");
const generalInfo = document.querySelectorAll(".info");

const btnLearnMoreBigScreen = document.querySelector(".section_aboutme_container_big_present_button");
const btnSectionAboutMeContainerBigBtnsClose = document.querySelector(".section_aboutme_container_big_btns_close_button");
const sectionAboutMeContainerBigPresent = document.querySelector(".section_aboutme_container_big_present");
const sectionAboutMeContainerBigBtns = document.querySelector(".section_aboutme_container_big_btns");
const sectionAboutMeContainerBigInformation = document.querySelector(".section_aboutme_container_big_information");
const btnsDivContainerAboutMeBig = document.querySelectorAll(".btnDivContainerAboutMeBig");
const generalInfoAboutMeBig = document.querySelectorAll(".aboutMeBigInfo");
const btnsCloseInfoGeneralBig = document.querySelectorAll(".btnCloseInfoGeneralBig");
const sectionAboutMeContainerBigImg = document.querySelector(".section_aboutme_container_big_divimg_img");

let learnMoreAboutMeStatus = false;
let profileStatus = false;
let educationStatus = false;
let skillsStatus = false;
let certificatesStatus = false;

// SECTION PORTFOLIO
const btnPortfolioOpenPython = document.querySelector(".section_portfolio_container_projects_python_div_button");
const btnPortfolioOpenJs = document.querySelector(".section_portfolio_container_projects_js_div_button");
const btnPortfolioOpenCss = document.querySelector(".section_portfolio_container_projects_css_div_button");
const containerSectionPortfolioProjects = document.querySelector(".section_portfolio_container_projects");
const containerNewPython = document.querySelector(".section_portfolio_container_projects_python_open");
const containerNewPythonBtn = document.querySelector(".section_portfolio_container_projects_python_open_title_button");
const containerNewPythonDivs = document.querySelectorAll(".section_portfolio_container_projects_python_open_div_list_item_div");
const containerNewPythonPs = document.querySelectorAll(".vanish");

const containerNewJs = document.querySelector(".section_portfolio_container_projects_js_open");
const containerNewJsBtn = document.querySelector(".section_portfolio_container_projects_js_open_title_button");
const containerNewJsDivs = document.querySelectorAll(".section_portfolio_container_projects_js_open_div_list_item_div");
const containerNewJsPs = document.querySelectorAll(".vanish");

const containerNewCss = document.querySelector(".section_portfolio_container_projects_css_open");
const containerNewCssBtn = document.querySelector(".section_portfolio_container_projects_css_open_title_button");
const containerNewCssDivs = document.querySelectorAll(".section_portfolio_container_projects_css_open_div_list_item_div");
const containerNewCssPs = document.querySelectorAll(".vanish");

const containerNewPythonDivsH = document.querySelectorAll(".section_portfolio_container_projects_Hpython_description_container_list_item");
const containerNewPythonPsH = document.querySelectorAll(".section_portfolio_container_projects_Hpython_description_container_two_item");
const containerNewPythonCloseBtn = document.querySelector(".section_portfolio_container_projects_Hpython_title_button");
const containerNewPythonFatherH = document.querySelector(".section_portfolio_container_projects_Hpython");

const containerNewJsDivsH = document.querySelectorAll(".section_portfolio_container_projects_Hjs_description_container_list_item");
const containerNewJsPsH = document.querySelectorAll(".section_portfolio_container_projects_Hjs_description_container_two_item");
const containerNewJsCloseBtn = document.querySelector(".section_portfolio_container_projects_Hjs_title_button");
const containerNewJsFatherH = document.querySelector(".section_portfolio_container_projects_Hjs");

const containerNewCssDivsH = document.querySelectorAll(".section_portfolio_container_projects_Hcss_description_container_list_item");
const containerNewCssPsH = document.querySelectorAll(".section_portfolio_container_projects_Hcss_description_container_two_item");
const containerNewCssCloseBtn = document.querySelector(".section_portfolio_container_projects_Hcss_title_button");
const containerNewCssFatherH = document.querySelector(".section_portfolio_container_projects_Hcss");

let containerJsProjectsStatus = false; 
let containerPythonProjectsStatus = false; 
let containerCssProjectsStatus = false; 

// SECTION CONTACT ME 
const formContactForm = document.querySelector(".section_contactme_container_form");
const btnContactMe = document.querySelector(".section_contactme_container_form_button");

// FOOTER
const actualDateRefresh = document.getElementById("agedate");


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

navLinks.forEach(function(link){    
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute(`href`).slice(1);
        const element = document.getElementById(id);


        if (queryMatches){
            const navHeight = navContainer.getBoundingClientRect();
            let position = element.offsetTop - navHeight.height;

            window.scrollTo({top:position})
        } else {
            if (navStatus){
                const navHeight = navContainerLogo.getBoundingClientRect();
                let position = element.offsetTop - navHeight.height;
                
                navContainerNav.classList.remove("show-nav");
                navStatus = false;
                btnOpenNav.style.display = "block";
                btnCloseNav.style.display = "none";
                window.scrollTo({top:position})
            }
        }
        
    })
});


// SECTION HOME - FUNCTIONS

btnSectionHomeMoreInfo.addEventListener("click", sectionHomeFunctionMoreInfo);

function sectionHomeFunctionMoreInfo(){

    if (queryMatches === false){


        if (pHomeStatus){
            pSectionHomeMoreInfo.classList.remove("show-section-home-p");
            containerSectionHome.classList.remove("show-section-home-p-height");
            btnSectionHomeMoreInfo.innerHTML =  `<i class="fa-solid fa-angle-down"></i>`;
            imgSectionHomeMoreInfo.style.borderBottom = "2px solid #fff";
            pSectionHomeMoreInfo.style.borderBottom = "0px"
            pHomeStatus = false;
        } else {
            pSectionHomeMoreInfo.classList.add("show-section-home-p");
            containerSectionHome.classList.add("show-section-home-p-height");
            imgSectionHomeMoreInfo.style.borderBottom = "0px";
            pSectionHomeMoreInfo.style.borderBottom = "2px solid #fff"
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

function changeImgHome(){
    y++
    
    imgSectionHomeMoreInfo.src = `${arrayImg[y]}`;

    if (y > 3){
        y = 0;
        imgSectionHomeMoreInfo.src = arrayImg[y];
    }
}

setInterval(changeImgHome, 5000)

// SECTION ABOUTME - FUNCTIONS
btnSectionAboutMeLearnMore.addEventListener("click", showSectionAboutMeLearnMore);

function showSectionAboutMeLearnMore(){

    if(learnMoreAboutMeStatus){

        imgSectionAboutMeLearnMore.src = "templates/1.png";

        mainContainerSectionAboutMe.classList.remove("show-height-auto")
        containerSectionAboutMeMobile.classList.remove("show-height-auto")
        containerSectionAboutMeMobileLearnMore.classList.remove("show-about-mobile")

        btnSectionAboutMeLearnMore.innerHTML = `LEARN MORE <i class="fa-solid fa-chevron-right"></i>`

        learnMoreAboutMeStatus = false;

    } else {

        imgSectionAboutMeLearnMore.src = "templates/2.png";

        if (profileStatus){
            mainContainerSectionAboutMe.classList.add("show-height-auto")
            containerSectionAboutMeMobile.classList.add("show-height-auto")
            profileInfo.classList.add("show-about-mobile-x");
            containerSectionAboutMeMobileLearnMore.classList.add("show-about-mobile")
    
            learnMoreAboutMeStatus = true;
        } else if(educationStatus){
            mainContainerSectionAboutMe.classList.add("show-height-auto")
            containerSectionAboutMeMobile.classList.add("show-height-auto")
            educationInfo.classList.add("show-about-mobile-x");
            containerSectionAboutMeMobileLearnMore.classList.add("show-about-mobile")
    
            learnMoreAboutMeStatus = true;
        } else if (skillsStatus){
            mainContainerSectionAboutMe.classList.add("show-height-auto")
            containerSectionAboutMeMobile.classList.add("show-height-auto")
            skillsInfo.classList.add("show-about-mobile-x");
            containerSectionAboutMeMobileLearnMore.classList.add("show-about-mobile")
    
            learnMoreAboutMeStatus = true;
        } else if (certificatesStatus){
            mainContainerSectionAboutMe.classList.add("show-height-auto")
            containerSectionAboutMeMobile.classList.add("show-height-auto")
            certificatesInfo.classList.add("show-about-mobile-x");
            containerSectionAboutMeMobileLearnMore.classList.add("show-about-mobile")
    
            learnMoreAboutMeStatus = true;
        } else {

            mainContainerSectionAboutMe.classList.add("show-height-auto")
            containerSectionAboutMeMobile.classList.add("show-height-auto")
            containerSectionAboutMeMobileLearnMore.classList.add("show-about-mobile")
    
            btnSectionAboutMeLearnMore.innerHTML = `CLOSE <i class="fa-solid fa-chevron-right"></i>`

            learnMoreAboutMeStatus = true;
        }


    }

}


btnsLearnMore.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        e.preventDefault();

        const idBtn = e.currentTarget.id;

        switch(idBtn){
            case "profile":
                if(profileStatus){

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    profileInfo.style.padding = "0px"
                    profileInfo.classList.remove("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    profileInfo.style.padding = "10px"
                    profileInfo.classList.add("show-about-mobile-x");

                    profileStatus = true;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } 
            break;
            case "education":
                if(educationStatus){

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    educationInfo.style.padding = "0px"
                    educationInfo.classList.remove("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    educationInfo.style.padding = "10px"
                    educationInfo.classList.add("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = true;
                    skillsStatus = false;
                    certificatesStatus = false;
                } 
            break;
            case "skills":
                if(skillsStatus){

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    skillsInfo.style.padding = "0px"
                    skillsInfo.classList.remove("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    skillsInfo.style.padding = "10px"
                    skillsInfo.classList.add("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = true;
                    certificatesStatus = false;
                } 
            break;
            case "certificates":
                if(certificatesStatus){

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    certificatesInfo.style.padding = "0px"
                    certificatesInfo.classList.remove("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.classList.add("show-height-auto")
                    containerSectionAboutMeMobile.classList.add("show-height-auto")
                    certificatesInfo.style.padding = "10px"
                    certificatesInfo.classList.add("show-about-mobile-x");

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = true;
                } 
            break;
        }

        for (i = 0; i < generalInfo.length; i++){
            for(i = 0; i < btnsLearnMore.length; i++){
                if (btnsLearnMore[i] !== btn){
                    generalInfo[i].classList.remove("show-about-mobile-x");
                    generalInfo[i].style.padding = "0px";
                }
            }
        }

    });
});


// ABOUT ME - BIG SCREEN FUNCTIONS

btnLearnMoreBigScreen.addEventListener("click", (e)=>{
    e.preventDefault();

    sectionAboutMeContainerBigPresent.classList.add("no-show-about");
    sectionAboutMeContainerBigBtns.classList.add("show-about-flex");

    setTimeout(function(){
        sectionAboutMeContainerBigBtns.style.opacity = "1";
    })



});

btnSectionAboutMeContainerBigBtnsClose.addEventListener("click", (e)=>{
    e.preventDefault();

    sectionAboutMeContainerBigPresent.classList.remove("no-show-about");
    sectionAboutMeContainerBigBtns.classList.remove("show-about-flex");
    sectionAboutMeContainerBigBtns.style.opacity = "0";

});

btnsCloseInfoGeneralBig.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        e.preventDefault();

        sectionAboutMeContainerBigBtns.classList.add("show-about-flex");
        sectionAboutMeContainerBigInformation.classList.remove("show-about-block");
        
        for (i = 0; i < generalInfoAboutMeBig.length; i++){
            generalInfoAboutMeBig[i].classList.remove("show-about-flex");
            generalInfoAboutMeBig[i].style.opacity = "0";
            sectionAboutMeContainerBigImg.src = "templates/1.png";
        }

    });
})

btnsDivContainerAboutMeBig.forEach(function(btn){

    btn.addEventListener("click",(e)=>{
        e.preventDefault();

        let id = e.currentTarget.children[0].outerText;
        let idMinus = id.toLowerCase();

        for (i = 0; i < generalInfoAboutMeBig.length; i++){
            if(generalInfoAboutMeBig[i].id === idMinus){
                sectionAboutMeContainerBigBtns.classList.remove("show-about-flex");
                sectionAboutMeContainerBigInformation.classList.add("show-about-block");
                generalInfoAboutMeBig[i].classList.add("show-about-flex");
                sectionAboutMeContainerBigImg.src = "templates/2.png";

                let saveValue;
                saveValue = i;

                setTimeout(function(){
                    generalInfoAboutMeBig[saveValue].style.opacity = "1";
                });
            }
        }

    })

    
});

// SECTION PORTFOLIO - FUNCTIONS

btnPortfolioOpenPython.addEventListener("click", openPythonPortfolio);

function openPythonPortfolio(){

    containerPythonProjectsStatus = true;

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
            containerPythonProjectsStatus = false;
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

    containerJsProjectsStatus = true;

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
            containerJsProjectsStatus = false;
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

btnPortfolioOpenCss.addEventListener("click", openCssPortfolio);

function openCssPortfolio(){

    containerCssProjectsStatus = true;

    if (queryMatches == false){
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewCss.classList.add("show-display-projects");

        setTimeout(function(){
            containerNewCss.style.opacity = "1";
        })

        containerNewCssBtn.addEventListener("click",()=>{
            containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
            containerNewCss.classList.remove("show-display-projects");
            containerNewCss.style.opacity = "0";
            containerCssProjectsStatus = false;
        });
    } else {
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewCssFatherH.classList.add("show");

        setTimeout(function(){
            containerNewCssFatherH.style.opacity = "1";
        })
    }

}

containerNewCssDivs.forEach(function(btn){
    btn.addEventListener("click", (e)=>{

        const divBtn =  e.currentTarget.children[1]

        divBtn.classList.toggle("show-display-p");
        btn.classList.toggle("show-border");

        containerNewCssPs.forEach(function(p){
            if (p !== divBtn){
                p.classList.remove("show-display-p");
            }
        });


    });
})

// SECTION PORTFOLIO BIG SCREEN - FUNCTIONS
containerNewPythonDivsH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        
        containerPythonProjectsStatus = true;

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
    containerPythonProjectsStatus = false;
    containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
    containerNewPythonFatherH.classList.remove("show");
    containerNewPythonFatherH.style.opacity = "0";

})

containerNewJsDivsH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{

        containerJsProjectsStatus = true;
        
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

    containerJsProjectsStatus = false;

    containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
    containerNewJsFatherH.classList.remove("show");
    containerNewJsFatherH.style.opacity = "0";

})

containerNewCssDivsH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{

        containerCssProjectsStatus = true;
        
        let textRes = e.currentTarget.outerText;

        btn.classList.add("active");

        for (i = 0; i < containerNewCssPsH.length; i++){
            if (textRes == containerNewCssPsH[i].id){
    
                if (containerNewCssPsH[i].classList.contains("show")){
                    containerNewCssPsH[i].classList.remove("show");
                    btn.classList.remove("active");
                } else{
                    containerNewCssPsH[i].classList.add("show");
                }
                
            } 
        }  
        
        let textResTwo = btn.parentElement.parentElement.parentElement.children[1].children;
        


        for (i = 0; i < textResTwo.length; i++){
            if (textResTwo[i].id !== textRes){
                textResTwo[i].classList.remove("show");
            }
        }

        for (i = 0; i < containerNewCssDivsH.length; i++){
            if (containerNewCssDivsH[i] !== btn){
                containerNewCssDivsH[i].classList.remove("active");
            }
        }
    });
});

containerNewCssCloseBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    containerCssProjectsStatus = false;

    containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
    containerNewCssFatherH.classList.remove("show");
    containerNewCssFatherH.style.opacity = "0";

})


// CONTACT ME SECTION
formContactForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const nameValue = document.getElementById("nombre").value;
    const emailValue = document.getElementById("email").value;
    const messageValue = document.getElementById("message").value;
    

    if (nameValue.split(" ").join("") == "" || emailValue.split(" ").join("") == "" || messageValue.split(" ").join("") == ""){
       
        btnContactMe.textContent = "SENDING.";

        setTimeout(function(){
            btnContactMe.textContent = "SENDING..";
        },500);

        setTimeout(function(){
            btnContactMe.textContent = "SENDING...";
        },1000);


        setTimeout(function(){
            btnContactMe.style.background = "red";
            btnContactMe.textContent = "ERROR | Check the inputs ❌";
        },2000);
       

        setTimeout(function(){
            btnContactMe.textContent = "SEND";
            btnContactMe.style.background = "#5261c4";
            formContactForm.reset();
            grecaptcha.reset();
            btnContactMe.setAttribute("disabled", "");
            btnContactMe.style.cursor = "not-allowed";
        },6000);

    } else {
        axios.post('https://formsubmit.co/ajax/4a247a20c2a1dfc75e06cc04be162bae', {
            "name": `${nameValue}`,
            "email":`${emailValue}`,
            "message":`${messageValue}`,
        })
            .then(response => {

                btnContactMe.textContent = "SENDING.";

                setTimeout(function(){
                    btnContactMe.textContent = "SENDING..";
                },500);
        
                setTimeout(function(){
                    btnContactMe.textContent = "SENDING...";
                },1000);



                setTimeout(function(){
                                    
                    btnContactMe.style.background = "green";
                    btnContactMe.textContent = "SENT SUCCESSFULLY ✔️";
                },2000);
                


                    setTimeout(function(){
                        btnContactMe.textContent = "SEND";
                        btnContactMe.style.background = "#5261c4";
                        formContactForm.reset();
                        grecaptcha.reset();
                        btnContactMe.setAttribute("disabled", "");
                        btnContactMe.style.cursor = "not-allowed";
                    },6000);
    
            })
            .catch(error => console.log(error));
        }
    });


function recaptcha_callback(){
    btnContactMe.removeAttribute("disabled");
    btnContactMe.style.cursor = "pointer";
}


// FOOTER

let actualDate = new Date();
let actualDateYear = actualDate.getFullYear();

actualDateRefresh.textContent = `${actualDateYear}`;


// General Stuff



document.addEventListener("DOMContentLoaded", ()=>{

    if (queryMatch.matches){
        queryMatches = true;

        itemINav.forEach(function(item){
            item.classList.remove("active-nav");
        })

        btnSectionHomeMoreInfo.innerHTML = "MORE INFO";
    } else  {

        itemINav.forEach(function(item){
            item.classList.remove("active-nav-two");
        })
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

            imgSectionHomeMoreInfo.style.borderBottom = "0px";
            pSectionHomeMoreInfo.style.borderBottom = "0px"

            mainContainerSectionAboutMe.classList.add("show-height-big");

            itemINav.forEach(function(item){
                item.classList.remove("active-nav");
            })

            checkStatusContainerProjects();
    
        } else  {


            queryMatches = false;

            containerNewPythonBtn.addEventListener("click",()=>{
                containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
                containerNewPython.classList.remove("show-display-projects");
                containerNewPython.style.opacity = "0";
                containerPythonProjectsStatus = false;
            });

            containerNewJsBtn.addEventListener("click",()=>{
                containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
                containerNewJs.classList.remove("show-display-projects");
                containerNewJs.style.opacity = "0";
                containerJsProjectsStatus = false;
            });

            containerNewCssBtn.addEventListener("click",()=>{
                containerSectionPortfolioProjects.classList.remove("no-show-projects-container");
                containerNewCss.classList.remove("show-display-projects");
                containerNewCss.style.opacity = "0";
                containerCssProjectsStatus = false;
            });

            if (navStatus === false){
                btnOpenNav.style.display = "block";
                btnCloseNav.style.display = "none";
            } else {
                btnOpenNav.style.display = "none";
                btnCloseNav.style.display = "block";
            }

            itemINav.forEach(function(item){
                item.classList.remove("active-nav-two");
            })

            imgSectionHomeMoreInfo.style.borderBottom = "2px solid #fff";
            pSectionHomeMoreInfo.style.borderBottom = "0px"

            mainContainerSectionAboutMe.classList.remove("show-height-big");

            imgSectionAboutMeLearnMore.src = "templates/1.png";

            if (learnMoreAboutMeStatus){
                mainContainerSectionAboutMe.classList.add("show-height-auto");
                containerSectionAboutMeMobile.classList.add("show-height-auto");
                containerSectionAboutMeMobileLearnMore.classList.add("show-about-mobile");
        
                btnSectionAboutMeLearnMore.innerHTML = `CLOSE <i class="fa-solid fa-chevron-right"></i>`
            } else {
                mainContainerSectionAboutMe.classList.remove("show-height-auto");
                containerSectionAboutMeMobile.classList.remove("show-height-auto");
                containerSectionAboutMeMobileLearnMore.classList.remove("show-about-mobile");
        
                btnSectionAboutMeLearnMore.innerHTML = `LEARN MORE <i class="fa-solid fa-chevron-right"></i>`
            }

            btnSectionHomeMoreInfo.innerHTML =  `<i class="fa-solid fa-angle-down"></i>`;

            checkStatusContainerProjects();
    
        }



});

window.addEventListener(`scroll`, function(){

    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 30){
        navContainerLogo.classList.add("change-bg-nav");
        navContainerNav.classList.add("change-bg-nav");
        navContainer.classList.add("change-bg-nav");
    } else{
        navContainerLogo.classList.remove("change-bg-nav");
        navContainerNav.classList.remove("change-bg-nav");
        navContainer.classList.remove("change-bg-nav");
    }

    if (queryMatches){
        if (scrollHeight >= 0 && scrollHeight < 1003){
            idNavHomeLi.classList.add("active-nav-two");
        } else {
            idNavHomeLi.classList.remove("active-nav-two");
        }
    
        if (scrollHeight >= 1003 && scrollHeight < 2003){
            idNavAboutMeLi.classList.add("active-nav-two");
        } else {
            idNavAboutMeLi.classList.remove("active-nav-two");
        }

        if (scrollHeight >= 2003 && scrollHeight < 3003){
            idNavPortfolioLi.classList.add("active-nav-two");
        } else {
            idNavPortfolioLi.classList.remove("active-nav-two");
        }

        if (scrollHeight >= 3003 && scrollHeight < 3500){
            idNavContactMeLi.classList.add("active-nav-two");
        } else {
            idNavContactMeLi.classList.remove("active-nav-two");
        }
    } else {
        if (scrollHeight >= 0 && scrollHeight < 600){
            idNavHomeLi.classList.add("active-nav");
        } else {
            idNavHomeLi.classList.remove("active-nav");
        }
    
        if (scrollHeight >= 600 && scrollHeight < 1450){
            idNavAboutMeLi.classList.add("active-nav");
        } else {
            idNavAboutMeLi.classList.remove("active-nav");
        }

        if (scrollHeight >= 1450 && scrollHeight < 2350){
            idNavPortfolioLi.classList.add("active-nav");
        } else {
            idNavPortfolioLi.classList.remove("active-nav");
        }

        if (scrollHeight >= 2350 && scrollHeight < 3400){
            idNavContactMeLi.classList.add("active-nav");
        } else {
            idNavContactMeLi.classList.remove("active-nav");
        }
    }


});

function checkStatusContainerProjects (){

    if (containerPythonProjectsStatus && queryMatches){
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewPythonFatherH.classList.add("show");
        containerNewPythonFatherH.style.opacity = "1";
        containerNewPython.style.opacity = "0";
        containerNewPython.classList.remove("show-display-projects");
    } 

    if (containerPythonProjectsStatus && !queryMatches){
            containerSectionPortfolioProjects.classList.add("no-show-projects-container");
            containerNewPythonFatherH.classList.remove("show");
            containerNewPython.classList.add("show-display-projects");
            containerNewPython.style.opacity = "1";
            containerNewPythonFatherH.style.opacity = "0";
    }

    if (containerJsProjectsStatus && queryMatches){
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewJsFatherH.classList.add("show");
        containerNewJsFatherH.style.opacity = "1";
        containerNewJs.style.opacity = "0";
        containerNewJs.classList.remove("show-display-projects");
    } 

    if (containerJsProjectsStatus && !queryMatches){
            containerSectionPortfolioProjects.classList.add("no-show-projects-container");
            containerNewJsFatherH.classList.remove("show");
            containerNewJs.classList.add("show-display-projects");
            containerNewJs.style.opacity = "1";
            containerNewJsFatherH.style.opacity = "0";
    }

    if (containerCssProjectsStatus && queryMatches){
        containerSectionPortfolioProjects.classList.add("no-show-projects-container");
        containerNewCssFatherH.classList.add("show");
        containerNewCssFatherH.style.opacity = "1";
        containerNewCss.style.opacity = "0";
        containerNewCss.classList.remove("show-display-projects");
    } 

    if (containerCssProjectsStatus && !queryMatches){
            containerSectionPortfolioProjects.classList.add("no-show-projects-container");
            containerNewCssFatherH.classList.remove("show");
            containerNewCss.classList.add("show-display-projects");
            containerNewCss.style.opacity = "1";
            containerNewCssFatherH.style.opacity = "0";
    }


}
