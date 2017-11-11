var typeRed = 0;
var typeGreen = 1;
var typeGold = 2;

function Box(x, y, w, h) {


  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  var wrapColor;
  var ribbonColor;
  var type = int(random(3));
  if(type==typeRed){
    wrapColor ={
      r:random(200,255),
      g:0,
      b:0
    }
    ribbonColor ={
      r:255,
      g:215,
      b:0
    }
  }
  else if(type==typeGreen){
    wrapColor ={
      r:0,
      g:random(200,255),
      b:0
    }
    ribbonColor ={
      r:255,
      g:0,
      b:0
    }
  }
  else if(type==typeGold){
    wrapColor ={
      r:255,
      g:215,
      b:0
    }
    ribbonColor ={
      r:255,
      g:0,
      b:0
    }
  }

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(0.5);
    stroke(100);

    fill(wrapColor.r,wrapColor.g,wrapColor.b);
    rect(0, 0, this.w, this.h);
    //Ribbon
    fill(ribbonColor.r,ribbonColor.g,ribbonColor.b);
    rect(0, 0, this.w*0.2, this.h);
    rect(0, 0, this.w, this.w*0.2);
    strokeWeight(3);
    stroke(ribbonColor.r,ribbonColor.g,ribbonColor.b);
    line(0,-this.h/2,4,-this.h/2*1.2);
    line(0,-this.h/2,0,-this.h/2*1.2);
    line(0,-this.h/2,-4,-this.h/2*1.2);
    pop();
  }




}
