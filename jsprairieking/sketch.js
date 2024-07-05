var kingB = [];
var screen = 0;
var squareR = 16;
var scl = 32;
var levelTime = 2700;
var bullets = [];
var bulletReset = 20;
var bulletResetTime = 20;
var enemys = [];
var collectubles = [];
var currentPower = -1;
var powers = [];
var animation = [];
var player;
var lives = 3;
var money = 0;
var facing = 'd';
var screen = 0;
var torso = 'd';
var bossvis = true;
var go = 0;
var instruct = 0;
var coll = {
  u: false,
  r: false,
  d: false,
  l: false
}

function preload() {
  tiless = loadImage("assets/yeee.png");
  tooManyE = loadImage("assets/title.png");
  powerimg = loadImage("assets/pUps.png")
  king = loadImage("assets/king.png")
  notking = loadImage("assets/notking.png")
  gameowo = loadImage("assets/gameo.png")
  end = loadImage("assets/end.png")
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sounds/overworld.mp3');
  hit = loadSound('sounds/hit.mp3');
  shoot = loadSound('sounds/shoot.mp3');
  powerup = loadSound('sounds/powerup.mp3');
  damage = loadSound('sounds/damage.mp3');
  
}

function setup() {
  createCanvas(512, 512);
  press = createImage("assets/press.gif")
  gif_createImg = createImg("assets/press.gif");
  mySound.setVolume(0.2);
  hit.setVolume(0.3);
  shoot.setVolume(0.3);
  powerup.setVolume(0.3);
  damage.setVolume(0.3);
  mySound.loop()
}

//touching function
function touchingor(thing1, thing2) {
  if (thing1 != undefined && thing2 != undefined) {
    if (!(thing1.x >= thing2.x + thing2.w || thing1.x + thing1.w <= thing2.x || thing1.y >= thing2.y + thing2.w || thing1.y + thing1.w <= thing2.y)) {
      return true;
    } else {
      return false;
    }
  }
}

function otherTouch(thing1, thing2) {
  if (!(thing1.x >= thing2.x + thing2.w || thing1.x + thing1.w <= thing2.x || thing1.y >= thing2.y + thing2.h || thing1.y + thing1.h <= thing2.y)) {
    return true;
  } else {
    return false;
  }
}

function moveScreen() {
  if (player.y >= height - scl - 5 && screenTiles[15][7] == 0) {
    screen++;
    levelTime = 2700;
    if (screen == 10) {
      player.y = scl + 1;
      levelTime = -1;
    } else {
      player.y = 0;
    }

    if (collectubles.length > 0) {
      collectubles = [];
    }

    if (animation.length > 0) {
      animation = [];
    }

  }
}

//using powerup
function keyPressed() {
  if (keyCode == 32) {
    switch (currentPower) {
      case 3:
        currentPower = -1;
        player.moveSpeed = 4;
        append(powers, new PowerUse(3));
        break;
      case 4:
        currentPower = -1;
        bulletResetTime = 5;
        append(powers, new PowerUse(4));
        break;
      case 5:
        currentPower = -1;
        enemys = [];
        break;
    }

  }
  //ew
  if (keyCode == 81) {
    append(enemys, new Enemy(100, 100, 0));
    //print(powers[0]);
  }

}

function screens() {
  if (screen == 1) {
    for (var i = 0; i < squareR; i++) {
      kingB[i] = [];
      for (var j = 0; j < squareR; j++) {
        kingB[i][j] = new Tile(i, j);
      }
    }
    player = new Player();



    //append(enemys, new Enemy(100, 100, 0));
    imageMode(CORNER);
    screen = 2;
  }
}


