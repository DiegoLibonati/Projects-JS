const windowDisplay = document.querySelector(".pantalla_container form input");
const formDisplay = document.querySelector(".pantalla_container form");
const memoryDisplay = document.querySelector(".pantalla_container p");
const btnsSelect = document.querySelectorAll(".btns_container button");

let value;
let operation = false;
let total = 0;
let suma = false;
let resta = false;
let multiplicacion = false;
let division = false;
let x;
let xDos;

let nums = [];
let posibleNums = [0, 1 ,2 ,3, 4, 5, 6, 7, 8, 9];
let ceActive = false;

btnsSelect.forEach(function(btn){

    btn.addEventListener("click", (e)=>{

        valueBtn = e.currentTarget.dataset.id;

        checkOperation(valueBtn);

    })

});

function checkOperation(valueBtn){
    if (valueBtn !== "resultado" && 
    valueBtn !== "suma" && 
    valueBtn !== "resta" && 
    valueBtn !== "multiplicacion" && 
    valueBtn !== "division" && 
    valueBtn !== "masmenos" && 
    valueBtn !== "raizCuadrada" &&
    valueBtn !== "exponente" &&
    valueBtn !== "fraccion" &&
    valueBtn !== "delete" &&
    valueBtn !== "c" &&
    valueBtn !== "ce"){
        concatOrNot(valueBtn);
    }

    if (valueBtn === "suma"){
        sum();
        formDisplay.reset();
    } else if (valueBtn === "resta"){
        subtraction();
        formDisplay.reset();
    } else if (valueBtn === "multiplicacion"){
        mult();
        formDisplay.reset();
    } else if (valueBtn === "division"){
        div();
        formDisplay.reset();
    } else if (valueBtn === "resultado"){
        result();
        formDisplay.reset();
    } else if (valueBtn === "masmenos"){
        changeOp();
    } else if (valueBtn === "raizCuadrada"){
        squareRoot();
    } else if (valueBtn === "exponente"){
        pow();
    } else if (valueBtn === "fraccion"){
        frac();
    } else if (valueBtn === "delete"){
        deleteNum();
    } else if (valueBtn === "c"){
        cPress();
    } else if(valueBtn === "ce"){
        cePress();
    }


    for (i = 0; i < posibleNums.length; i++){
        if (total !== 0 && valueBtn == posibleNums[i] && operation == false && ceActive == false){
            nums = [];
            total = 0;
            windowDisplay.value = valueBtn;
            memoryDisplay.textContent = ``;
        } 

        if (total && valueBtn !== posibleNums[i] && operation == false && ceActive == false){
            nums = [];
        }
    } 

}

