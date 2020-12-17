
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob;
var roof;
var chain1,chain2,chain3,chain4,chain5;
var bodyA,bodyB;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(300,200,700,20);

	//Create the Bodies Here.
	bob1=new Bob(120,500,50);
	//bob1.body.positionx=mouseX;
	//bob1.body.positiony=mouseY;

	bob2=new Bob(240,500,50);
	bob3=new Bob(360,500,50);
	bob4=new Bob(480,500,50);
	bob5=new Bob(600,500,50);

	

	chain1=new Chain(bob1.body,roof.body,120,200);
	chain2=new Chain(bob2.body,roof.body,240,200);
	chain3=new Chain(bob3.body,roof.body,360,200);
	chain4=new Chain(bob4.body,roof.body,480,200);
	chain5=new Chain(bob5.body,roof.body,600,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
}



