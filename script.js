// lauko dydis 20x20
// gyvateles dydis 3 laukeliai, auga suvalgius maista
// maisto dydis 1 laukelis
// 1 gyvatels laukelis negali susiliesti su likusiais gyvates laukeliais
// galima judeti tik 20x20 lauke
// zaidimas prasideda lauko viduryje, paspaudus judejimo krypti nurodancia rodykle
// maistas atsiranda 20x20 lauko ribose atsitiktinose laisvose vietose
// zaidimas baigiasi, kai gyvatele ipuola arba i save arba i ribas



let WIDTH = 20;
let HEIGHT = 20;
let moveDirection = 'right'; 'left';'up';'down'
//            x, y
// snake = [[23,23],[24,23],[25,23]]
// food =  [3,4] //[x,y]
function draw(food, snake) {
	let PIXEL_SIZE = 20;
	let BORDER = 2;

	stage = document.getElementById('stage');
	stage.width = WIDTH*PIXEL_SIZE;
	stage.height = HEIGHT*PIXEL_SIZE;

	context = stage.getContext('2d');
	context.clearRect(0, 0, stage.width, stage.height);

	context.fillStyle = 'red';
	context.fillRect(food[0] * PIXEL_SIZE + BORDER, food[1] * PIXEL_SIZE + BORDER, PIXEL_SIZE - 2 * BORDER, PIXEL_SIZE - 2 * BORDER);

	context.fillStyle = 'blue';
	for (snakeLeg of snake) {
		context.fillRect(snakeLeg[0] * PIXEL_SIZE + BORDER, snakeLeg[1] * PIXEL_SIZE + BORDER, PIXEL_SIZE - 2 * BORDER, PIXEL_SIZE - 2 * BORDER);
	}
}

// snake = [[2,0], [1,0], [0,0]]
// snake = [[1,0], [0,0]]
function moveRight(snake) {
     var snakeHead = snake[snake.length - 1];
     var snakeHeadX = snakeHead[0];
     var snakeHeadY = snakeHead[1];
     var newSnakeHead = [snakeHeadX + 1, snakeHeadY];

  snake.push(newSnakeHead);
  snake.shift();
}

function moveLeft(snake) {
	 var snakeHead = snake[snake.length - 1];
     var snakeHeadX = snakeHead[0];
     var snakeHeadY = snakeHead[1];
     var newSnakeHead = [snakeHeadX - 1, snakeHeadY];

  snake.push(newSnakeHead);
  snake.shift();
}

function moveDown (snake) {
	 var snakeHead = snake[snake.length - 1];
     var snakeHeadX = snakeHead[0];
     var snakeHeadY = snakeHead[1];
     var newSnakeHead = [snakeHeadX, snakeHeadY + 1];

  snake.push(newSnakeHead);
  snake.shift();
}

function moveUp (snake) {
	 var snakeHead = snake[snake.length - 1];
	 var snakeHeadX = snakeHead[0]
     var snakeHeadY = snakeHead[1];
     var newSnakeHead = [snakeHeadX, snakeHeadY - 1];

  snake.push(newSnakeHead);
  snake.shift();
}

// main method
document.addEventListener('DOMContentLoaded', function() {
      var snake = [[0, 0], [1, 0], [2, 0]];
      var food =[3,4];
      draw(food, snake);
      
	// game loop - execute every 500ms
	window.setInterval(function () {
        if (moveDirection === 'right') {
            moveRight(snake);
        }
        if (moveDirection === 'left') {
            moveLeft(snake);
        }
        if (moveDirection === 'up'){
            moveUp(snake);
        }
        if (moveDirection === 'down'){
            moveDown(snake);
        }

	  draw(food, snake);
	}, 500);

	
}, false);

 document.addEventListener("keydown", function (e) {
   

    // left
    if(e.keyCode === 37 || e.keyCode === 65){
        moveDirection ='left';  
    }

    // right
    if(e.keyCode === 39 || e.keyCode === 68){    
        moveDirection = 'right';
    }

    // up
    if( e.keyCode === 38 || e.keyCode === 87){
        moveDirection = 'up';
    }

    // down
    if(e.keyCode === 40 || e.keyCode === 83){
        moveDirection = 'down';
    }                 
    });

// 1. print to console, what key was pressed (add key listener on canvas).
// 2. save last pressed direction key and print it in game loop.