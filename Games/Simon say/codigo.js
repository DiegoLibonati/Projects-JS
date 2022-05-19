const colorsBox = document.querySelectorAll(".box_color");

let valuesCanPlayIA = ["green", "yellow", "red", "blue"];
let arrayIA = [];
let iaCanPlay = true;
let iaCount = 0;

let userCanPlay = false; 
let arrayUser = [];

let loadColorsBox = false

let checkIfUserIsEqualToIa = false;

const userSystemPlay = (e) => {

    if (userCanPlay == true){
        let itemId = e.currentTarget.id;
        
        changeColorViewOfTabletop(itemId, e.currentTarget);
    
        arrayUser.push(itemId);   
    
        if (arrayUser.length === arrayIA.length){
                userCanPlay = false;
                checkIfUserIsEqualToIa = true;
                whoPlays();
        } 
    }

}

colorsBox.forEach(function(colorBox){

    colorBox.addEventListener("click", userSystemPlay);

});


const changeColorViewOfTabletop = (itemId, item) => {
        
    item.classList.add(`${itemId}-color`);

    setTimeout(()=>{

        item.classList.remove(`${itemId}-color`);

    },500);

}

const iaSelectColorToPlay = () => {

    const randomColor = Math.floor(Math.random() * valuesCanPlayIA.length);

    return valuesCanPlayIA[randomColor];

}

const iaPlay = () => {

    if (!(arrayIA.length === iaCount)){
        const iaPickColor = iaSelectColorToPlay();
        
        arrayIA.push(iaPickColor);
        console.log(arrayIA)

        for(let i = 0; i < colorsBox.length; i++){

            for (let y = 0; y < arrayIA.length; y++){

                if (colorsBox[i].id == arrayIA[y]){

                    setTimeout(()=>{

                        changeColorViewOfTabletop(colorsBox[i].id ,colorsBox[i]);
    
                    }, 1000 * y + 1);

                }

            }    

        }

    }

}
  

const whoPlays = () => {

    if (iaCanPlay == true && checkIfUserIsEqualToIa == false && userCanPlay == false){

        iaCount++

        for (let i = 0; i < iaCount; i++){

          setTimeout(iaPlay,1000 * i + 1);

        }

        iaCanPlay = false;

        setTimeout(() => {
            userCanPlay = true
            whoPlays();
        }, 1010 * iaCount + 1)
    }

    if (userCanPlay == true && checkIfUserIsEqualToIa == false && iaCanPlay == false){
        arrayUser = [];
    }

    if (checkIfUserIsEqualToIa == true && userCanPlay == false && iaCanPlay == false){
       let result = checkArraysIaAndUser(arrayIA, arrayUser);

       if (result == true){
           setTimeout(() => {
            console.log("sigue")
            iaCanPlay = true;
            checkIfUserIsEqualToIa = false;
            whoPlays();
        }, 1010 * iaCount + 1)
       } else {
           console.log("PERDISTE");
       }
    }

}

const checkArraysIaAndUser = (arr, arr2) => {

        if (arr === arr2) return true;
        if (arr == null || arr2 == null) return false;
        if (arr.length !== arr2.length) return false;
    
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== arr2[i]) return false
        }
    
        return true;
    
}

whoPlays();
