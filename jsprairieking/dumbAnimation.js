function uggggg(x, y){
  this.x = x;
  this.y = y;
  this.w = scl;
  this.time = 330;
  
  this.show = function(){
    if(this.time < 255){
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 928, 96, 32, 32);
    } else if (this.time < 270){
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 896, 96, 32, 32);
    } else if (this.time < 285){
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 864, 96, 32, 32);
    } else if (this.time < 300){
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 832, 96, 32, 32);
    } else if (this.time < 315){
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 800, 96, 32, 32);
    } else{
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 768, 96, 32, 32);
    }
  }
  
}