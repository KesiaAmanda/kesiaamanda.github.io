function Powerup(x, y, type){
  this.x = x;
  this.y = y;
  this.type = type;
  this.time = 300;
  switch(this.type){
    case 0:
      this.w = 17;
      this.h = 17;
      break;
    case 1:
      this.w = 17;
      this.h = 17;
      break;
    case 2:
      this.w = 42;
      this.h = 33;
      break;
    case 3:
      this.w = 36;
      this.h = 36;
      break;
    case 4:
      this.w = 48;
      this.h = 47;
      break;
    case 5:
      this.w = 44;
      this.h = 47;
      break;
  }
  this.used = false;
  
  this.show = function(){
    fill(51);
    imageMode(CORNER);
    switch(this.type){
      case 0:
        image(powerimg, this.x, this.y, sWidth = this.w, sHeight = this.h, 0, 0, 19, 19);
        break;
      case 1:
        image(powerimg, this.x, this.y, sWidth = this.w, sHeight = this.h, 20, 0, 19, 19);
        break;
      case 2:
        image(powerimg, this.x, this.y, sWidth = this.w, sHeight = this.h, 40, 0, 42, 33);
        break;
      case 3:
        image(powerimg, this.x, this.y, sWidth = this.w, sHeight = this.h, 84, 0, 36, 36);
        break;
      case 4:
        image(powerimg, this.x, this.y, sWidth = this.w, sHeight = this.h, 122, 0, 48, 47);
        break;
      case 5:
        image(powerimg, this.x, this.y, sWidth = this.w, sHeight = this.h, 172, 0, 44, 47);
        break;
    }
  }
  
  this.do = function(player){
    var power = {
      x: this.x,
      y: this.y,
      w: this.w,
      h: this.h
    }
    if(otherTouch(player, power)){
      switch(this.type){
        case 0:
          money++;
          break;
        case 1:
          money += 5;
          break;
        case 2:
          lives++;
          break;
      }
      if(currentPower != -1){
        switch(this.type){
          case 3:
        currentPower = -1;
        player.moveSpeed = 4;
        append(powers, new PowerUse());
        break;
      case 4:
        currentPower = -1;
        bulletResetTime = 5;
        append(powers, new PowerUse());
        break;
      case 5:
        currentPower = -1;
        enemys = [];
        break;
            
        }
      }
      this.used = true;
      if(this.type != 0 || this.type != 1 || this.type != 2){
        currentPower = this.type;
      }
    }
  }
  
}
function PowerUse(type){
  this.time = 400;
  this.type = type;
}