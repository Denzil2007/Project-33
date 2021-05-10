const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bgImage;
var snow = [];
var snow1Img, snow2Img;

function setup(){
  createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

  if(frameCount % 50 === 0){
    for(var i = 0;i < 200;i++){
      snow.push(new Snow(random(0,1200),random(0,800)));
    }
  }
}

function preload(){
    bgImage = loadImage("snow1.jpg");
}



function draw() {
  background(bgImage);
  Engine.update(engine);
  for(var i = 0;i < 200;i++){
    snow[i].showDrop();
    snow[i].updateY();
  }

  drawSprites();
}