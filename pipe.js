function Pipe(i){
    this.x = 500 + i*300;
    
    this.yBottom = Math.random() * 500 + 150;
    this.yTop = this.yBottom - 150;

    this.xspeed = -5;

    this.show = function(){
        fill(0, 255, 120);
        rect(this.x, this.yBottom, pipeWidth, 1000);
        rect(this.x, this.yTop - 1000, pipeWidth, 1000);
        this.x += this.xspeed;
        if (this.x < -pipeWidth){
            this.x = 1050;
        }
        
        if (flappy.x >= this.x && flappy.x <= this.x + pipeWidth && (flappy.y >= this.yBottom || flappy.y <= this.yTop)){
            this.end();
        }
        if (dist(this.x, this.yBottom, flappy.x, flappy.y) < r-3){
            this.end();
        }
        if (dist(this.x, this.yTop, flappy.x, flappy.y) < r-3){
            this.end();
        }
        if (dist(this.x + pipeWidth, this.yBottom, flappy.x, flappy.y) < r-3){
            this.end();
        }
        if (dist(this.x + pipeWidth, this.yTop, flappy.x, flappy.y) < r-3){
            this.end();
        }
        if (dist(this.x + pipeWidth/2, this.yBottom, flappy.x, flappy.y) < r-3){
            this.end();
        }
        if (dist(this.x + pipeWidth/2, this.yTop, flappy.x, flappy.y) < r-3){
            this.end();
        }

        if (flappy.x === this.x + pipeWidth / 2) {
            score++;

            //document.getElementById("score").innerHTML = score;
            if (score >= hiscore) {
                hiscore = score;
                document.getElementById("hiscore").innerHTML = hiscore;
            }
        }
        
    }
    this.end = function(){
        noLoop();
        rip = true;
        document.getElementById("restart").innerHTML = "You died. Press R to restart";
    }

}
