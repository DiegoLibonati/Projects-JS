const btnsNav = document.querySelectorAll(".div_center_logo i");
const shownav = document.querySelector(".div_center_nav");
const btnShowInfo = document.querySelector(".div_info button");
const btnsPortfolio = document.querySelectorAll(".portfolioButton");
const containerH2 = document.querySelector(".section_portfolio_content h2");
const containerPrincipal = document.querySelector(".section_portfolio_content-grid");

const titlePython = document.querySelector(".portfolio_python_title");
const listPython = document.querySelector(".portfolio_python_list");
const buttonClosePython = document.querySelector(".portfolio_python_title button");
const btnsPythonList = document.querySelectorAll(".btnPythonList");
const questionsPythonList = document.querySelectorAll(".info");

const titleJs = document.querySelector(".portfolio_js_title");
const listJs = document.querySelector(".portfolio_js_list");
const buttonCloseJs = document.querySelector(".portfolio_js_title button");
const btnsJsList = document.querySelectorAll(".btnJsList");
const questionsJsList = document.querySelectorAll(".info");

const btnsDivPythonH = document.querySelectorAll(".H_list_python_container ul li");
const divPythonDescriptionH = document.querySelectorAll(".H_python_description div");
const btnClosePythonH = document.querySelector(".H_python_title button");

const btnsDivJsH = document.querySelectorAll(".H_list_js_container ul li");
const divJsDescriptionH = document.querySelectorAll(".H_js_description div");
const btnCloseJsH = document.querySelector(".H_js_title button");



const colors = "ABCDEF1234567890";
const queryMatch = window.matchMedia("(min-width: 768px)");
let randomNumber;
let randomColor;
let hexColor;
let valueNav;
let valueBtn;
let intervalHeaderFullScreen;
let intervalRNC;
let intervalRNO;
let intervalHeaderResponsive;
let arrayResponsive = [];
let colorChange = false;
const dataText = ["WELCOME TO MY WORLD"];

let sectionFirstShowInfo = false;


// Header / Nav Config
btnsNav.forEach(function(btn){

    btn.addEventListener("click", (e)=>{

        valueNav = e.currentTarget.id;

        if (valueNav == "open"){

            shownav.classList.add("show_nav");


            function rainbowNavOpen(){
                hexColor = "#"
            
                for (i = 0; i < 6; i++){
                    randomNumber = Math.floor(Math.random() * colors.length);
            
                    randomColor = colors.charAt(randomNumber);
            
                    hexColor += randomColor;
                }

                document.querySelector(".div_center_logo").style.border = `none`;
                document.querySelector(".header_container").style.border = `5px solid ${hexColor}`
                document.querySelector(".header_container").style.height = "200px";
                document.querySelector(".div_center_logo").style.height = "80px";
                document.querySelector(".nav_container").style.height = "120px";

            }
            clearInterval(intervalRNC);
            intervalRNO = setInterval(rainbowNavOpen, 1000);
            raninbowHeaderFullScreen(valueNav);
            clearInterval(intervalHeaderResponsive);

        } else {

            shownav.classList.remove("show_nav");

            function rainbowNavClose(){
                hexColor = "#"
            
                for (i = 0; i < 6; i++){
                    randomNumber = Math.floor(Math.random() * colors.length);
            
                    randomColor = colors.charAt(randomNumber);
            
                    hexColor += randomColor;
                }

                document.querySelector(".div_center_logo").style.border = `5px solid ${hexColor}`;
                document.querySelector(".header_container").style.border = `none`;
                document.querySelector(".header_container").style.height = "80px";
                document.querySelector(".div_center_logo").style.height = "80px";
                document.querySelector(".nav_container").style.height = "0px";
            }
            clearInterval(intervalRNO);
            intervalRNC = setInterval(rainbowNavClose, 1000);

            raninbowHeaderFullScreen(valueNav);

        }

    });
});

