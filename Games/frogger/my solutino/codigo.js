const boardDisplay = document.querySelector(".section_container");


let userStart = [250,0];
let currentPositionUser = userStart;

let enemyStart = [-50,50];
let currentPositionEnemy = enemyStart;


createEnemys();
createUser();
enemyDraw();
userDraw();

const enemy = document.querySelector(".enemy"); 

const enemyWidth = enemy.offsetWidth;
const enemyHeight = enemy.offsetHeight;
const boardDisplayWidth = boardDisplay.offsetWidth;
const boardDisplayHeight = boardDisplay.offsetHeight;


// Add events listeners
document.addEventListener("keydown", moveUser);

// functions 

// F Enemy
function createEnemys(){
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    boardDisplay.append(enemy);
}
function enemyDraw(){
    const enemy = document.querySelector(".enemy"); 
    enemy.style.left = `${currentPositionEnemy[0]}px`;
    enemy.style.bottom = `${currentPositionEnemy[1]}px`;
}
function moveEnemy(){
    enemyDraw();
    detectCollision();
    resetEnemy();

}
function resetEnemy(){
    if (currentPositionEnemy[0] > boardDisplayWidth){
        currentPositionEnemy = [-50, 50];
        enemy.style.left = `${currentPositionEnemy[0] += 10}px`;
    } else {
        enemy.style.left = `${currentPositionEnemy[0] += 10}px`;
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

    if ((currentPositionEnemy[0] > currentPositionUser[0] && currentPositionEnemy[0] < currentPositionUser[0] + enemyWidth) && (currentPositionUser[1] == currentPositionEnemy[1])){
        console.log("perdiste")
    }

    if ((currentPositionEnemy[1] > currentPositionUser[1] && currentPositionEnemy[1] < currentPositionUser[1] + enemyHeight) && (currentPositionUser[0] == currentPositionEnemy[0])){
        console.log("perdiste")
    }

    if (currentPositionEnemy[0] === currentPositionUser[0] && currentPositionEnemy[1] === currentPositionUser[1]){
        console.log("lose")
    }
}

// Intervals
setInterval(moveEnemy, 50);




