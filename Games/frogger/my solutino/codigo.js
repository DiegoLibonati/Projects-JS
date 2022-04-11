const boardDisplay = document.querySelector(".section_container");
const turret = document.querySelector(".turret");
const turret2 = document.querySelector(".turret2");
const displayBridge = document.querySelector(".puente");
const boardDisplayWidth = boardDisplay.offsetWidth;
const boardDisplayHeight = boardDisplay.offsetHeight;
const enemyWidth = 61;
const enemyHeight = 23;

class Cars{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

const spawnsRandomNegative = [];
const spawnsRandomPositive = [];
let isDisplay = [];

randomSpawn();

const carsCreate = [
    new Cars(-`${spawnsRandomNegative[0]}`, 50),
    new Cars(-`${spawnsRandomNegative[1]}`, 50),
    new Cars(-`${spawnsRandomNegative[2]}`, 50),
    new Cars(-`${spawnsRandomNegative[3]}`, 50),
    new Cars(spawnsRandomPositive[0], 50),
    new Cars(spawnsRandomPositive[1], 50),
    new Cars(spawnsRandomPositive[2], 50),
    new Cars(spawnsRandomPositive[3], 50),
    new Cars(spawnsRandomPositive[4], 50),
    new Cars(spawnsRandomPositive[5], 50),
    new Cars(spawnsRandomPositive[6], 50),
    new Cars(spawnsRandomPositive[7], 50),
    new Cars(spawnsRandomPositive[0], 100),
    new Cars(spawnsRandomPositive[1], 100),
    new Cars(spawnsRandomPositive[2], 100),
    new Cars(spawnsRandomPositive[3], 100),
    new Cars(spawnsRandomPositive[4], 100),
    new Cars(spawnsRandomPositive[5], 100),
    new Cars(spawnsRandomPositive[6], 100),
    new Cars(spawnsRandomPositive[7], 100),
    new Cars(`${0 + turret.offsetWidth}`, 215),
    new Cars(`${boardDisplayWidth - turret2.offsetWidth}`, 214),
];

let userStart = [250,0];
let currentPositionUser = userStart;

let enemyStart;
let currentPositionEnemy;

let gameOver = false;

createEnemys();
createUser();
userDraw();
detectCollision();

const enemy = document.querySelector(".enemy"); 
const user = document.querySelector(".user"); 

let wastedAudio = new Audio("wasted.ogg");

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
        spawnPositionCars();
        randomSprite(enemy);
    }    
}

function moveEnemy(){
    drawEnemy();
    detectCollision();
}

