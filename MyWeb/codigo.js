const btnsNav = document.querySelectorAll(".div_center_logo i");
const shownav = document.querySelector(".div_center_nav");
const btnShowInfo = document.querySelector(".div_info button");

const colors = "ABCDEF1234567890";
const queryMatch = window.matchMedia("(min-width: 768px)");
let randomNumber;
let randomColor;
let hexColor;
let valueNav;
let intervalHeaderFullScreen;
let intervalRNC;
let intervalRNO;
let intervalHeaderResponsive;
let arrayResponsive = [];

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
                document.querySelector(".header_container").style.border = `none`
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
            document.querySelector(".div_info p").style.height = "0";
            document.querySelector(".div_info p").style.width = "0";
            document.querySelector(".div_info p").style.opacity = "0";
            document.querySelector(".div_info p").style.padding = "0";
            document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-right");
    
            sectionFirstShowInfo = false;
        } else {
            document.querySelector(".div_info p").style.height = "auto";
            document.querySelector(".div_info p").style.opacity = "1";
            document.querySelector(".div_info p").style.padding = "10px";
            document.querySelector(".div_info p").style.width = "auto";
            document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-left");
    
            sectionFirstShowInfo = true;
        }
    } else {
        if (sectionFirstShowInfo == true){
            document.querySelector(".div_info p").style.height = "0";
            document.querySelector(".div_info p").style.width = "0";
            document.querySelector(".div_info p").style.opacity = "0";
            document.querySelector(".div_info p").style.padding = "0";
            document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-down");
    
            sectionFirstShowInfo = false;
        } else {
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
        document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-right");
    } else {
        document.querySelector(".div_info button i").setAttribute("class", "fa-solid fa-angle-down");
    }


  const dataText = ["WELCOME TO MY WORLD"];
  
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

       StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);

});