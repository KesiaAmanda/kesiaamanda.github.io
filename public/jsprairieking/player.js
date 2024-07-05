function Player() {
  this.x = 240;
  this.y = 240;
  this.w = scl;
  this.h = scl;
  this.xdir = 0;
  this.ydir = 0;
  this.moveSpeed = 3;
  this.movetime = 40;

  this.show = function() {
    if (torso == 'u') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 670, 192, 32, 32);

    } else if (torso == 'l') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 766, 192, 32, 32);

    } else if (torso == 'r') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 702, 192, 32, 32);

    } else if (torso == 'd') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 734, 192, 32, 32);

    } else if (facing == 'u') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 670, 192, 32, 32);

    } else if (facing == 'l') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 766, 192, 32, 32);

    } else if (facing == 'r') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 702, 192, 32, 32);

    } else if (facing == 'd') {
      image(king, this.x, this.y, sWidth = 32, sHeight = 32, 734, 192, 32, 32);

    }


    if (keyIsDown(87) || keyIsDown(83) || keyIsDown(65) || keyIsDown(68)) {
      if (this.movetime <= 10) {
        image(king, this.x + 6, this.y + 26, sWidth = 20, sHeight = 6, 708, 242, 20, 6);

      } else if (this.movetime <= 20) {
        image(king, this.x + 6, this.y + 26, sWidth = 20, sHeight = 6, 708, 250, 20, 6);

      } else if (this.movetime <= 30) {
        image(king, this.x + 6, this.y + 26, sWidth = 20, sHeight = 6, 708, 224, 20, 6);

      } else if (this.movetime <= 40) {
        image(king, this.x + 6, this.y + 26, sWidth = 20, sHeight = 6, 708, 250, 20, 6);

      }
      
    } else {
      image(king, this.x + 6, this.y + 26, sWidth = 20, sHeight = 6, 708, 250, 20, 6);
      this.movetime = 40;

      
    }
  }

  this.move = function(x, y) {
    this.xdir = x;
    this.ydir = y;
    if (!coll.r && facing == 'r') {
      this.x += this.xdir * this.moveSpeed;

    } else if (!coll.l && facing == 'l') {
      this.x += this.xdir * this.moveSpeed;

    } else if (!coll.u && facing == 'u') {
      this.y += this.ydir * this.moveSpeed;

    } else if (!coll.d && facing == 'd') {
      this.y += this.ydir * this.moveSpeed;

    }
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.playerUwU = function(tile) {
    if (tile.type == 5 || tile.type == 2) {
      if (touchingor(player, tile)) {
        if (facing == "u") {
          this.y += this.moveSpeed;
          coll = true;
        }
        if (facing == "d") {
          this.y -= this.moveSpeed;
          coll = true;
        }
        if (facing == "l") {
          this.x += this.moveSpeed;
          coll = true;
        }
        if (facing == "r") {
          this.x -= this.moveSpeed;
          coll = true;
        }
      }
    }
  }


}