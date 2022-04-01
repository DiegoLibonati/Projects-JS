const gridDisplay = document.querySelector(".grid");

const gridArray = [];
let ratArray = [];
let contador = 0;
let runTime = 60;

gridCreate();

function gridCreate(){
    for (i = 0; i < 25; i++){
        const grid = document.createElement("div");
        grid.setAttribute("id", i);
        gridDisplay.append(grid);
        gridArray.push(i);
    }
}

function spawnRandom(){
    random = Math.floor(Math.random() * gridArray.length);
    return random
}

function spawnEnemy(){

    let numberRandom = spawnRandom();

    const spawnRat = document.getElementById(`${numberRandom}`);

    const rat = document.createElement("img");

    ratArray.push(rat);

    rat.setAttribute("src", "rata.png");
    rat.setAttribute("class", "rat");

    spawnRat.append(rat);

    rat.addEventListener("click", (e)=>{
        ratArray = [];
        removeRat();
        contador++
        scoreUpdate();
    });

    if (ratArray.length >= 1){
            ratArray = [];
            setTimeout(removeRat, 2000);
        } else {
            console.log("Error.");
        }

}

function removeRat(){
    const getRat = document.querySelector(".rat");

    try{
        getRat.remove();
    }catch(e){
        console.log("Nada que remover")
    }
   
}

function scoreUpdate(){
    document.getElementById("score").innerHTML = contador;
}

function timeConfig(){
    runTime--

    if(runTime == 0){
        clearInterval(clearTime);
        clearInterval(clearGame);
        document.getElementById("time").innerHTML = 0;
    } else {
        document.getElementById("time").innerHTML = runTime;
    }
}

const clearGame = setInterval(spawnEnemy, 3000);
const clearTime = setInterval(timeConfig, 1000);




