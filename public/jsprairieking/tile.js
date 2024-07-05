function Tile(x, y){
  this.x = x * scl;
  this.y = y * scl;
  this.w = scl;
  this.type = 0;
  
  this.show = function(){
    imageMode(CORNER);
    switch(this.type){
      case 0:
        image(tiless, this.x, this.y, sWidth = 32, sHeight = 32, 68, 0, 32, 32);
        break;
      case 1:
        image(tiless, this.x, this.y, sWidth = 32, sHeight = 32, 136, 0, 32, 32);
        break;
      case 2:
        image(king, this.x, this.y, sWidth = 32, sHeight = 32, 894, 64, 32, 32);
        break;
      case 3:
        image(tiless, this.x, this.y, sWidth = 32, sHeight = 32, 34, 0, 32, 32);
        break;
      case 4:
        image(tiless, this.x, this.y, sWidth = 32, sHeight = 32, 102, 0, 32, 32);
        break;
      case 5:
        image(tiless, this.x, this.y, sWidth = 32, sHeight = 32, 0, 0, 32, 32);
    }
    noStroke();
    
  }
  
  this.setType = function(type){
    this.type = type;
  }
}