const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var ground1;
var roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    bob1 = new BobClass(780,400,50);
	roof1 = new RoofClass(400,200,300,20);

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background(0);
  

 bob1.display();
 roof1.display();
 
}