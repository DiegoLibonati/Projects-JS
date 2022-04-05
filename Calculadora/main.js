const windowDisplay = document.querySelector(".pantalla_container form input");
const formDisplay = document.querySelector(".pantalla_container form");
const memoryDisplay = document.querySelector(".pantalla_container p");
const btnsSelect = document.querySelectorAll(".btns_container button");

let value;
let operation = false;
let total;
let suma = false;
let resta = false;
let multiplicacion = false;
let division = false;

let nums = [];

btnsSelect.forEach(function(btn){

    btn.addEventListener("click", (e)=>{

        valueBtn = e.currentTarget.dataset.id;

        checkOperation(valueBtn);

    })

});

function checkOperation(valueBtn){
    if (valueBtn !== "resultado" && valueBtn !== "suma" && valueBtn !== "resta" && valueBtn !== "multiplicacion" && valueBtn !== "division"){
        concatOrNot(valueBtn);
    }

    if (valueBtn === "suma"){
        sum();
        windowDisplay.value = 0;
    } else if (valueBtn === "resta"){
        subtraction();
        windowDisplay.value = 0;
    } else if (valueBtn === "multiplicacion"){
        mult();
        windowDisplay.value = 0;
    } else if (valueBtn === "division"){
        div();
        windowDisplay.value = 0;
    } else if (valueBtn === "resultado"){
        result();
        windowDisplay.value = 0;
    }
}

function concatOrNot(num){

    if (operation == false){
        windowDisplay.value += num;
    } else {
        operation = false;
        formDisplay.reset();
    }

}


function sum(){

    operation = true;
    suma = true;
    resta = false;
    division = false;
    multiplicacion = false;

    result();

}

function subtraction(){

    operation = true;
    resta = true;
    suma = false;
    division = false;
    multiplicacion = false;

    result();

}

function mult(){
    operation = true;
    resta = false;
    suma = false;
    division = false;
    multiplicacion = true;

    result();

}

function div(){
    operation = true;
    resta = false;
    suma = false;
    division = true;
    multiplicacion = false;

    result();

}

function result(){

    if (suma == true){


        total = 0;

        if (Number.isNaN(parseInt(windowDisplay.value))){
            alert("Introduzca un numero antes de sumar")
        } else {
            nums.push(parseInt(windowDisplay.value));
        }
        
        if (nums.length == 2){
            for(i = 0; i < nums.length; i++){
                total += nums[i];
            }
            memoryDisplay.textContent = `${nums[0]} + ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else {
            memoryDisplay.textContent = `${nums[0]} +`
        }

    } else if (resta == true){

        total = 0;
    
        if (Number.isNaN(parseInt(windowDisplay.value))){
            alert("Introduzca un numero antes de sumar")
        } else {
            nums.push(parseInt(windowDisplay.value));
        }
    
        if (nums.length == 2){
            total = nums[0] - nums[1]; 
            memoryDisplay.textContent = `${nums[0]} - ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else{
            memoryDisplay.textContent = `${nums[0]} -`
        }
    } else if (division == true){
        total = 0;

        if (Number.isNaN(parseInt(windowDisplay.value))){
            alert("Introduzca un numero antes de sumar")
        } else {
            nums.push(parseInt(windowDisplay.value));
        }


        if (nums.length == 2){
            total = nums[0] / nums[1]; 
            memoryDisplay.textContent = `${nums[0]} / ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else{
            memoryDisplay.textContent = `${nums[0]} /`
        }

    } else if (multiplicacion == true){
        total = 0;

        if (Number.isNaN(parseInt(windowDisplay.value))){
            alert("Introduzca un numero antes de sumar")
        } else {
            nums.push(parseInt(windowDisplay.value));
        }
    
    
        if (nums.length == 2){
            total = nums[0] * nums[1]; 
            memoryDisplay.textContent = `${nums[0]} * ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else{
            memoryDisplay.textContent = `${nums[0]} *`
        }
    }

    return
}
