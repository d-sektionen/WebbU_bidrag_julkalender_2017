function Snowman(x,y) {

  var options = {
    friction: 1
  }

  this.bodyPos = -1;

  this.bottom = Bodies.polygon(x, y,8,   30,options);
  this.middle = Bodies.polygon(x, y-50,8, 20,options);
  this.top = Bodies.polygon(x, y-90,8, 15,options);

  World.add(world, this.bottom);
  World.add(world, this.top);
  World.add(world, this.middle);

  this.show = function() {
    push();
    translate(this.top.position.x, this.top.position.y);
    fill(255);
    var angle = this.top.angle;
    rotate(angle);
    ellipse(0,0,15*2);
    fill(0);
    ellipse(-5,-5,2);
    ellipse(5,-5,2);
    fill(235,137,33);
    triangle(0,0,10,3,0,5);
    pop();

    push();
    translate(this.middle.position.x, this.middle.position.y);
    fill(255);
    var angle = this.middle.angle;
    rotate(angle);
    ellipse(0,0,20*2);
    fill(0);
    ellipse(0,8,2);
    ellipse(0,-8,2);
    fill(235,137,33);
    pop();

    push();
    translate(this.bottom.position.x, this.bottom.position.y);
    fill(255);
    var angle = this.bottom.angle;
    rotate(angle);
    ellipse(0,0,30*2);
    fill(0);
    ellipse(0,15,2);
    ellipse(0,0,2);
    ellipse(0,-15,2);
    pop();

  }

}
