
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var box,box2,box3;
var paperBall;
var ground;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	var options={
	 isStatic:true	
	}
	ground=Bodies.rectangle(400,670,800,20,options)
	paperBall=new Paper(100,100)
  box=new Dustbin(730,660,80,10);
  box2=new Dustbin(680,640,10,50);
  box3=new Dustbin(760,640,10,50);
	World.add(world,ground)
	Engine.run(engine);
}


function draw() {
  background("white");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20) 
  paperBall.display()
  box.display()
  box2.display()
  box3.display()
  }
  
  function keyPressed(){
    if(keyCode==65){
     Body.applyForce(paperBall.body,paperBall.body.position,{x:100,y:-23}) 
    }
 }


