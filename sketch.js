var bath,brush,gym,drink,eat,sleep,move;
var bg;
var astronaut;

function preload(){
  bg = loadImage("iss.png");
  bath=loadAnimation("bath1.png","bath2.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  drink=loadAnimation("drink1.png","drink2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  sleep=loadAnimation("sleep.png");
  move=loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
 astronaut = createSprite(400,200);
 astronaut.addAnimation("sleep",sleep);
 astronaut.scale=0.1

 if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brush",brush);
   astronaut.changeAnimation("brush")
   astronaut.y=350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym",gym);
  astronaut.changeAnimation("gym")
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bath",bath);
  astronaut.changeAnimation("bath")
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eat",eat);
  astronaut.changeAnimation("eat")
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("M_KEY")){
  astronaut.addAnimation("move",move);
  astronaut.changeAnimation("move")
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

}

function draw() {
  background(bg);  
  drawSprites();
}