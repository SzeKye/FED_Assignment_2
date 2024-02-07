const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".current-score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
const APIKEY = "65c2573e71a488dc268b0930"
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let directionX = 0, directionY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;
const updateFoodPosition = () => {
    // Randomly place the food
    foodX = Math.floor(Math.random() * 35) + 1;
    foodY = Math.floor(Math.random() * 35) + 1;
}
const handleGameOver = async () => {
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert(`Game Over! Your score is ${score}`);
    currentUser.gameScore = score;
    currentUser.gameTry = 1;
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${currentUser._id}`, {
        method: 'PUT',
        headers: {  
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
    });
    window.location.href = "home.html";
}
const changeDirection = e => {
    // This if else block is for them to change their direction and make sure they are unable to turn back
    if(e.key === "ArrowUp" && directionY != 1) {
        directionX = 0;
        directionY = -1;
    } else if(e.key === "ArrowDown" && directionY != -1) {
        directionX = 0;
        directionY = 1;
    } else if(e.key === "ArrowLeft" && directionX != 1) {
        directionX = -1;
        directionY = 0;
    } else if(e.key === "ArrowRight" && directionX != -1) {
        directionX = 1;
        directionY = 0;
    }
}
// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));
const initGame = () => {
    if(gameOver) return handleGameOver(); //call handleGameOver function if game is over
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    // Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
        score++; // increment score by 1
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Updating the snake's head position based on the current direction
    snakeX += directionX;
    snakeY += directionY;
    
    // Shifting forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position
    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }
    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}
updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);