function drawEnemy(){
    const turret = document.querySelector(".turret");
    const turret2 = document.querySelector(".turret2");
    
    for (i = 0; i < carsCreate.length; i++){
        let newCar = document.getElementById(`${i}`);
        
        newCar.style.left = currentPositionEnemy[0];
        newCar.style.bottom = currentPositionEnemy[1];

        if (carsCreate[i].x > boardDisplayWidth && carsCreate[i].y === 50){
            carsCreate[i].x = -50
            currentPositionEnemy[0] = `${carsCreate[i].x += 10}px`
        } else if (carsCreate[i].x < 0 && carsCreate[i].y === 100){
            carsCreate[i].x = boardDisplayWidth + 50
            currentPositionEnemy[0] = `${carsCreate[i].x -= 10}px`
        } else {
            if (carsCreate[i].y === 100){
                newCar.style.transform = "rotate(180deg)"
                newCar.style.left = `${carsCreate[i].x -= 10}px`;
            } else if (carsCreate[i].y === 50){
                newCar.style.left = `${carsCreate[i].x += 10}px`
            } else if (carsCreate[i].y === 215){
                if (carsCreate[i].x > boardDisplayWidth - turret2.offsetWidth){
                    carsCreate[i].x = 50;
                }
                newCar.style.backgroundImage = "url(https://thepngstock.com/storage/bullet-art-design-2d-and-3d-vector.png-thu_b18ec332-2592-442e-aa4e-326b06be117b.png)"
                newCar.style.left = `${carsCreate[i].x += 10}px`
            } else if (carsCreate[i].y === 214){
                if (carsCreate[i].x < 0 + turret.offsetWidth){
                    carsCreate[i].x = boardDisplayWidth - turret2.offsetWidth;
                }
                newCar.style.backgroundImage = "url(https://thepngstock.com/storage/bullet-art-design-2d-and-3d-vector.png-thu_b18ec332-2592-442e-aa4e-326b06be117b.png)"
                newCar.style.left = `${carsCreate[i].x -= 10}px`
                newCar.style.transform = "rotate(180deg)"
            }
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
        user.style.left = `${currentPositionUser[0] -= 20}px`;
        detectCollision();
        userDraw();
        break;

        case "ArrowRight":
        user.style.left = `${currentPositionUser[0] += 20}px`;
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

    const turretOne = document.querySelector(".turret");
    const turretTwo = document.querySelector(".turret2");
    const displayWater = document.querySelector(".waterImg");
    const user = document.querySelector(".user");
    const displayBridge = document.querySelector(".puente"); 
    const displayWin = document.querySelector(".win");
    userPosition = user.getBoundingClientRect();
    turretOnePosition = turretOne.getBoundingClientRect();
    turretTwoPosition = turretTwo.getBoundingClientRect();
    displayWaterPosition = displayWater.getBoundingClientRect();
    displayBridgePosition = displayBridge.getBoundingClientRect();
    displayWinPosition = displayWin.getBoundingClientRect();

    for (i = 0; i < carsCreate.length; i++){

        if ((currentPositionUser[0] > carsCreate[i].x && currentPositionUser[0] < carsCreate[i].x + enemyWidth) && (currentPositionUser[1] > carsCreate[i].y && currentPositionUser[1] < carsCreate[i].y + enemyHeight)){
            gameOver = true;
            checkGameOver();
            console.log("Auto")
        }
    
        if (currentPositionUser[0] == carsCreate[i].x && currentPositionUser[1] == carsCreate[i].y){
            gameOver = true;
            checkGameOver();
            console.log("Auto 2")
        }
}

if ((userPosition.x > turretOnePosition.x - turretOnePosition.width && userPosition.x < turretOnePosition.x + turretOnePosition.width && userPosition.y > turretOnePosition.y - turretOnePosition.height && userPosition.y < turretOnePosition.y + turretOnePosition.height) ||
(userPosition.x > turretTwoPosition.x - turretTwoPosition.width && userPosition.x < turretTwoPosition.x + turretTwoPosition.width && userPosition.y > turretTwoPosition.y - turretTwoPosition.height && userPosition.y < turretTwoPosition.y + turretTwoPosition.height)){
    gameOver = true;
    checkGameOver();
    console.log("Turret")
}

    if ((userPosition.x > displayWaterPosition.x - displayWaterPosition.width && userPosition.x < displayWaterPosition.x + displayWaterPosition.width && userPosition.y > displayWaterPosition.y - displayWaterPosition.height && userPosition.y < displayWaterPosition.y + displayWaterPosition.height) && 
    !(userPosition.x > displayBridgePosition.x - displayBridgePosition.width && userPosition.x < displayBridgePosition.x + displayBridgePosition.width && userPosition.y > displayBridgePosition.y - displayBridgePosition.height && userPosition.y < displayBridgePosition.y + displayBridgePosition.height)){
        gameOver = true;
        checkGameOver();
        console.log("Agua")
    } else {
        gameOver = false;
        checkGameOver();
}

    if ((userPosition.x > displayWinPosition.x - displayWinPosition.width && userPosition.x < displayWinPosition.x + displayWinPosition.width && userPosition.y > displayWinPosition.y - displayWinPosition.height && userPosition.y < displayWinPosition.y + displayWinPosition.height)){
       gameOver = "win";
       checkGameOver(); 
    }

}



function randomSpawn(){

    // spawns random autos
    for (i = 0; i < 8; i++){
        let randomSpawnNegative = Math.floor(Math.random() * 1000);
        let randomSpawnPositive = Math.floor(Math.random() * boardDisplayWidth);
        spawnsRandomNegative.push(randomSpawnNegative);
        spawnsRandomPositive.push(randomSpawnPositive);
    }

}

function randomSprite(enemy){
        // spawns sprites random
        const sprites = [1, 2];

        let randomSprite = Math.floor(Math.random() * sprites.length);

        if (randomSprite === 0){
            enemy.style.backgroundImage = "url(ar.png)"
        } else if (randomSprite === 1){
            enemy.style.backgroundImage = "url(truck.png)"
        } 
}

function displayGameOver(){
    document.querySelector(".gameover").style.display = "flex";
    document.querySelector(".gameoverImage").style.backgroundImage = "url(gameover.png)";
}

function spawnPositionCars(){
    enemyStart = [carsCreate[i].x, carsCreate[i].y];
    currentPositionEnemy = enemyStart;
}

function checkGameOver(){
    if (gameOver == true){
        clearInterval(intervalMoveEnemy);
        clearInterval(intervalDisplayBridge);
        document.removeEventListener("keydown", moveUser);
        setTimeout(displayGameOver, 2150)
        wastedAudio.play();
    }

    if (gameOver == "win"){
        clearInterval(intervalMoveEnemy);
        clearInterval(intervalDisplayBridge);
        document.removeEventListener("keydown", moveUser);
        console.log("GANASTE")
    }

    gameOver = false;
}

function bridgeDisplay(displayBridge){

    if (isDisplay.includes(1)){
        isDisplay = [];
        displayBridge.style.display = "none";
    } else {
        displayBridge.style.display = "block";
        isDisplay.push(1);
        let randomValueBridge = Math.floor(Math.random() * 2000);
        console.log(randomValueBridge)
        return randomValueBridge
    }


}

// Intervals
let intervalMoveEnemy = setInterval(moveEnemy, 50);
let intervalDisplayBridge = setInterval(function() {bridgeDisplay(displayBridge);}, bridgeDisplay(displayBridge));




