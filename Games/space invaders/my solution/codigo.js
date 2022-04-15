const board = document.querySelector(".board");

const userStart = [100, 10];
let currentUser = userStart;

let bulletsArray = [];

class invaders{
    constructor(x, y){
        this.coord = [x,y];
    }
}

const invadersArray = [
    new invaders (20, 420),
    new invaders (50, 420),
    new invaders (80, 420),
    new invaders (110, 420),
    new invaders (140, 420),
    new invaders (170, 420),
    new invaders (200, 420),
    new invaders (230, 420),
];

function createEnemys(){
    for (i = 0; i < invadersArray.length; i++){
        const enemy = document.createElement("div");
        enemy.setAttribute("class", "enemy");
        enemy.setAttribute("id", `${i}`);
        board.append(enemy);
        enemy.style.left = `${invadersArray[i].coord[0]}px`;
        enemy.style.bottom = `${invadersArray[i].coord[1]}px`;
    }
}

function createUser(){
    const user = document.createElement("div");
    user.setAttribute("class", "user");
    board.append(user);
    user.style.left = `${currentUser[0]}px`;
    user.style.bottom = `${currentUser[1]}px`;
}

function moveUser(e){
    const user = document.querySelector(".user");

    switch(e.key){
        case "ArrowLeft":
            user.style.left = `${currentUser[0] -= 10}px`;
            break;
        case "ArrowRight":
            user.style.left = `${currentUser[0] += 10}px`;
            break;
    }
}

function createBullets(){
    const bullet = document.createElement("div");
    bullet.setAttribute("class", "bullet");
    bullet.setAttribute("id", `f${i}`);
    board.append(bullet);
    bullet.style.left = `${currentUser[0]}px`;
    bullet.style.bottom = `10px`;
    bulletsArray.push(10);
}

function moveBullet(){

        for (i = 0; i < bulletsArray.length; i++){
            const bullet = document.getElementById(`f${i}`);
            bullet.style.bottom =  `${bulletsArray[i] += 10}px`

            if (bulletsArray[i] > 600){
                bullet.style.left = `10px`;
                bullet.style.bottom = `600px`;
            }


        }

}


// call f 
createEnemys();
createUser();

// Events
document.addEventListener("keydown", moveUser);
document.addEventListener("click", createBullets);

// intervals
setInterval(moveBullet, 50);





