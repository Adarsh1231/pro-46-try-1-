var rickroll;

function preload(){
rickroll = loadSound("rickroll.mp3")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  rickroll.play();
  background(255,255,255);  
  drawSprites();
}