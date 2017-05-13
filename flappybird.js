var flappy;
var pipe;
var pipeWidth;
var speed;
var scl; // width & height of Flappy
var acc; //acceleration
var p; //number of pipes
var r; //radius
var bottomWall = 800;
var rightWall = 800;
var rip;

var score;
var hiscore = 0;

function setup(){
    background(135, 206, 250);
    createCanvas(rightWall,bottomWall);
    reset();
    frameRate(20);
}

function reset(){
    pipe = [];
    pipeWidth = 120;
    speed = 20;
    scl = 40;
    acc = 2;
    p = 3;
    r = scl / 2;
    score = 0;
    rip = false;

    

    for (var i = 0; i <= p; i++){
        pipe[i] = new Pipe(i);
    }
    
    flappy = new Flappy();

    document.getElementById("score").innerHTML = score;
    
}

function draw(){
    background(135, 206, 250);

    flappy.show();
    flappy.move(); 

    for(var i = 0; i <= p; i++){
        pipe[i].show();
    }
    fill(0);
    textSize(150);
    textFont("Verdana");
    text(score, rightWall/2 - 45, 150);
      
}

function keyTyped(){
    if(key === " "){
        flappy.yspeed = -speed + 3;
    }
    if(key === 'r'){
        if(rip === true) {
            flappy.x = 0;
            flappy.y = 0;
            reset();
            //console.log("reset");
            loop();
        }
    }
}
/*
function mousePressed() {
    if(rip === true) {
        loop();
        reset();
        console.log("reset");
    }
}
*/