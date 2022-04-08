const enemyWidth = 61;
const enemyHeight = 23;

class Cars{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

const spawnsRandom = [];

randomSpawn();

const carsCreate = [
    new Cars(-`${spawnsRandom[0]}`, 50),
    new Cars(-`${spawnsRandom[1]}`, 50),
    new Cars(-`${spawnsRandom[2]}`, 50),
    new Cars(-`${spawnsRandom[3]}`, 50),
    new Cars(-`${spawnsRandom[4]}`, 50),
    new Cars(-`${spawnsRandom[5]}`, 50),
    new Cars(-`${spawnsRandom[6]}`, 50),
    new Cars(-`${spawnsRandom[7]}`, 50)
]

const boardDisplay = document.querySelector(".section_container");

let userStart = [250,0];
let currentPositionUser = userStart;

let enemyStart = [0, 50];
let currentPositionEnemy = enemyStart;

createEnemys();
createUser();
userDraw();
detectCollision();

const enemy = document.querySelector(".enemy"); 
const user = document.querySelector(".user"); 

const boardDisplayWidth = boardDisplay.offsetWidth;
const boardDisplayHeight = boardDisplay.offsetHeight;

let wastedAudio = new Audio("wasted.ogg");




console.log(carsCreate)
// Add events listeners
document.addEventListener("keydown", moveUser);

// functions 

// F Enemy
function createEnemys(){
    for (i = 0; i < carsCreate.length; i++){
        const enemy = document.createElement("div");
        enemy.setAttribute("class", "enemy");
        enemy.setAttribute("id", i);
        boardDisplay.append(enemy);
        enemy.style.left = `${carsCreate[i].x}px`;
        enemy.style.bottom = `${carsCreate[i].y}px`;
    }    
}

function moveEnemy(){
    drawEnemy();
    detectCollision();
}

function drawEnemy(){
    
    for (i = 0; i < carsCreate.length; i++){
        let newCar = document.getElementById(`${i}`);

        newCar.style.left = currentPositionEnemy[0];
        newCar.style.bottom = currentPositionEnemy[1];

        if (carsCreate[i].x > boardDisplayWidth){
            carsCreate[i].x = -50
            currentPositionEnemy[0] = `${carsCreate[i].x += 10}px`
        } else {
            currentPositionEnemy[0] = `${carsCreate[i].x += 10}px`
        }
    }

}

// F User
function createUser(){
    const user = document.createElement("div");
    user.classList.add("user");
    boardDisplay.append(user);    
}
function userDraw(){
    const user = document.querySelector(".user"); 
    user.style.left = `${currentPositionUser[0]}px`;
    user.style.bottom = `${currentPositionUser[1]}px`;
}
function moveUser(e){
    const user = document.querySelector(".user"); 
    switch(e.key){

        case "ArrowLeft":
        user.style.left = `${currentPositionUser[0] -= 10}px`;
        detectCollision();
        userDraw();
        break;

        case "ArrowRight":
        user.style.left = `${currentPositionUser[0] += 10}px`;
        detectCollision();
        userDraw();
        break;

        case "ArrowUp":
        user.style.bottom = `${currentPositionUser[1] += 10}px`
        detectCollision();
        userDraw();
        break;

        case "ArrowDown":
        user.style.bottom = `${currentPositionUser[1] -= 10}px`
        detectCollision();
        userDraw();
        break;
    }
}

// F General
function detectCollision(){

    for (i = 0; i < carsCreate.length; i++){

        if ((currentPositionUser[0] > carsCreate[i].x && currentPositionUser[0] < carsCreate[i].x + enemyWidth) && (currentPositionUser[1] > carsCreate[i].y && currentPositionUser[1] < carsCreate[i].y + enemyHeight)){
            clearInterval(intervalMoveEnemy);
            document.removeEventListener("keydown", moveUser);
            setTimeout(displayGameOver, 2150)
            wastedAudio.play();
        }
    
        if (currentPositionUser[0] == carsCreate[i].x && currentPositionUser[1] == carsCreate[i].y){
            clearInterval(intervalMoveEnemy);
            document.removeEventListener("keydown", moveUser);
            setTimeout(displayGameOver, 2150)
            wastedAudio.play();
        }
    }



}

function randomSpawn(){
    for (i = 0; i < 8; i++){
        let randomSpawn = Math.floor(Math.random() * 1000);
        spawnsRandom.push(randomSpawn);
    }
}

function displayGameOver(){
    document.querySelector(".gameover").style.display = "flex";
    document.querySelector(".gameoverImage").style.backgroundImage = "url(gameover.png)";
}

// Intervals
let intervalMoveEnemy = setInterval(moveEnemy, 200);




