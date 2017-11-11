
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Constraint = Matter.Constraint,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var timer = 0;
var particles = [];
var snowFlakes = [];
var boundaries = [];
var webbUSign;
var mConstraint;


function setup() {
  var canvas = createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  textStyle(ITALIC)
  var button1 = createButton('Mer Jul');
  button1.position(20, 680);
  button1.mousePressed(merJul);

  var button2 = createButton('Mindre Jul');
  button2.position(80 , 680);
  button2.mousePressed(mindreJul);

  //some starting objects
  for (var i = 0; i < 20; i++) {
    var p = new Box(random(430,470), random(450,550), random(20,35),random(20,35));
    particles.push(p);
  }
  particles.push(new Tree(200, 650));
  particles.push(new Snowman(100,650));

  //Walls
  particles.push(new Boundary(height/2, width, width*2, 50, 0));
  particles.push(new Boundary(-20, 0, 20, height*2, 0));
  particles.push(new Boundary(width+20, 0, 20, height*2, 0));


  //WEBBU SIGN
  webbUSign = new Sign(350, 200,400,120,"God Jul önskar WebbU");

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  /*Events.on(mConstraint, 'mousedown', function(event) {
  });*/

}


function draw() {
  timer = timer + 1;
  background(51);
  Engine.update(engine);
  drawSnow();
  webbUSign.show();
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
  }
}


function merJul() {
  engine.world.gravity.y = 1;
  for (var i = 0; i < random(2,10); i++) {
    particles.push(new Box(random(0,800), random(-100,-200), random(20,40),random(20,40)));
  }
  if(random(1) > 0.9){
    particles.push(new Tree(random(0,800), -200));
  }
  if(random(1) > 0.9){
    particles.push(new Snowman(random(0,800),-100));
  }
  if(random(1) > 0.3){
    webbUSign.removeConstraint();
  }
}

function mindreJul() {
  //Reverse gravity
  engine.world.gravity.y = -1;
}


function drawSnow() {
  if(timer%10 == 0){
    var newSnow = new Snow(random(0,800), random(0,-100), random(20,50),random(20,50));
    snowFlakes.push(newSnow);
  }
  for (var i = 0; i < snowFlakes.length; i++) {
    snowFlakes[i].show();
    if(snowFlakes[i].maxLife < snowFlakes[i].lifeCounter){
      snowFlakes[i].delete();
      snowFlakes.splice(i,1);
    }
  }
}
