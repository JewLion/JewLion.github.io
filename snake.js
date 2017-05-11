function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.rip = false;
    this.score = 0;

    fill(0, 191, 63);
    
    rect(0, 0, scl, scl);

    this.dir = function(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }

    this.move = function (){
        for (var i = 0; i < this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                console.log("End Game!");
                this.endGame();
                document.getElementById("endgame").innerHTML = "You Lost";
                this.rip = true;
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);
        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        if(this.x > rightWall-scl || this.x < leftWall || this.y < topWall || this.y > bottomWall-scl){
            console.log("End Game!");
            this.endGame();
            document.getElementById("endgame").innerHTML = "You Lost";
            this.rip = true;
        }

        // this.x = constrain(this.x, leftWall, rightWall - scl);
        // this.y = constrain(this.y, topWall, bottomWall - scl);

      
    }

    this.show = function(){
        fill(0, 191, 63);
        for (var i = 0; i < this.total; i++){
            fill(0, 191, 63);
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl)
    }

    this.eat = function(){
        if (Math.abs(this.x - food.xpos) < scl/4 && Math.abs(this.y - food.ypos) < scl/4){
            //console.log('Yum!');
            this.total++;

            return true;
        }
    }

    this.endGame = function(){
        noLoop();
        this.total = 0;
        
        return this.rip;
    }

}


