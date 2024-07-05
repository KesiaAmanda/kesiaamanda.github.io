function Enemy(x, y, type) {
  this.x = x;
  this.y = y;
  this.w = scl;
  this.xdir = 0;
  this.ydir = 0;
  this.type = type;
  this.moveTime = 30;
  this.facing = "";
  this.collided = false;
  this.canfly = false;
  this.movetime = 20;
  
  switch (this.type) {
    case 0:
      this.speed = 2;
      this.health = 1;
      break;
    case 1:
      this.speed = 1;
      this.health = 3;
      break;
    case 2:
      this.speed = 3;
      this.health = 2;
      break;
    case 3:
      this.speed = 2;
      this.health = 1;
      this.canfly = true;
      break;
    case 4:
      this.speed = 1;
      this.health = 4;
      break;
  }


  this.move = function() {
    var dir = (180 / Math.PI) * Math.atan(1.0 * (player.y - this.y) / (player.x - this.x));
    //atan(1.0*(player.y-this.y)/(player.x-this.x));
    //atan2(1.0*(player.y-this.y)/(player.x-this.x));
    if (dir >= 45) {
      if (player.y < this.y) {
        this.ydir = -this.speed;
        this.xdir = 0;
        this.facing = "u";


      } else {
        this.ydir = this.speed;
        this.xdir = 0;
        this.facing = "d";

      }
    } else {
      if (player.x < this.x) {
        this.xdir = -this.speed;
        this.ydir = 0;
        this.facing = "l"

      } else {
        this.xdir = this.speed;
        this.ydir = 0;
        this.facing = "r";

      }
    }
  }

  this.moveing = function() {
    this.x += this.xdir;
    this.y += this.ydir;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }


  this.show = function() {
    switch (this.type) {
      case 0:
        if (this.movetime <= 10) {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 446, 128, 32, 32);
          
      } else {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 478, 128, 32, 32);
        
      }
        break;
      case 1:
        if (this.movetime <= 10) {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 574, 128, 32, 32);
          
      } else {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 606, 128, 32, 32);
        
      }
        break;
      case 2:
        if (this.movetime <= 10) {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 766, 128, 32, 32);
    
      } else {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 798, 128, 32, 32);
        
      }
        break;
      case 3:
        if (this.movetime <= 10) {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 510, 128, 32, 32);
    
      } else {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 542, 128, 32, 32);
        
      }
        break;
      case 4:
        if (this.movetime <= 10) {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 638, 128, 32, 32);
    
      } else {
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 670, 128, 32, 32);
        
      }
        break;
    }
  }
}