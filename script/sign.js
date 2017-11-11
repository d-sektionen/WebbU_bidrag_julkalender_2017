function Sign(x, y, w, h, txt) {

  var options = {
    friction: 0.95,
    restitution: 0.6,
    density: 0.0005,
    isStatic: false
  }

  this.body = Bodies.rectangle(x, y, w, h,options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
  this.broken = false;
  this.broken2 = false;
  this.brokenCounter = 0;
  this.con1Offset = -150;
  this.con2Offset = 150;
  this.conYoffset = -30;
  //create ropes
  this.constraint1 = Constraint.create({
       pointA: { x: 100, y: 0 },
       bodyB:  this.body,
       pointB: { x: this.con1Offset, y: this.conYoffset },
       stiffness: 0.05
   });
   this.constraint2 = Constraint.create({
        pointA: { x: 600, y: 0 },
        bodyB:  this.body,
        pointB: { x: this.con2Offset, y: this.conYoffset },
        stiffness: 0.05
    });



   World.add(world, this.constraint1);
   World.add(world, this.constraint2);
   World.add(world, this.body);

  this.show = function() {
    if(this.broken){
      this.brokenCounter = this.brokenCounter + 1;
      if(this.brokenCounter > 100){
        //this.broken2 = true;
        //World.remove(world, this.constraint1);
      }
    }

    var pos = this.body.position;
    var angle = this.body.angle;

    //ropes
    stroke(141, 81, 24);
    strokeWeight(5);
    var rope1 = this.constraint1.pointA;
    var rope2 = this.constraint2.pointA;
    if(!this.broken2){
      line(rope1.x, rope1.y, pos.x, pos.y );
    }
    if(!this.broken){
      line(rope2.x, rope2.y, pos.x , pos.y );
    }
    stroke(0);
    strokeWeight(1);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    textSize(30);
    //Draw rectangle with green border
    fill(170,0,0);
    strokeWeight(11);
    stroke(0,200,0);
    rect(0, 0, this.w, this.h);
    stroke(0);
    strokeWeight(0);
    //Draw stripes
    fill(255,0,0);
    for (var i = -this.w/2; i < this.w/2; i=i+15) {
      quad(i,-this.h/2-5,i+5,-this.h/2-5,i+10,-this.h/2+5,i+5,-this.h/2+5);
    }
    for (var i = -this.w/2; i < this.w/2; i=i+15) {
      quad(i,this.h/2-5,i+5,this.h/2-5,i+10,this.h/2+5,i+5,this.h/2+5);
    }
    for (var i = -this.h/2; i < this.h/2; i=i+15) {
      quad(this.w/2-5, i, this.w/2-5, i+5, this.w/2+5, i+10 ,this.w/2+5, i+5);
    }
    for (var i = -this.h/2; i < this.h/2; i=i+15) {
      quad(-this.w/2-5, i, -this.w/2-5, i+5, -this.w/2+5, i+10 ,-this.w/2+5, i+5);
    }
    //Draw text
    fill(255);
    text(txt, 50, this.h/3,this.w,this.h );
    pop();
  }

  this.removeConstraint = function() {
    this.broken=true;
    World.remove(world, this.constraint2);
  }


}
