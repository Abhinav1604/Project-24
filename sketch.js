
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;
var sun;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(100, 600, 10);

  line1 = new Dustbin(550, 630, 20, 100);
  line2 = new Dustbin(610, 670, 100, 20);
  line3 = new Dustbin(670, 630, 20, 100);

  ground = new Ground(400, 695, 800, 30);

  sun = new Sun(150, 150, 40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  paper.display();
  line1.display();
  line2.display();
  line3.display();
  ground.display();
  sun.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}