function raninbowHeaderFullScreen(valueNav){

    hexColor = "#"
            
    for (i = 0; i < 6; i++){
        randomNumber = Math.floor(Math.random() * colors.length);

        randomColor = colors.charAt(randomNumber);

        hexColor += randomColor;
    }


    if (queryMatch.matches){

        document.querySelector(".header_container").style.border = `5px solid ${hexColor}`;
        document.querySelector(".div_center_logo").style.border = "none";
        document.getElementById("open").style.display = "none";
        document.getElementById("close").style.display = "none";
        arrayResponsive = [];

        clearInterval(intervalRNC);
        clearInterval(intervalRNO);
        clearInterval(intervalHeaderResponsive);

    } 

    if (!queryMatch.matches){

        if (arrayResponsive.length === 0){
            document.querySelector(".header_container").style.border = `none`
            document.getElementById("open").style.display = "block";
            document.getElementById("close").style.display = "none";
            arrayResponsive.push(1);
            intervalHeaderResponsive = setInterval(rainbowResponsive, 1000);
        }
    
        if (arrayResponsive.length === 1){
            if (valueNav == "open"){
                document.getElementById("open").style.display = "none";
                document.getElementById("close").style.display = "block";
            } else if (valueNav == "close"){
                document.getElementById("open").style.display = "block";
                document.getElementById("close").style.display = "none";
            } 
        }

        
    }


}

function rainbowResponsive(){
    hexColor = "#"
            
    for (i = 0; i < 6; i++){
        randomNumber = Math.floor(Math.random() * colors.length);

        randomColor = colors.charAt(randomNumber);

        hexColor += randomColor;
    }

    document.querySelector(".div_center_logo").style.border = `5px solid ${hexColor}`;
}

intervalHeaderFullScreen = setInterval(raninbowHeaderFullScreen, 1000);


// Firts Section

btnShowInfo.addEventListener("click", showInfo);

function showInfo(){
    
    if (queryMatch.matches){
        if (sectionFirstShowInfo == true){

        } else {
            document.querySelector(".div_info p").style.opacity = "1";
            document.querySelector(".div_info p").style.padding = "10px";
            document.querySelector(".div_info p").style.height = "75%";
            document.querySelector(".div_info p").style.width = "90%";
            document.querySelector(".div_info button").style.display = "none";
            document.querySelector(".div_info img").style.filter = "blur(2px)";
            const button = document.createElement("button");
            button.innerHTML = "x"
            button.setAttribute("class", "closeButton");
            document.querySelector(".div_info").append(button);
            const btnCloseInfo = document.querySelector(".closeButton");
            btnCloseInfo.style.width = "25px";
            btnCloseInfo.style.height = "30px";


            btnCloseInfo.addEventListener("click", closeInfo);

            function closeInfo(){
                if (queryMatch.matches){
                    document.querySelector(".div_info p").style.height = "0";
                    document.querySelector(".div_info p").style.width = "0";
                    document.querySelector(".div_info p").style.opacity = "0";
                    document.querySelector(".div_info p").style.padding = "0";
                    document.querySelector(".div_info button").style.display = "block";
                    document.querySelector(".div_info img").style.filter = "blur(0px)";
            
                    btnCloseInfo.remove();
                    sectionFirstShowInfo = false;
                } 
            }

            sectionFirstShowInfo = true;
        }
    } else {
        if (sectionFirstShowInfo == true){
            document.querySelector(".div_center").style.height = "450px";
            document.querySelector(".div_info p").style.height = "0";
            document.querySelector(".div_info p").style.width = "0";
            document.querySelector(".div_info p").style.opacity = "0";
            document.querySelector(".div_info p").style.padding = "0";
            document.querySelector(".div_info img").style.borderBottom = "1.5px solid #fff";
            document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-down");
    
            sectionFirstShowInfo = false;
        } else {
            document.querySelector(".div_center").style.height = "800px";
            document.querySelector(".div_info img").style.border = "none";
            document.querySelector(".div_info p").style.borderBottom = "1.5px solid #fff";
            document.querySelector(".div_info p").style.height = "auto";
            document.querySelector(".div_info p").style.opacity = "1";
            document.querySelector(".div_info p").style.padding = "10px";
            document.querySelector(".div_info p").style.width = "auto";
            document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-up");
    
            sectionFirstShowInfo = true;
        }
    }

}

