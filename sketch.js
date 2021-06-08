
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var trashcanObj,trashcanObjBody;
var paper1;
var world;



function setup() {
	createCanvas(1600, 700);
	

	

	engine = Engine.create();
	world = engine.world;
	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	trashcanObj = new BaseClass(1200,550,70,70);
	paper1 = new Paper(500,660,50,50);
	Engine.run(engine);  

	

}



function draw() {
  
  background(230);
 
 

trashcanObj.display();
  groundObject.display();
  dustbinObj.display();
  trashcanObj.display();
paper1.display();

}

function keyPressed (){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-150});	
	}
}




