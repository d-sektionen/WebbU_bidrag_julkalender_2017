function Tree(x,y){
  var parts = [];
  var starRadius = 20;
  var options = {
    isStatic: false
  }

  this.foot = Bodies.rectangle(x, y, 40, 40, options);
  this.bottom = Bodies.trapezoid(x, y-40, 130, 50, PI/8, options);
  this.middle = Bodies.trapezoid(x, y-90, 110, 50, PI/8, options);
  this.top = Bodies.trapezoid(x, y-130 , 100, 60, PI/3, options);
  this.star = Bodies.circle(x, y-170, starRadius, options);

  var bottomBody = Body.create({
       parts: [this.foot, this.bottom,this.middle,this.top,this.star]
   },[options]);


  parts.push(this.foot);
  parts.push(this.bottom);
  parts.push(this.middle);
  parts.push(this.top);
  World.add(world, bottomBody);

  this.show = function() {
    for (var i = 0; i < parts.length; i++) {
      if(i == 0){
        fill(98, 78, 44);//tree brown
      }else {
        fill(34,139,34);//Forest green
      }
      var vertices = parts[i].vertices;
      push();
      beginShape();
      for (var j = 0; j < vertices.length; j++) {
        vertex(vertices[j].x, vertices[j].y);
      }
      endShape(CLOSE);
      pop();
    }
    //draw star
    starPos = this.star.position;
    noStroke();
    fill(255,215,0,80); //215 gold
    ellipse(starPos.x, starPos.y, 100);
    stroke(1);
    fill(255,215,0); //215 gold
    var angle = TWO_PI / 5;
    var halfAngle = angle/2;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = starPos.x + cos(a) * starRadius;
      var sy = starPos.y + sin(a) * starRadius;
      vertex(sx, sy);
      sx = starPos.x + cos(a+halfAngle) * starRadius/2;
      sy = starPos.y + sin(a+halfAngle) * starRadius/2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

}
