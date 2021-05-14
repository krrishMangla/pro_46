const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var gameState,p1State,p2State;
var p1,p2;
var s1,s2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var charge;
var pieceFR1,pieceFR2,pieceFR3;
var screw1,screw2,screw3,screw4,screw5,screw6,screw7,screw8;
var pieceFT1, pieceFT2, pieceFT3, pieceFT4, pieceFT5;
var pieceR1, pieceR2, pieceR3, pieceR4, pieceR5;
var pieceT1, pieceT2, pieceT3, pieceT4, pieceT5;
var bg;


function preload()
{
 bg = loadImage("bg.gif");
}

function setup()
{
  var canvas = createCanvas(450,700);
  engine = Engine.create();
  world = engine.world;  

  pieceR1 = new RectangleObject(390, 370, 20, 520);
  pieceR2 = new RectangleObject(450, 350, 50, 1000);
  pieceR3 = new RectangleObject(405, 650, 50, 140);
  pieceR4 = new RectangleObject(225, 20, 450, 100);
  pieceR5 = new RectangleObject(0, 350, 50, 1000);

  pieceFR1 = new FlexableRectObj(202.5, 350, 100, 10);
  pieceFR2 = new FlexableRectObj(132.5, 425, 100, 10);
  pieceFR3 = new FlexableRectObj(272.5, 425, 100, 10);

  pieceFT1 = new FlexableTriObj(142.5, 520, 25, 0);
  pieceFT2 = new FlexableTriObj(262.5, 520, 25, PI/-3);
  pieceFT3 = new FlexableTriObj(202.5, 150, 35, PI/2);
  pieceFT4 = new FlexableTriObj(62.5, 275, 30, PI/2);
  pieceFT5 = new FlexableTriObj(342.5, 275, 30, PI/2);

  pieceT1 = new TriangleObject(415, 60, 40, PI/11);
  pieceT2 = new TriangleObject(132.5, 220, 30, PI/2);
  pieceT3 = new TriangleObject(272.5, 220, 30, PI/2);
  pieceT4 = new TriangleObject(22.5, 585, 35, PI/2);
  pieceT5 = new TriangleObject(382.5, 585, 35, PI/2);
  pieceT6 = new TriangleObject(30, 60, 40, PI/1.15);

  screw1 = new Screw(pieceFR1.body, {x: 202.5, y: 350},0);
  screw2 = new Screw(pieceFR2.body, {x: 122.5, y: 425},0);
  screw3 = new Screw(pieceFR3.body, {x: 272.5, y: 425},0);

  screw4 = new Screw(pieceFT1.body, {x: 142.5, y: 520},0);
  screw5 = new Screw(pieceFT2.body, {x: 262.5, y: 520},0);
  screw6 = new Screw(pieceFT3.body, {x: 202.5, y: 150},0);

  screw7 = new Screw(pieceFT4.body, {x: 62.5, y: 275},0);
  screw8 = new Screw(pieceFT5.body, {x: 342.5, y: 275},0);
  p1 = new Paddle(100,670,130,40,1);
  p2 = new Paddle(305,670,130,40,2);

  s1 = new Screw(p1.body,{x:40,y:670},-65);
  s2 = new Screw(p2.body,{x:365,y:670},65);

  b1 = new Ball(400,550,10);
  b2 = new B2(90,150,10);
  b3 = new B2(330,150,10);
  b4 = new B2(140,270,10);
  b5 = new B2(209,270,10);
  b6 = new B2(275,270,10);
  b7 = new B2(90,375,10);
  b8 = new B2(330,375,10);
  b9 = new B2(199,425,10);


  gameState = "waiting";
  p1State = "resting";
  p2State = "resting";
 
  charge = 0;



}


function draw()
{
  background(bg);
  Engine.update(engine);

 

  pieceR1.display();
  pieceR2.display();
  pieceR3.display();
  pieceR4.display();
  pieceR5.display();
  
  p1.display();
  p2.display();
  
  s1.display();
  s2.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  pieceFR1.display();
  pieceFR2.display();
  pieceFR3.display();

  pieceT1.display();
  pieceT2.display();
  pieceT3.display();
  pieceT4.display();
  pieceT5.display();
  pieceT6.display();

  pieceFT1.display();
  pieceFT2.display();
  pieceFT3.display();
  pieceFT4.display();
  pieceFT5.display();
 
  fill(255)
  text(mouseX +","+mouseY ,mouseX,mouseY);
 
  fill(0);
  textSize(30);
  textAlign(CENTER);
  text("PINBALL",225,40);

  textSize(15);
  text("Press Space To Restart!",225,60);

  //charge the ball
  if(keyIsDown(UP_ARROW) && gameState === "waiting"){
    fill("white");
    textAlign(CENTER);
    textSize(10);

    if(charge > -50){
      charge-=0.3;
      text("Charge: " + round(charge * -1), 410, 610);
    }else{
      text("Charge: MAX", 410, 610);
    }
  }


  if(b1.body.position.x < 390)
  {
    gameState = "playing"; 
  }
  
  if (p1State === "resting") {
    Matter.Body.setAngle(p1.body,0)
  }

  if (p2State === "resting") {
    Matter.Body.setAngle(p2.body,0)
  }

  if (p1.body.angle > 0) {
    Matter.Body.setAngularVelocity(p1,0);
    p1State = "resting";
  } 
  
  if (p2.body.angle < 0) {
    Matter.Body.setAngularVelocity(p2,0);
    p2State = "resting";
  } 


}


function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    p1State = "flinging";
    Matter.Body.setAngularVelocity(p1.body,-0.5);  
  }
  

  if(keyCode === RIGHT_ARROW)
  {
    p2State = "flinging";
    Matter.Body.setAngularVelocity(p2.body,0.5);  
  }

  if (keyCode === 32) {
    gameState = "waiting";
    Matter.Body.setPosition(b1.body,{x:400,y:550}); 
  }
}


function keyReleased()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.setVelocity(b1.body,{x:0,y:charge});
    charge = 0;
  }
}