function concatOrNot(num){

    if (operation == false){
        windowDisplay.value += num;
    } else {
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

    operation = false;

}

function subtraction(){

    operation = true;
    resta = true;
    suma = false;
    division = false;
    multiplicacion = false;

    result();

    operation = false;

}

function mult(){
    operation = true;
    resta = false;
    suma = false;
    division = false;
    multiplicacion = true;

    result();

    operation = false;

}

function div(){
    operation = true;
    resta = false;
    suma = false;
    division = true;
    multiplicacion = false;

    result();

    operation = false;

}

function result(){

    if (suma == true){

        total = 0;

        if (Number.isNaN(parseFloat(windowDisplay.value))){
            memoryDisplay.textContent = `${nums[0]} +`
        } else {
            nums.push(parseFloat(windowDisplay.value));
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

            if (total == 0){
                windowDisplay.removeAttribute("value");
            } else {
                windowDisplay.setAttribute("value", total);
            }


        } else if (resta == true){

        total = 0;
    
        if (Number.isNaN(parseFloat(windowDisplay.value))){
            memoryDisplay.textContent = `${nums[0]} -`
        } else {
            nums.push(parseFloat(windowDisplay.value));
        }
    
        if (nums.length == 2){
            total = nums[0] - nums[1]; 
            memoryDisplay.textContent = `${nums[0]} - ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else{
            memoryDisplay.textContent = `${nums[0]} -`
        }

        if (total == 0){
            windowDisplay.removeAttribute("value");
        } else {
            windowDisplay.setAttribute("value", total);
        }
    } else if (division == true){
        total = 0;

        if (Number.isNaN(parseFloat(windowDisplay.value))){
            memoryDisplay.textContent = `${nums[0]} /`
        } else {
            nums.push(parseFloat(windowDisplay.value));
        }


        if (nums.length == 2){
            total = nums[0] / nums[1]; 
            memoryDisplay.textContent = `${nums[0]} / ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else{
            memoryDisplay.textContent = `${nums[0]} /`
        }

        if (total == 0){
            windowDisplay.removeAttribute("value");
        } else {
            windowDisplay.setAttribute("value", total);
        }

    } else if (multiplicacion == true){
        total = 0;

        if (Number.isNaN(parseFloat(windowDisplay.value))){
            memoryDisplay.textContent = `${nums[0]} *`
        } else {
            nums.push(parseFloat(windowDisplay.value));
        }
    
    
        if (nums.length == 2){
            total = nums[0] * nums[1]; 
            memoryDisplay.textContent = `${nums[0]} * ${nums[1]} = ${total}`;
            nums = [];
            nums.push(total);
        } else{
            memoryDisplay.textContent = `${nums[0]} *`
        }

        if (total == 0){
            windowDisplay.removeAttribute("value");
        } else {
            windowDisplay.setAttribute("value", total);
        }
    }

    return
}

function changeOp(){
    x = parseFloat(windowDisplay.value);
    xDos = (x * 0) + -x;

    if (windowDisplay.value == ""){
        windowDisplay.value = "";
        console.log("No hay numeros para realizar esta operacion");
    } else {
        if (total){
            if (Math.sign(total) == 1){
                windowDisplay.value = `-${total}`;
                total = windowDisplay.value;
                nums = [];
            } else {
                windowDisplay.value = (total * 0) + -total;
                total = windowDisplay.value;
                nums = [];
            }    
        } else {
    
            if (nums.length == 0){
                if (Math.sign(x) == 1){
                    windowDisplay.value = `-${x}`;
                } else {
                    windowDisplay.value = xDos;
                }    
            } else if (nums.length == 1){
                if (Math.sign(x) == 1){
                    windowDisplay.value = `-${x}`;
                } else {
                    windowDisplay.value = xDos;
                } 
            } 
        }
    }



    return
}

function squareRoot(){
    x = parseFloat(windowDisplay.value);

    if (windowDisplay.value == ""){
        windowDisplay.value = "";
        console.log("No hay numeros para realizar esta operacion")
    } else{
        if (total){
            windowDisplay.value = Math.sqrt(total);
            nums = [];
        } else {
            windowDisplay.value = Math.sqrt(x);
        }
    }



}

function pow(){

    x = parseFloat(windowDisplay.value);

    if (windowDisplay.value == ""){
        windowDisplay.value = "";
        console.log("No hay numeros para realizar esta operacion");
    } else {
        let expNum = Math.pow(x, 2);
        windowDisplay.value = expNum;
    }

}

function frac(){
    x = parseFloat(windowDisplay.value);

    if (windowDisplay.value == ""){
        windowDisplay.value = "";
        console.log("No hay numeros para ejecutar esta operacion");
    } else {
        let fracNum = 1 / x;
        windowDisplay.value = fracNum; 
    }
}

function deleteNum(){

    if (windowDisplay.value == ""){
        windowDisplay.value = "";
        console.log("No hay numeros para ejecutar esta operacion");
    } else {
        let newNum = windowDisplay.value.slice(0, -1);
        windowDisplay.value = newNum;
    }
}

function cPress(){
    nums = [];
    total = 0;
    windowDisplay.value = "";
    memoryDisplay.textContent = ``;
}

function cePress(){
    x = parseFloat(windowDisplay.value);

    if (total == 0){
        windowDisplay.value = "";
    } else {
        windowDisplay.value = "";
        memoryDisplay.textContent = ``;
        nums.push(x);
    }


}