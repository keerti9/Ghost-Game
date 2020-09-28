var door, doorImage, doorGroup
var climber, climberImage, climberGroup
var invisibleB, invisibleBGroup
var tower, towerImage
var ghost, ghostImage

var gameState="play";

var spooky;

function preload(){
ghostImage=loadImage("ghost-standing.png");
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
spooky=loadSound("spooky.wav");
}

function setup(){
createCanvas(600,600);

  spooky.loop();
  
  tower=createSprite(300,300);
tower.addImage(towerImage);
tower.velocityY=1;
ghost=createSprite(300,300);
ghost.addImage(ghostImage);
  
ghost.scale=0.4
  
doorGroup=new Group();
climberGroup=new Group();
invisibleBGroup=new Group();
 
 ghost.setCollider("rectangle", 0,30,200,250);
}
function draw(){
background(1);
if(gameState==="play"){
  if(keyDown("left_arrow")){
   ghost.x= ghost.x-3;  
  }
  if(keyDown("right_arrow")){
   ghost.x= ghost.x+3;   
  } 
  if(keyDown("space")){
   ghost.velocityY=-10;  
  } 
  ghost.velocityY=ghost.velocityY+0.8;
  if(tower.y>400){
  tower.y=300;
  }
  SpawnObstacles();
  if(climberGroup.isTouching(ghost)){
  ghost.velocityY=0;
  }
  if(invisibleBGroup.isTouching(ghost) || ghost.y>600){
  ghost.destroy();
    gameState="end";
  }
  drawSprites();
}
if(gameState==="end"){
fill("green");
 textSize(35);
  text("GameOver", 170,170);
  }
}

function SpawnObstacles(){
  if(frameCount%250===0){
door=createSprite(200,-50);
climber=createSprite(200,10);
invisibleB=createSprite(200,15);
invisibleB.width=climber.width;
invisibleB.height=5;
door.x=random(100,400);
door.x=climber.x
invisibleB.x=climber.x
door.addImage(doorImage);
climber.addImage(climberImage);
door.velocityY=1;
invisibleB.velocityY=1;
climber.velocityY=1;
door.depth=ghost.depth;
ghost.depth=ghost.depth+1;
door.lifetime=800;
invisibleB.lifetime=800;
climber.lifetime=800;
doorGroup.add(door);
invisibleBGroup.add(invisibleB);
climberGroup.add(climber);
  }
}



