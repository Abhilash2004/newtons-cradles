const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 var ball,holder

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1= new Ball (100,250,170,170)
	ball2= new Ball (140,250,170,170)
	ball3= new Ball (180,250,170,170)
	ball4= new Ball (220,250,170,170)
	ball5= new Ball (260,250,170,170)
  plank=new Plank (450,120,600,50)
  holder= new Holder(ball1.body,{x:400,y:100})
  holder= new Holder(ball2.body,{x:400,y:100})
  holder= new Holder(ball3.body,{x:400,y:100})
  holder= new Holder(ball4.body,{x:400,y:100})
  holder= new Holder(ball5.body,{x:400,y:100})

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(64,31,13);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  plank.display();
  drawSprites();
 
}

function mouseDragged () {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
   }
   function mouseReleased () {
  slingshot.fly()
   }

   function mouseDragged () {
    Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY})
     }
     function mouseReleased () {
    slingshot.fly()
     }
  
  