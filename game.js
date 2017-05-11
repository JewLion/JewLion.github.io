var snake;
var food;

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
   
    frameRate(20);
}

function draw(){
    background(0);
    snake.move();  
    food.show();
    snake.show();
    if (snake.eat()){
        food = new Food();
    }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function keyPressed(){
    if (snake.xspeed != 1){
        if (keyCode == LEFT_ARROW){
            await sleep(50);
            snake.dir(-1, 0);
        }
    }
    if (snake.xspeed != -1){
        if (keyCode == RIGHT_ARROW){
            await sleep(50);
            snake.dir(1, 0);
            
        }
    }
    if (snake.yspeed != 1){
        if (keyCode == UP_ARROW){
            await sleep(50);
            snake.dir(0, -1);
            
        }
    }
    if (snake.yspeed != -1){
        if (keyCode == DOWN_ARROW){
            await sleep(50);
            snake.dir(0, 1);
            
        }
    }
}

function mousePressed(){
    if(snake.endGame()){
        snake = new Snake();
        food = new Food();
        loop();
    } else{
        loop();
    }
}



