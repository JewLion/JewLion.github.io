function Flappy(){
    this.x = 200;
    this.y = 200;
    
    this.yspeed = 1;
    //console.log("Bird Made");

    this.move = function(){
        this.yspeed += acc;
        this.y += this.yspeed;
        if (this.yspeed > speed) {
            this.yspeed = speed;
        }
    }

    this.show = function(){
        fill(255,255,150);
        ellipse(this.x, this.y, scl, scl);
        if (this.y > bottomWall) {
            noLoop();
        }
    }

}
