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

let containerJsProjectsStatus = false; 
let containerPythonProjectsStatus = false; 

// SECTION CONTACT ME 
const formContactForm = document.querySelector(".section_contactme_container_form");

formContactForm.addEventListener("submit", (e)=>{
e.preventDefault()

const nameValue = document.getElementById("nombre").value;
const emailValue = document.getElementById("email").value;
const messageValue = document.getElementById("message").value;


axios.post('https://formsubmit.co/ajax/4a247a20c2a1dfc75e06cc04be162bae', {
    "name": `${nameValue}`,
    "email":`${emailValue}`,
    "message":`${messageValue}`,
})
    .then(response => alert("Email enviado"))
    .catch(error => console.log(error));
})



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

// SECTION ABOUTME - FUNCTIONS
btnSectionAboutMeLearnMore.addEventListener("click", showSectionAboutMeLearnMore);

function showSectionAboutMeLearnMore(){

    if(learnMoreAboutMeStatus){

        imgSectionAboutMeLearnMore.src = "1.png";

        mainContainerSectionAboutMe.style.height = "750px";
        containerSectionAboutMeMobile.style.height = "600px";
        containerSectionAboutMeMobileLearnMore.style.height = "0";

        learnMoreAboutMeStatus = false;

    } else {

        imgSectionAboutMeLearnMore.src = "2.png";

        if (profileStatus){
            mainContainerSectionAboutMe.style.height = "1212px";
            containerSectionAboutMeMobile.style.height = "1062px";
            profileInfo.style.height = "auto";
            containerSectionAboutMeMobileLearnMore.style.height = "auto";
    
            learnMoreAboutMeStatus = true;
        } else if(educationStatus){
            mainContainerSectionAboutMe.style.height = "1434px";
            containerSectionAboutMeMobile.style.height = "1284px";
            educationInfo.style.height = "auto";
            containerSectionAboutMeMobileLearnMore.style.height = "auto";
    
            learnMoreAboutMeStatus = true;
        } else if (skillsStatus){
            mainContainerSectionAboutMe.style.height = "1391px";
            containerSectionAboutMeMobile.style.height = "1241px";
            skillsInfo.style.height = "auto";
            containerSectionAboutMeMobileLearnMore.style.height = "auto";
    
            learnMoreAboutMeStatus = true;
        } else if (certificatesStatus){
            mainContainerSectionAboutMe.style.height = "1285px";
            containerSectionAboutMeMobile.style.height = "1135px";
            certificatesInfo.style.height = "auto";
            containerSectionAboutMeMobileLearnMore.style.height = "auto";
    
            learnMoreAboutMeStatus = true;
        } else {

            mainContainerSectionAboutMe.style.height = "1000px";
            containerSectionAboutMeMobile.style.height = "850px";
            containerSectionAboutMeMobileLearnMore.style.height = "auto";
    
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

                    mainContainerSectionAboutMe.style.height = "1000px";
                    containerSectionAboutMeMobile.style.height = "850px";
                    profileInfo.style.height = "0";

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.style.height = "1236px";
                    containerSectionAboutMeMobile.style.height = "1086px";
                    profileInfo.style.height = "auto";

                    profileStatus = true;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } 
            break;
            case "education":
                if(educationStatus){

                    mainContainerSectionAboutMe.style.height = "1000px";
                    containerSectionAboutMeMobile.style.height = "850px";
                    educationInfo.style.height = "0";

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.style.height = "1434px";
                    containerSectionAboutMeMobile.style.height = "1284px";
                    educationInfo.style.height = "auto";

                    profileStatus = false;
                    educationStatus = true;
                    skillsStatus = false;
                    certificatesStatus = false;
                } 
            break;
            case "skills":
                if(skillsStatus){

                    mainContainerSectionAboutMe.style.height = "1000px";
                    containerSectionAboutMeMobile.style.height = "850px";
                    skillsInfo.style.height = "0";

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.style.height = "1391px";
                    containerSectionAboutMeMobile.style.height = "1241px";
                    skillsInfo.style.height = "auto";

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = true;
                    certificatesStatus = false;
                } 
            break;
            case "certificates":
                if(certificatesStatus){

                    mainContainerSectionAboutMe.style.height = "1000px";
                    containerSectionAboutMeMobile.style.height = "850px";
                    certificatesInfo.style.height = "0";

                    profileStatus = false;
                    educationStatus = false;
                    skillsStatus = false;
                    certificatesStatus = false;
                } else{

                    mainContainerSectionAboutMe.style.height = "1285px";
                    containerSectionAboutMeMobile.style.height = "1135px";
                    certificatesInfo.style.height = "auto";

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
                    generalInfo[i].style.height = "0";
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
            sectionAboutMeContainerBigImg.src = "1.png";
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
                sectionAboutMeContainerBigImg.src = "2.png";

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

            checkStatusContainerProjects();
    
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

            checkStatusContainerProjects();
    
        }



});

window.addEventListener(`scroll`, function(){

    const scrollHeight = window.pageYOffset;

    console.log(scrollHeight)

    if (scrollHeight > 30){
        navContainerLogo.classList.add("change-bg-nav");
        navContainerNav.classList.add("change-bg-nav");
        navContainer.classList.add("change-bg-nav");
    } else{
        navContainerLogo.classList.remove("change-bg-nav");
        navContainerNav.classList.remove("change-bg-nav");
        navContainer.classList.remove("change-bg-nav");
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


}
