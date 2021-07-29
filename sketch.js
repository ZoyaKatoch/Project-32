const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var stand;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21, block22;
var block23, block24, block25;
var polygon;
var slingshot;
var bg, backgroundImg;
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  //stand
  stand = new Ground(700,300,300,10);
  //row 1
  block1 = new Box(580,280,30,30);
  block2 = new Box(610,280,30,30);
  block3 = new Box(640,280,30,30);
  block4 = new Box(670,280,30,30);
  block5 = new Box(700,280,30,30);
  block6 = new Box(730,280,30,30);
  block7 = new Box(760,280,30,30);
  block8 = new Box(790,280,30,30);
  block9 = new Box(820,280,30,30);
  //row 2
  block10 = new Box(610,250,30,30);
  block11 = new Box(640,250,30,30);
  block12 = new Box(670,250,30,30);
  block13 = new Box(700,250,30,30);
  block14 = new Box(730,250,30,30);
  block15 = new Box(760,250,30,30);
  block16 = new Box(790,250,30,30);
  //row 3
  block17 = new Box(640,220,30,30);
  block18 = new Box(670,220,30,30);
  block19 = new Box(700,220,30,30);
  block20 = new Box(730,220,30,30);
  block21 = new Box(760,220,30,30);
  //row 4
  block22 = new Box(670,190,30,30);
  block23 = new Box(700,190,30,30);
  block24 = new Box(730,190,30,30);
  //row 5
  block25 = new Box(700,160,30,30);
  //polygon
  polygon = new Polygon(200,300,60);
  //slingshot
  slingshot = new SlingShot(polygon.body,{x:100,y:100});
}

function draw() {
  getBackgroundImg();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode===32){
    Slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
       background(255,255,255);
  }
  else{
    background(0,0,0);
  }
}