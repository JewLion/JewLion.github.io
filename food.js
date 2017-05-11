function Food(){
    this.x = Math.floor(Math.random() * rightWall);
    this.y = Math.floor(Math.random() * bottomWall);
    this.xpos = this.x - (this.x % scl);
    this.ypos = this.y - (this.y % scl);
    /*
    console.log("X: " + this.x);
    console.log("Xpos: " + this.xpos);
    console.log("Y: " + this.y);
    console.log("Ypos: " + this.ypos);
    */
    
    this.show = function(){
        fill(255, 0, 0);
        rect(this.xpos, this.ypos, scl, scl);
    }
}
