const boardDisplay = document.querySelector(".section_container");

let userStart = [250,0];
let currentPositionUser = userStart;

let enemyStart = [0,30];
let currentPositionEnemy = enemyStart;


const enemy = document.createElement("div");
enemy.classList.add("enemy");
boardDisplay.append(enemy);

const user = document.createElement("div");
user.classList.add("user");
boardDisplay.append(user);

const enemyWidth = enemy.offsetWidth;
const enemyHeight = enemy.offsetHeight;


userDraw();

function userDraw(){
    user.style.left = `${currentPositionUser[0]}px`;
    user.style.bottom = `${currentPositionUser[1]}px`;
}


enemy.style.left = `${currentPositionEnemy[0]}px`;
enemy.style.bottom = `${currentPositionEnemy[1]}px`;


function moveUser(e){
    switch(e.key){

        case "ArrowLeft":
        user.style.left = `${currentPositionUser[0] -= 10}px`;
        if ((currentPositionEnemy[0] > currentPositionUser[0] && currentPositionEnemy[0] > currentPositionUser[0] + enemyWidth) && (currentPositionUser[1] == currentPositionEnemy[1])){
            console.log("perdiste")
        }
        userDraw();
        break;

        case "ArrowRight":
        user.style.left = `${currentPositionUser[0] += 10}px`;
        if ((currentPositionEnemy[0] > currentPositionUser[0] && currentPositionEnemy[0] < currentPositionUser[0] + enemyWidth) && (currentPositionUser[1] == currentPositionEnemy[1])){
            console.log("perdiste")
        }
        userDraw();
        break;

        case "ArrowUp":
        user.style.bottom = `${currentPositionUser[1] += 10}px`
        if ((currentPositionEnemy[1] > currentPositionUser[1] && currentPositionEnemy[1] < currentPositionUser[1] + enemyHeight) && (currentPositionUser[0] == currentPositionEnemy[0])){
            console.log("perdiste")
        }
        userDraw();
        break;

        case "ArrowDown":
        user.style.bottom = `${currentPositionUser[1] -= 10}px`
        if ((currentPositionEnemy[1] < currentPositionUser[1] && currentPositionEnemy[1] < currentPositionUser[1] + enemyHeight) && (currentPositionUser[0] == currentPositionEnemy[0])){
            console.log("perdiste")
        }
        userDraw();
        break;
    }
}

document.addEventListener("keydown", moveUser);

function moveEnemy(){
    enemy.style.left = `${currentPositionEnemy[0] += 10}px`;
}

setInterval(moveEnemy, 1000);

