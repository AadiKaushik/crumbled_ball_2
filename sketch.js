
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dusbin

function preload()
{
 // dustbin = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

 ball1 = new Ball (60,20,30);


box4 =  new Box(1880,880,250,250);


 ground1 = new Ground(990,990,2000,30) 

	Engine.run(engine);
  
}


function draw() {

	imageMode(CENTER);
  background(225);
 
//box1.display();
//box2.display();
//box3.display();
box4.display();
ground1.display();
ball1.display();

 keyPresssed();
 drawSprites();
 console.log()
}

function keyPresssed()
{
	if(keyCode===UP_ARROW)
	{
		Body.applyForce(ball1.body,ball1.body.position,{
			x:10,
			y:-19})
	}
	if(keyCode===DOWN_ARROW)
	
	{
		Body.applyForce(ball1.body,ball1.body.position,{
			x:1,
			y:10
		})
	}
}
