const colorsBox = document.querySelectorAll(".box_color");
const btnStart = document.querySelector(".section_start_row1 button");
const whoPlaysHtml = document.querySelector(".whoPlays");
const scoreHtml = document.querySelector(".score");
const btnsDifficulty = document.querySelectorAll(".btnDif"); 

let valuesCanPlayIA = ["green", "yellow", "red", "blue"];
let arrayIA = [];
let iaCanPlay = false;
let iaCount = 0;

let userCanPlay = false; 
let arrayUser = [];

let checkIfUserIsEqualToIa = false;

let score = 0;

// Function: Inicio de juego
const startGame = () =>{

    iaCanPlay = true;

    whoPlays();

}

// Btn Start Game
btnStart.addEventListener("click", startGame);

// Si userCanPlay es True, al clickear vas a cambiar el color de la boxColor y vas a pushear el elemento al arrayUser. Si el array del usuario es igual al array previo de la IA. Pasa a chequear ambos arrays.
const userSystemPlay = (e) => {

    if (userCanPlay == true){
        let itemId = e.currentTarget.id;
        
        changeColorViewOfTabletop(itemId, e.currentTarget, 100);
    
        arrayUser.push(itemId);   
    
        if (arrayUser.length === arrayIA.length){
                userCanPlay = false;
                checkIfUserIsEqualToIa = true;
                whoPlays();
        } 
    }

}

// Obtenes los colores y le damos a cada uno la funcion de click.
colorsBox.forEach(function(colorBox){

    colorBox.addEventListener("click", userSystemPlay);

});

// Funcion que cambia los colores de sus respectivos boxes.
const changeColorViewOfTabletop = (itemId, item, time) => {

    item.classList.add(`${itemId}-color`);

    setTimeout(()=>{
    
        item.classList.remove(`${itemId}-color`);
    
    },time); 

}

// Funcion que permite obtener algun color aleatoria de valuesCanPlayIA y los retorna.
const iaSelectColorToPlay = () => {

    const randomColor = Math.floor(Math.random() * valuesCanPlayIA.length);

    return valuesCanPlayIA[randomColor];

}

// Funcion que permite hacer jugar a la maquina. Si el array de la maquina es menor a iaCount va a seguir jugando. Va elegir un color random y lo va pushear al arrayIA existente. 
// Luego, a traves de la funcion loopIa va a recorrer el arrayIA y va a mostrar que colores se estan tocando en pantalla si el id de la caja y el valor del array son iguales.
// Esto tendra un delay de 1000 segundos y volvera a llamar a la funcion.
const iaPlay = () => {

    if (!(arrayIA.length === iaCount)){

        const iaPickColor = iaSelectColorToPlay();
        
        arrayIA.push(iaPickColor);

        const delay = (amount = number) => {
            return new Promise((resolve) => {
                setTimeout(resolve, amount);
            });
        }
            
        async function loopIa() {
            for (let i = 0; i < arrayIA.length; i++) {
                
                colorsBox.forEach(function(colorBox){

                    if (colorBox.id == arrayIA[i]){
                        changeColorViewOfTabletop(arrayIA[i], colorBox, 500);
                    }

                })

                await delay(1000);
            }
            }
            loopIa();
    }
}

// Funcion que dictamina quien juega.
const whoPlays = () => {

    // Juega la maquina
    if (iaCanPlay == true && checkIfUserIsEqualToIa == false && userCanPlay == false){
        whoPlaysHtml.innerHTML = `IA PLAYS`;
        iaCount++

        iaPlay()

        iaCanPlay = false;

        setTimeout(() => {
            userCanPlay = true
            console.log(userCanPlay)
            whoPlays();
        }, 1000 * iaCount)
    }

    // Juega el usuario
    if (userCanPlay == true && checkIfUserIsEqualToIa == false && iaCanPlay == false){
        whoPlaysHtml.innerHTML = `ITS YOUR TURN!`;
        arrayUser = [];
    }

    // Se fija si los arrays son iguales
    if (checkIfUserIsEqualToIa == true && userCanPlay == false && iaCanPlay == false){
       let result = checkArraysIaAndUser(arrayIA, arrayUser);

       if (result == true){
            setTimeout(() => {
                score++
                scoreHtml.innerHTML = `SCORE: ${score}`;
                iaCanPlay = true;
                checkIfUserIsEqualToIa = false;
                whoPlays();
            }, 500);
       } else {
           console.log("PERDISTE");
       }
    }

}

// Funcion que permite comparar amabos arrays.
const checkArraysIaAndUser = (arr, arr2) => {

        if (arr === arr2) return true;
        if (arr == null || arr2 == null) return false;
        if (arr.length !== arr2.length) return false;
    
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== arr2[i]) return false
        }
    
        return true;
    
}