// Document Loaded

document.addEventListener("DOMContentLoaded", (event)=>{

    if(queryMatch.matches){
        document.querySelector(".div_info button i").remove();
        document.querySelector(".div_info button").innerHTML = "MORE INFO"
    } else {
        document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-down");
    }



  
  function typeWriter(text, i, fnCallback) {

    if (i < (text.length)) {

     document.querySelector(".div_title h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';


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


// Portfolio Section

btnsPortfolio.forEach(function(btn){

    if (queryMatch.matches){
        btn.addEventListener("click", showPortofolioH);
    } else {
        btn.addEventListener("click", showPortofolio);
    }

})

function showPortofolio(e){

    valueBtn = e.currentTarget.dataset.id;

    if (valueBtn === "python"){

        containerH2.style.display = "none";
        containerPrincipal.style.display = "none";

        titlePython.style.display = "flex";
        listPython.style.display = "block";

        setTimeout(function(){
            titlePython.style.opacity = "1";
            listPython.style.opacity = "1";
        });

        if (queryMatch.matches){

        } else {
            document.querySelector(".section_portfolio_content").style.height = "600px";
            document.querySelector(".section_portfolio").style.height = "800px";
        }

        titleJs.style.display = "none";
        listJs.style.display = "none";

        buttonClosePython.addEventListener("click", (e)=>{

            if (queryMatch.matches){

            } else {
                document.querySelector(".section_portfolio_content").style.height = "1000px";
                document.querySelector(".section_portfolio").style.height = "1200px";
            }

                
            titlePython.style.opacity = "0";
            listPython.style.opacity = "0";

            containerH2.style.display = "block";
            containerPrincipal.style.display = "flex";

            titlePython.style.display = "none";
            listPython.style.display = "none";

            titleJs.style.display = "none";
            listJs.style.display = "none";


        });

    }

    if (valueBtn === "javascript"){

        containerH2.style.display = "none";
        containerPrincipal.style.display = "none";

        titleJs.style.display = "flex";
        listJs.style.display = "block";

        setTimeout(function(){
            titleJs.style.opacity = "1";
            listJs.style.opacity = "1";
        });


        if (queryMatch.matches){

        } else {
            document.querySelector(".section_portfolio_content").style.height = "1600px";
            document.querySelector(".section_portfolio").style.height = "1800px";
        }


        titlePython.style.display = "none";
        listPython.style.display = "none";

        buttonCloseJs.addEventListener("click", (e)=>{


            if (queryMatch.matches){

            } else {
                document.querySelector(".section_portfolio_content").style.height = "1000px";
                document.querySelector(".section_portfolio").style.height = "1200px";
            }

                
            titleJs.style.opacity = "0";
            listJs.style.opacity = "0";

            containerH2.style.display = "block";
            containerPrincipal.style.display = "flex";

            titlePython.style.display = "none";
            listPython.style.display = "none";

            titleJs.style.display = "none";
            listJs.style.display = "none";

        });

    }
}

function showPortofolioH(e){
    valueBtn = e.currentTarget.dataset.id;

    if (valueBtn === "python"){
        containerH2.style.display = "none";
        containerPrincipal.style.display = "none";

        document.querySelector(".Hpython").style.display = "flex";

        setTimeout(function(){
            document.querySelector(".Hpython").style.opacity = "1";
        });

        document.querySelector(".Hjs").style.display = "none";

    }

    if (valueBtn === "javascript"){
        containerH2.style.display = "none";
        containerPrincipal.style.display = "none";
        
        document.querySelector(".Hjs").style.display = "flex";
        
        setTimeout(function(){
            document.querySelector(".Hjs").style.opacity = "1";
        });

        document.querySelector(".Hpython").style.display = "none";
    }
}

btnsPythonList.forEach(function(btn){
    btn.addEventListener("click", ()=>{

        const textRes = btn.parentElement.parentElement.children[1];

        textRes.classList.toggle("show_text");

        questionsPythonList.forEach(function(question){

            if (question !== textRes){
                question.classList.remove("show_text");
            }

        });

    });
})

btnsJsList.forEach(function(btn){
    btn.addEventListener("click", ()=>{

        const textRes = btn.parentElement.parentElement.children[1];

        textRes.classList.toggle("show_text");

        questionsPythonList.forEach(function(question){

            if (question !== textRes){
                question.classList.remove("show_text");
            }

        });



    });
})


// Portfolio Section ScreenH


btnsDivPythonH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        textRes = e.currentTarget.outerText;

        btn.classList.add("active");

        for (i = 0; i < divPythonDescriptionH.length; i++){
            if (textRes == divPythonDescriptionH[i].id){
    
                if (divPythonDescriptionH[i].style.display == "flex"){
                    divPythonDescriptionH[i].style.display = "none"
                    btn.classList.remove("active");
                } else{
                    divPythonDescriptionH[i].style.display = "flex"
                }
                
            } 
        }  
        
        let textResTwo = btn.parentElement.parentElement.parentElement.children[1].children;
        


        for (i = 0; i < textResTwo.length; i++){
            if (textResTwo[i].id !== textRes){
                textResTwo[i].style.display = "none";
            }
        }

        for (i = 0; i < btnsDivPythonH.length; i++){
            if (btnsDivPythonH[i] !== btn){
                btnsDivPythonH[i].classList.remove("active");
            }
        }
    });

    
});

btnClosePythonH.addEventListener("click", (e)=>{
    e.preventDefault();

    containerH2.style.display = "block";
    containerPrincipal.style.display = "flex";

    document.querySelector(".Hjs").style.display = "none";
    document.querySelector(".Hjs").style.opacity = "0";
    document.querySelector(".Hpython").style.display = "none";
    document.querySelector(".Hpython").style.opacity = "0";

})
    

btnsDivJsH.forEach(function(btn){
    btn.addEventListener("click", (e)=>{

        textRes = e.currentTarget.outerText;

        btn.classList.add("active");

        for (i = 0; i < divJsDescriptionH.length; i++){
            if (textRes == divJsDescriptionH[i].id){
    
                if (divJsDescriptionH[i].style.display == "flex"){
                    divJsDescriptionH[i].style.display = "none"
                    btn.classList.remove("active");
                } else{
                    divJsDescriptionH[i].style.display = "flex"
                }
                
            } 
        }  
        
        let textResTwo = btn.parentElement.parentElement.parentElement.children[1].children;
    

        for (i = 0; i < textResTwo.length; i++){
            if (textResTwo[i].id !== textRes){
                textResTwo[i].style.display = "none";
            }
        }

        for (i = 0; i < btnsDivJsH.length; i++){
            if (btnsDivJsH[i] !== btn){
                btnsDivJsH[i].classList.remove("active");
            }
        }
    });

    
});

btnCloseJsH.addEventListener("click", (e)=>{
    e.preventDefault();

    containerH2.style.display = "block";
    containerPrincipal.style.display = "flex";

    
    document.querySelector(".Hjs").style.display = "none";
    document.querySelector(".Hjs").style.opacity = "0";
    document.querySelector(".Hpython").style.display = "none";
    document.querySelector(".Hpython").style.opacity = "0";

})

    
document.addEventListener("ready", ()=>{
    document.querySelector(".div_info").load()

});