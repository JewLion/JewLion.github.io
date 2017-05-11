var snake;
var food;

var score = 0;
var scl = 10;
var leftWall = 0;
var rightWall = 800;
var topWall = 0;
var bottomWall = 800;

function setup(){
    createCanvas(rightWall,bottomWall);
    background(0);
    snake = new Snake();
    food = new Food();
    document.getElementById("score").innerHTML = 0;
    frameRate(20);
}

function draw(){
    background(0);
    snake.move();  
    food.show();
    snake.show();
    if (snake.eat()){
        food = new Food();
        if (this.score < snake.total){
            document.getElementById("score").innerHTML = snake.total;
            this.score = snake.total;
        }
    }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function keyPressed(){
    
    if (keyCode == LEFT_ARROW){
        if (snake.xspeed != 1){        
            snake.dir(-1, 0);
            await sleep(30);
        }
    } else if (keyCode == RIGHT_ARROW){
        if (snake.xspeed != -1){
            snake.dir(1, 0);
            await sleep(30);
        }
    } else if (keyCode == UP_ARROW){
        if (snake.yspeed != 1){
            snake.dir(0, -1);
            await sleep(30);
        }
    } else if (keyCode == DOWN_ARROW){
        if (snake.yspeed != -1){
            snake.dir(0, 1);
            await sleep();
        }
    }
}

function mousePressed(){
    if(snake.endGame()){
        snake = new Snake();
        food = new Food();
        loop();
        document.getElementById("endgame").innerHTML = "";
    } else{
        loop();
    }
}



