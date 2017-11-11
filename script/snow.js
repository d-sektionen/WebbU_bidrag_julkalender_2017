
function Snow(x, y) {

  var collFilter = 0x0001;
  if(random(1)>0.5){
    collFilter = 0x0002;
  }

  var options = {
    friction: 1,
    restitution: 0,
    frictionAir: 0.1,
    density: 0.001,
    isStatic: false,
    collisionFilter: {
        mask: collFilter
    }
  }
  this.r = random(1,5);
  this.maxLife = 900;
  this.lifeCounter = 0;
  this.body = Bodies.circle(x, y, this.r, options);
  World.add(world, this.body);

  this.show = function() {
    this.lifeCounter = this.lifeCounter + 1;
    var pos = this.body.position;
    push();
    noStroke();
    fill(255);
    ellipse(pos.x,pos.y,this.r+1)
    pop();
  }

  this.delete = function() {
    World.remove(world, this.body);
  }



}
