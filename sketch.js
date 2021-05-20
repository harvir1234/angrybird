const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine
var world
var box1;
var box2;
var box3, box4;
var ground1;
var pig1,pig2;
var stick1,stick2;
var box5;
var stick3,stick4;
var bird1;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  
  ground1 = new ground (600,height,1200,25);
  box1    =     new box (700,320,70,70);
  box2    =     new box (920,320,70,70)
  stick1  =     new stick(810,260,300,PI/2);
   pig1 =        new Pig(810,350);
   box3  =       new box(700,240,70,70) 
  box4  =        new box (920,240,70,70)
  pig2  =        new Pig (810,220)
  stick2 =       new stick (810,180,300,PI/2)
  box5=          new box  (810,160,70,70)
  stick3=        new stick (780,120,150,PI/7);
  stick4  = new stick(860,120,150,-PI/7);
  bird1  = new bird (150,150)
}

function draw() {
  background(0);
  Engine.update(engine)  
  ground1.display();
  box1.display();
  box2.display();
  pig1.display();
  stick1.display();
  box3.display();
  box4.display();
  pig2.display();
  stick2.display();
  box5.display();
  stick3.display();
  stick4.display();
  bird1.display();
}