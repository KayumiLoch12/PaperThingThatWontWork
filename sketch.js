
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var box1, box2, box3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    ground = new Ground(400,680, 800,20);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();


  
  drawSprites();
 
}



