
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400, height, 800, 20);

	Lside = new Dustbin(610, height - 40, 10, 70);
	Rside = new Dustbin(690, height - 40, 10, 70);
	Bottom = new Dustbin(650, height - 20, 85, 10);
  
	paper1 = new Paper(100, 600, 1);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  Bottom.display();
  Lside.display();
  Rside.display();
 paper1.display();
}



