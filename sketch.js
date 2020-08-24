
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,ground,slingShot,hexagon;
var score=0;
var backgroundImg;

function preload(){
 getTime();
  // backgroundImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(390,270,200,30);
  ground1 = new Ground(400,400,800,50);
  ground2 = new Ground(390,330,40,89);
  

   box1 = new Box(330,235,30,40);
   box2 = new Box(360,235,30,40);
   box3 = new Box(390,235,30,40);
   box4 = new Box(420,235,30,40);
   box5 = new Box(450,235,30,40);

   box6 = new Box(348,197,30,40);
   box7 = new Box(377,197,30,40);
   box8 = new Box(405,197,30,40);
   box9 = new Box(435,197,30,40)
    
   box10 = new Box(363,159,30,40);
   box11 = new Box(394,159,30,40);
   box12 = new Box(425,159,30,40);
   

   box13 = new Box(380,121,30,40);
   box14 = new Box(410,121,30,40);

   box15 = new Box(395,84,30,40);

  hexagon = new Hexagon(50,195,40);

  slingShot = new Slingshot(hexagon.body,{x:70,y:100});

//Engine.run(engine);

}

function draw() {

//  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);
  //noStroke();
  textSize(25)
  fill(255)
  text("Score:"+score,700,40)  
  Engine.update(engine);
    box1.display();
    box1.Score();
    box2.display();
    box2.Score();
    box3.display();
    box3.Score();
    box4.display();
    box4.Score();
    box5.display();
    box5.Score();
    box6.display();
    box6.Score();
    box7.display();
    box7.Score();
    box8.display();
    box8.Score();
    box9.display();
    box9.Score();
    box10.display();
    box10.Score();
    box11.display();
    box11.Score();
    box12.display();
    box12.Score();
    box13.display();
    box13.Score();
    box14.display();
    box14.Score();
    box15.display();
    box15.Score();
  slingShot.display();
  hexagon.display();
    ground.display();
    ground1.display();
    ground2.display();
//console.log(score);
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  slingShot.attach(hexagon.body);
  }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    var img;

    if(hour>=06 && hour<=18){
      img = "backgroundDay.jpg";
    }
    else{
      img=" background.jpg ";
    }
  backgroundImg = loadImage(img);
   console.log(backgroundImg);
};
