const btnsNav = document.querySelectorAll(".div_center_logo i");
const shownav = document.querySelector(".div_center_nav");

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


// Responsive config
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