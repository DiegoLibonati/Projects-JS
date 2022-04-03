const userBar = document.querySelector(".user");
const boardGame = document.querySelector(".blocks_container");
const ball = document.querySelector(".ball");

let keyPress;
let i = 0;
let userBarHeight = 20;
let widthUserBar = 100;
let maxBoardWidth = 560;
let maxBoardHeight = 300;
let widthBall = 20;
let widthBallBoard = (maxBoardWidth - widthBall);
let heightBall = 20;
let heightBallBoard = (maxBoardHeight - heightBall);

let userDefaultStart = [230, 10];
let currentPositionUser = userDefaultStart;

let ballDefaultStart = [270, 40];
let currentPositionBall = ballDefaultStart;

let xDirection = 2;
let yDirection = 2;

const blocks = [

];

createBlocks();
userBar.style.left = `${userDefaultStart[0]}px`;
userBar.style.bottom = `${userDefaultStart[1]}px`;

ball.style.left = `${ballDefaultStart[0]}px`;
ball.style.bottom = `${ballDefaultStart[1]}px`;

document.addEventListener("keydown", (e)=>{
    keyPress = e.key;

    userMove(keyPress);

});


function userMove(key){

    if (i > (maxBoardWidth - widthUserBar)){
        userBar.style.left = `${maxBoard - widthUserBar}px`;
        i = maxBoardWidth - widthUserBar;
    }

    else if (i < 0){
        userBar.style.left = 0;
        i = 0;
    } else {
        if (key === "ArrowRight"){
                i++
                userBar.style.left = `${i * 10}px`;
            }
    
        if (key === "ArrowLeft")  {
            i--
            userBar.style.left = `${i*10}px`
        }
    }

}

function createBlocks(){
    for (i = 0; i < 6; i++){
        const block = document.createElement("div");
        block.classList.add("block");
        boardGame.append(block);
        blocks.push(block);
    }
}

function drawBall(){
    ball.style.left = `${currentPositionBall[0]}px`;
    ball.style.bottom = `${currentPositionBall[1]}px`;

}

function moveBall(){
    currentPositionBall[0] += xDirection;
    currentPositionBall[1] += yDirection;
    drawBall();
    checkCollisions();
}

function checkCollisions(){
    //check for wall collisions
    if (currentPositionBall[0] >= (maxBoardWidth - widthBall) || currentPositionBall[1] >=(maxBoardHeight - widthBall) || currentPositionBall[0] <= 0) {
        changeDirection()
    }

    // check for user collision
    if ((currentPositionBall[0] > currentPositionUser[0] && currentPositionBall[0] < currentPositionUser[0] + blockWidth) && (currentPositionBall[1] > currentPositionUser[1] && currentPositionBall[1] < currentPositionUser[1] + blockHeight)){
        changeDirection();
    }

   if (currentPositionBall[1] <= 0){
    clearInterval(endMoveBall);
    }

}

function changeDirection(){


    if (xDirection === 2 && yDirection === 2){
        yDirection = -2;
        return
    }
    if (xDirection === 2 && yDirection === -2){
        xDirection = -2;
        return
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
        return
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return
    }


}

let endMoveBall = setInterval(moveBall, 10);