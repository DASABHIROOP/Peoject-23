const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerBase;
var computerBase;

function preload() {
  //backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base1.png");
  playerimage = loadImage("./assets/player.png");
}

  function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
   engine = Engine.create();
   world = engine.world;
	
   angleMode(DEGREES);

   var options = {
    isStatic: true
  };

   //Create Player Base and player Object
   playerBase = Bodies.rectangle(200, 350, 180, 150, options);
   World.add(world, playerBase);

   player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
   World.add(world,player)

 }
function draw() {
  background(180);

  Engine.update(engine);

  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerimage,player.position.x,player.position.y,50,180);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Player Base and computer Base 
   playerBase.display();
   computerBase.display();

   //display Player and computer
   player.display();
   computer.display();
}
