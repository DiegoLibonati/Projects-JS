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
    board.append(bullet);
    bullet.style.left = `${currentUser[0]}px`;
    bullet.style.bottom = `10px`;
    bulletsArray.push(10);
}

function moveBullet(){
    const bullet = document.querySelector(".bullet");
    const boardPosition = board.getBoundingClientRect();

    if (bulletsArray < 1){
        document.addEventListener("click", createBullets);
    } else {
        const bulletPosition = bullet.getBoundingClientRect();
        bullet.style.bottom = `${bulletsArray[0] += 10}px`;
        document.removeEventListener("click", createBullets);

        if (bulletPosition.x > boardPosition.x + boardPosition.width ||
            bulletPosition.x + bulletPosition.width < boardPosition.x ||
            bulletPosition.y > boardPosition.y + boardPosition.height ||
            bulletPosition.y + bulletPosition.height < boardPosition.y
            ){
                bullet.classList.remove("bullet");
                bullet.remove();
                bulletsArray = [];
        }

    }



    col();

}


function col(){
    const bullets = document.querySelectorAll(".bullet");   
    const enemys = document.querySelectorAll(".enemy");


    bullets.forEach(function(bullet){
        bulletPosition = bullet.getBoundingClientRect();

        for (i = 0; i < enemys.length; i++){
            const enemyPosition = enemys[i].getBoundingClientRect();

            if (bulletPosition.x > enemyPosition.x + enemyPosition.width ||
                bulletPosition.x + bulletPosition.width < enemyPosition.x ||
                bulletPosition.y > enemyPosition.y + enemyPosition.height ||
                bulletPosition.y + bulletPosition.height < enemyPosition.y
                ){
                    console.log("No collision with Cars")
            } else {
                    bullet.classList.remove("bullet");
                    enemys[i].classList.remove("enemy");
                    bullet.remove();
                    bulletsArray = [];
            }

        }
    });
}

// call f 
createEnemys();
createUser();

// Events
document.addEventListener("keydown", moveUser);


// intervals
setInterval(moveBullet, 50);





