// lauko dydis 20x20
// gyvateles dydis 3 laukeliai, auga suvalgius maista
// maisto dydis 1 laukelis
// 1 gyvatels laukelis negali susiliesti su likusiais gyvates laukeliais
// galima judeti tik 20x20 lauke
// zaidimas prasideda lauko viduryje, paspaudus judejimo krypti nurodancia rodykle
// maistas atsiranda 20x20 lauko ribose atsitiktinose laisvose vietose
// zaidimas baigiasi, kai gyvatele ipuola arba i save arba i ribas



const WIDTH = 20;
const HEIGHT = 20;
let moveDirection = 'right';
//            x, y
// snake = [[23,23],[24,23],[25,23]]
// food =  [3,4] //[x,y]
function draw(food, snake) {
    const PIXEL_SIZE = 20;
    const BORDER = 2;

    let stage = document.getElementById('stage');
    stage.width = WIDTH * PIXEL_SIZE;
    stage.height = HEIGHT * PIXEL_SIZE;

    let context = stage.getContext('2d');
    context.clearRect(0, 0, stage.width, stage.height);

    context.fillStyle = 'red';
    context.fillRect(food[0] * PIXEL_SIZE + BORDER, food[1] * PIXEL_SIZE + BORDER, PIXEL_SIZE - 2 * BORDER, PIXEL_SIZE - 2 * BORDER);

    context.fillStyle = 'blue';
    for (snakeLeg of snake) {
        context.fillRect(snakeLeg[0] * PIXEL_SIZE + BORDER, snakeLeg[1] * PIXEL_SIZE + BORDER, PIXEL_SIZE - 2 * BORDER, PIXEL_SIZE - 2 * BORDER);
    }
}

function moveRight(snake) {
    let snakeHead = snake[snake.length - 1];
    let snakeHeadX = snakeHead[0];
    let snakeHeadY = snakeHead[1];
    let newSnakeHead = [snakeHeadX + 1, snakeHeadY];

    snake.push(newSnakeHead);
    snake.shift();
}

function moveLeft(snake) {
    let snakeHead = snake[snake.length - 1];
    let snakeHeadX = snakeHead[0];
    let snakeHeadY = snakeHead[1];
    let newSnakeHead = [snakeHeadX - 1, snakeHeadY];

    snake.push(newSnakeHead);
    snake.shift();
}

function moveDown(snake) {
    let snakeHead = snake[snake.length - 1];
    let snakeHeadX = snakeHead[0];
    let snakeHeadY = snakeHead[1];
    let newSnakeHead = [snakeHeadX, snakeHeadY + 1];

    snake.push(newSnakeHead);
    snake.shift();
}

function moveUp(snake) {
    let snakeHead = snake[snake.length - 1];
    let snakeHeadX = snakeHead[0]
    let snakeHeadY = snakeHead[1];
    let newSnakeHead = [snakeHeadX, snakeHeadY - 1];

    snake.push(newSnakeHead);
    snake.shift();
}


/** returns random Integer between min and max (inclusive) */
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// main method
document.addEventListener('DOMContentLoaded', function () {
    let snake = [[0, 0], [1, 0], [2, 0]];
    let food = [getRandom(0, WIDTH), getRandom(0, HEIGHT)];
    draw(food, snake);

    // game loop - execute every 500ms
    window.setInterval(function () {
        if (moveDirection === 'right') {
            moveRight(snake);
        }
        if (moveDirection === 'left') {
            moveLeft(snake);
        }
        if (moveDirection === 'up') {
            moveUp(snake);
        }
        if (moveDirection === 'down') {
            moveDown(snake);
        }

        draw(food, snake);
    }, 500);


}, false);

document.addEventListener("keydown", function (e) {
    // left
    if (e.keyCode === 37 || e.keyCode === 65) {
        moveDirection = 'left';
    }

    // right
    if (e.keyCode === 39 || e.keyCode === 68) {
        moveDirection = 'right';
    }

    // up
    if (e.keyCode === 38 || e.keyCode === 87) {
        moveDirection = 'up';
    }

    // down
    if (e.keyCode === 40 || e.keyCode === 83) {
        moveDirection = 'down';
    }
});