function draw() {
  go++;
   
    
  
  if (screen <= 1) {
    background(2);
    imageMode(CENTER);
    image(tooManyE, 256, 256);
    gif_createImg.position(206, 360);
    screens();

  } else {
    gif_createImg.hide();

  }


  if (keyIsDown(32) && screen == 0) {
    screen = 1;
  }

  if (player != undefined) {



    moveScreen();
    player.movetime--;

    if (player.movetime == -1) {
      player.movetime = 40;
    }
    if (screen != 10) {



      //movement
      if (keyIsDown(87)) {
        if (!coll.u) {
          player.move(0, -1);
          facing = "u";
        }

      } else if (keyIsDown(83)) {
        if (!coll.d) {
          player.move(0, 1);
          facing = "d";
        }
      } else if (keyIsDown(65)) {
        if (!coll.l) {
          player.move(-1, 0);
          facing = "l";
        }
      } else if (keyIsDown(68)) {
        if (!coll.r) {
          player.move(1, 0);
          facing = "r";
        }
      } else {
        player.move(0, 0);
        coll.r = false;
        coll.l = false;
        coll.u = false;
        coll.d = false;
      }
      if (lives > 0 && lives < 100) {
        //bullet creation
        if (keyIsDown(UP_ARROW) && bulletReset < 0) {
          if (keyIsDown(LEFT_ARROW)) {
            append(bullets, new Bullet("ul"));
            shoot.play();
            bulletReset = bulletResetTime;
            torso = 'l';

          } else if (keyIsDown(RIGHT_ARROW)) {
            append(bullets, new Bullet("ur"));
            shoot.play();
            bulletReset = bulletResetTime;
            torso = 'r';

          } else {
            append(bullets, new Bullet("u"));
            shoot.play();
            bulletReset = bulletResetTime;
            torso = 'u';

          }

        } else if (keyIsDown(DOWN_ARROW) && bulletReset < 0) {
          if (keyIsDown(LEFT_ARROW)) {
            append(bullets, new Bullet("dl"));
            shoot.play();
            bulletReset = bulletResetTime;
            torso = 'l';

          } else if (keyIsDown(RIGHT_ARROW)) {
            append(bullets, new Bullet("dr"));
            shoot.play();
            bulletReset = bulletResetTime;
            torso = 'r';

          } else {
            append(bullets, new Bullet("d"));
            shoot.play();
            bulletReset = bulletResetTime;
            torso = 'd';
          }

        } else if (keyIsDown(LEFT_ARROW) && bulletReset < 0) {
          append(bullets, new Bullet("l"));
          shoot.play();
          bulletReset = bulletResetTime;
          torso = 'l';

        } else if (keyIsDown(RIGHT_ARROW) && bulletReset < 0) {
          append(bullets, new Bullet("r"));
          shoot.play();
          bulletReset = bulletResetTime;
          torso = 'r';

        }

        if (!keyIsDown(RIGHT_ARROW)) {
          if (!keyIsDown(UP_ARROW)) {
            if (!keyIsDown(LEFT_ARROW)) {
              if (!keyIsDown(DOWN_ARROW)) {
                torso = null;
              }
            }
          }
        }
      }
    }

    bulletReset--;
    if (levelTime >= 0 && screen != 10) {
      levelTime--;
    }

    //ethan's garbage the sequel
    for (var i = 0; i < squareR; i++) {
      for (var j = 0; j < squareR; j++) {
        kingB[i][j].show();
        kingB[i][j].setType(screenTiles[j][i]);
        player.playerUwU(kingB[i][j]);
        for (var k = 0; k < bullets.length; k++) {
          if (bullets[k] != undefined) {
            bullets[k].donetile(kingB[i][j]);
          }
        }
      }
    }

    for (i = 0; i < animation.length; i++) {
      if (animation[i] != undefined) {
        animation[i].show();
        animation[i].time--;
        if (animation[i].time <= 0) {
          animation.splice(i, 1)
        }
      }
    }

    player.show();
    for (var z = 0; z < powers.length; z++) {
      if (powers[z] != undefined) {
        powers[z].time--;
        if (powers[z].time <= 0) {
          switch (powers[z].type) {
            case 3:
              player.moveSpeed = 3;
              break;
            case 4:
              bulletResetTime = 20;
              break;
          }
          powers.splice(z, 1);
        }
      }
    }

    for (i = 0; i < collectubles.length; i++) {
      if (collectubles[i] != undefined) {
        collectubles[i].show();
        collectubles[i].do(player);
        collectubles[i].time--;
        if (collectubles[i].used) {
          collectubles.splice(i, 1);
          powerup.play();
          
        } else if (collectubles[i].time <= 0) {
          collectubles.splice(i, 1);
        }
      }
    }


    if (levelTime % 450 == 0) {
      var amount = floor(random(1, 3));
      var ePos = [200, 235, 270];
      var type;



      for (var s = 0; s < amount; s++) {
        switch (screen) {
          case 2:
            type = 0;
            break;
          case 4:
            type = floor(random(0, 2));
            break;
          case 6:
            type = floor(random(0, 3));
            break;
          case 8:
            type = floor(random(0, 5));

        }
        append(enemys, new Enemy(random(ePos), 2, type));
        append(enemys, new Enemy(2, (random(ePos)), type));
        append(enemys, new Enemy(width - 34, (random(ePos)), type));
        append(enemys, new Enemy((random(ePos)), height - 34, type));

      }


    }

    for (i = 0; i < enemys.length; i++) {
      if (enemys[i] != undefined) {
        enemys[i].show();
        if (enemys[i].moveTime <= -5) {
          enemys[i].collided = false;
          enemys[i].move();
          enemys[i].moveTime = 10;
        }
        enemys[i].moveTime--;
        enemys[i].moveing();
        if (touchingor(enemys[i], player)) {
          enemys.splice(i, 1);
          damage.play();
          lives--;
        }
        for (j = 0; j < enemys.length; j++) {
          if (i != j) {
            if (touchingor(enemys[i], enemys[j])) {
              switch (enemys[i].facing) {
                case "u":
                  enemys[i].y += enemys[i].speed;
                  if (!enemys[i].collided) {
                    enemys[i].collided = true;
                  }
                  break;
                case "d":
                  enemys[i].y -= enemys[i].speed;
                  if (!enemys[i].collided) {
                    enemys[i].collided = true;
                  }
                  break;
                case "l":
                  enemys[i].x += enemys[i].speed;
                  if (!enemys[i].collided) {
                    enemys[i].collided = true;
                  }
                  break;
                case "r":
                  enemys[i].x -= enemys[i].speed;
                  if (!enemys[i].collided) {
                    enemys[i].collided = true;
                  }
                  break;
              }
            }
          }
        }

        for (var n = 0; n < bullets.length; n++) {
          if (bullets[n] != undefined) {
            if (touchingor(bullets[n], enemys[i])) {
              enemys[i].health--;
              bullets[n].donezoed = true;
            }
          }
        }

        for (var l = 0; l < squareR; l++) {
          for (var m = 0; m < squareR; m++) {
            if (touchingor(enemys[i], kingB[l][m])) {
              if (kingB[l][m].type == 5 || kingB[l][m].type == 2 && enemys[i].canfly == false) {
                switch (enemys[i].facing) {
                  case "u":
                    enemys[i].y += enemys[i].speed;
                    if (!enemys[i].collided) {
                      enemys[i].collided = true;
                    }
                    break;
                  case "d":
                    enemys[i].y -= enemys[i].speed;
                    if (!enemys[i].collided) {
                      enemys[i].collided = true;
                    }
                    break;
                  case "l":
                    enemys[i].x += enemys[i].speed;
                    if (!enemys[i].collided) {
                      enemys[i].collided = true;
                    }
                    break;
                  case "r":
                    enemys[i].x -= enemys[i].speed;
                    if (!enemys[i].collided) {
                      enemys[i].collided = true;
                    }
                    break;
                }
              }
            }
          }
        }

        //animation
        if (enemys[i] != undefined) {
          enemys[i].movetime--;


          if (enemys[i].movetime < 0) {
            enemys[i].movetime = 20;
          }


          if (enemys[i].health <= 0) {
            var tempE = floor(random(0, 100))
            if (tempE >= 95) {
              var number = floor(random(0, 6));
              append(collectubles, new Powerup(enemys[i].x, enemys[i].y, number));
            }
            append(animation, new uggggg(enemys[i].x, enemys[i].y));
            hit.play();
            enemys.splice(i, 1);
            

          }
          for (var t = 0; t < enemys.length; t++) {
            for (var u = 0; u < enemys.length; u++) {
              if (t != u && enemys[t] != undefined && enemys[u] != undefined) {
                if (enemys[t].x == enemys[u].x && enemys[t].y == enemys[u].y) {
                  enemys.splice(t, 1);
                }
              }
            }
          }
        }
      }
    }

    if (lives <= 0) {
      screen = 10;
      player.x = 240;
      player.y = 50;
      levelTime = 1;
      enemys = [];
      animation = [];
      facing = "d"
      lives = 100;
      powers = [];
      collectubles = [];
      bullets = [];
    }

    if (screen == 10) {
      fill("#000000")
      rect(0, 0, 512, 512);

      if (bossvis) {
        mySound.stop();
        
        //boss image
        image(king, 240, 400, sWidth = 32, sHeight = 32, 862, 256, 32, 32);

        //you've yeed your last haw
        image(notking, 224, 300, sWidth = 64, sHeight = 64, 894, 288, 64, 64);

        if (go > 60) {
          image(gameowo, 110, 132, sWidth = 300, sHeight = 121, 0, 0, 1, 1);
          go = 0;

        } else if (go > 30) {
          image(gameowo, 110, 132, sWidth = 300, sHeight = 121, 0, 0, 600, 242);

        }

      } else {

        //you win
        image(end, 0, 68, sWidth = 512, sHeight = 376, 0, 0, 512, 376);

      }

      //a variable that has the position of the boss for the touching function
      var bossObj = {
        x: 256,
        y: 368,
        w: 32
      }

      for (i = 0; i < bullets.length; i++) {
        if (touchingor(bullets[i], bossObj)) {
          lives = 100;
          bossvis = false;
        }
      }

      if (lives == 100) {
        //game over
        image(king, 256, 400, sWidth = 32, sHeight = 32, 768, 96, 32, 32);
      }

    }

    for (i = 0; i < bullets.length; i++) {
      if (bullets[i] != undefined) {
        bullets[i].show();
        bullets[i].shoot();
        if (bullets[i].donezoed || bullets[i].x < 0 || bullets[i].x > width || bullets[i].y < 0 || bullets[i].y > height) {
          bullets.splice(i, 1);
        }
      }
    }
  }

  if (levelTime <= 0 && enemys.length == 0 && screen % 2 == 0) {
    screen++;
  }
  switch (screen) {
    case 3:
      screenTiles[15][7] = 0;
      screenTiles[15][8] = 0;
      screenTiles[14][7] = 0;
      screenTiles[14][8] = 0;
      break;
    case 4:
      screenTiles[15][7] = 4;
      screenTiles[15][8] = 4;
      screenTiles[14][7] = 3;
      screenTiles[14][8] = 3;
      screenTiles[4][4] = 2;
      screenTiles[5][4] = 2;
      screenTiles[4][5] = 2;
      screenTiles[11][4] = 2;
      screenTiles[10][4] = 2;
      screenTiles[11][5] = 2;
      screenTiles[4][10] = 2;
      screenTiles[4][11] = 2;
      screenTiles[5][11] = 2;
      screenTiles[11][10] = 2;
      screenTiles[10][11] = 2;
      screenTiles[11][11] = 2;
      break;
    case 5:
      screenTiles[15][7] = 0;
      screenTiles[15][8] = 0;
      screenTiles[14][7] = 0;
      screenTiles[14][8] = 0;
      break;
    case 6:
      screenTiles[15][7] = 4;
      screenTiles[15][8] = 4;
      screenTiles[14][7] = 3;
      screenTiles[14][8] = 3;
      screenTiles[4][4] = 0;
      screenTiles[5][4] = 0;
      screenTiles[4][5] = 0;
      screenTiles[11][4] = 0;
      screenTiles[10][4] = 0;
      screenTiles[11][5] = 0;
      screenTiles[4][10] = 0;
      screenTiles[4][11] = 0;
      screenTiles[5][11] = 0;
      screenTiles[11][10] = 0;
      screenTiles[10][11] = 0;
      screenTiles[11][11] = 0;
      screenTiles[3][7] = 2;
      screenTiles[7][12] = 2;
      screenTiles[8][3] = 2;
      screenTiles[12][8] = 2;
      break;
    case 7:
      screenTiles[15][7] = 0;
      screenTiles[15][8] = 0;
      screenTiles[14][7] = 0;
      screenTiles[14][8] = 0;
      break;
    case 8:
      screenTiles[15][7] = 4;
      screenTiles[15][8] = 4;
      screenTiles[14][7] = 3;
      screenTiles[14][8] = 3;
      screenTiles[3][7] = 0;
      screenTiles[7][12] = 1;
      screenTiles[8][3] = 1;
      screenTiles[12][8] = 0;
      screenTiles[11][9] = 2;
      screenTiles[11][10] = 2;
      screenTiles[11][11] = 2;
      screenTiles[10][11] = 2;
      screenTiles[9][11] = 2;
      screenTiles[11][6] = 2;
      screenTiles[11][5] = 2;
      screenTiles[11][4] = 2;
      screenTiles[10][4] = 2;
      screenTiles[9][4] = 2;
      screenTiles[6][4] = 2;
      screenTiles[5][4] = 2;
      screenTiles[4][4] = 2;
      screenTiles[4][5] = 2;
      screenTiles[4][6] = 2;
      screenTiles[4][9] = 2;
      screenTiles[4][10] = 2;
      screenTiles[4][11] = 2;
      screenTiles[5][11] = 2;
      screenTiles[6][11] = 2;
      break;
    case 9:
      screenTiles[15][7] = 0;
      screenTiles[15][8] = 0;
      screenTiles[14][7] = 0;
      screenTiles[14][8] = 0;
      break;
    case 10:
      screenTiles[15][6] = 5;
      screenTiles[15][7] = 5;
      screenTiles[15][8] = 5;
      screenTiles[15][9] = 5;
      screenTiles[0][6] = 5;
      screenTiles[0][7] = 5;
      screenTiles[0][8] = 5;
      screenTiles[0][9] = 5;
      screenTiles[6][15] = 5;
      screenTiles[7][15] = 5;
      screenTiles[8][15] = 5;
      screenTiles[9][15] = 5;
      screenTiles[6][0] = 5;
      screenTiles[7][0] = 5;
      screenTiles[8][0] = 5;
      screenTiles[9][0] = 5;
      screenTiles[14][7] = 3;
      screenTiles[14][8] = 3;
      screenTiles[11][9] = 0;
      screenTiles[11][10] = 0;
      screenTiles[11][11] = 0;
      screenTiles[10][11] = 0;
      screenTiles[9][11] = 0;
      screenTiles[11][6] = 0;
      screenTiles[11][5] = 0;
      screenTiles[11][4] = 0;
      screenTiles[10][4] = 0;
      screenTiles[9][4] = 0;
      screenTiles[6][4] = 0;
      screenTiles[5][4] = 0;
      screenTiles[4][4] = 0;
      screenTiles[4][5] = 0;
      screenTiles[4][6] = 0;
      screenTiles[4][9] = 0;
      screenTiles[4][10] = 0;
      screenTiles[4][11] = 0;
      screenTiles[5][11] = 0;
      screenTiles[6][11] = 0;
      break;
  }

  var arrow_keys_handler = function(e) {
    switch (e.keyCode) {
      case 37:
      case 39:
      case 38:
      case 40: // Arrow keys
      case 32:
        e.preventDefault();
        break; // Space
      default:
        break; // do not block other keys
    }
  };


  if (screen == 2) {
    instruct++;
    if (instruct < 120) {
      imageMode(CENTER);
      image(king, 256, 400, sWidth = 160, sHeight = 96, 446, 0, 160, 96);
    }
  }
}