function Bullet(dir){
  this.x = player.x + scl / 2;
  this.y = player.y + scl / 2;
  this.w = 4;
  this.xdir = 0;
  this.ydir = 0;
  this.dir = dir;
  this.donezoed = false;
  
  this.shoot = function(){
    switch(this.dir){
      case "u":
        this.xdir = 0;
        this.ydir = -4;
        break;
      case "d":
        this.xdir = 0;
        this.ydir = 4;
        break;
      case "l":
        this.xdir = -4;
        this.ydir = 0;
        break;
      case "r":
        this.xdir = 4;
        this.ydir = 0;
        break;
        
      case "ur":
        this.xdir = 2;
        this.ydir = -2;
        break;
      case "dr":
        this.xdir = 2;
        this.ydir = 2;
        break;
      case "ul":
        this.xdir = -2;
        this.ydir = -2;
        break;
      case "dl":
        this.xdir = -2;
        this.ydir = 2;
        break;
    }
    this.x += this.xdir;
    this.y += this.ydir;
  }
  
  this.donetile = function(tile){
    if(tile.type == 5 || tile.type == 2){
      var thisbullet = {
        x: this.x,
        y: this.y,
        w: this.w
      }
      if(touchingor(thisbullet, tile))
      this.donezoed = true;
    }
  }
  
  this.show = function(){
    image(king, this.x, this.y, sWidth = 8, sHeight = 8, 512, 330, 8, 8);

  }
  
}