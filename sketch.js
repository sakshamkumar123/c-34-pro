
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,300,300,40)

	ball1= new Ball(400,500,25)
	ball2= new Ball(450,500,25)
	ball3= new Ball(500,500,25)
	ball4= new Ball(350,500,25)
	ball5= new Ball(300,500,25)

	rope1=new Chain(ball3.body,roof.body,100,0)
	rope2=new Chain(ball2.body,roof.body,50,0)
	rope3=new Chain(ball1.body,roof.body,0,0)
	rope4=new Chain(ball4.body,roof.body,-50,0)
	rope5=new Chain(ball5.body,roof.body,-100,0)

     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseClicked(){
	
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-100,y:-35});
	
}


