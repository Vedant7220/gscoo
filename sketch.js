var car,wall;
var speed,weight;

var car1,wall1;
var speed1,weight2;

var car2,wall2;
var speed2,weight2;

//var car3,wall3;
//var speed3,weight3;


function setup() {
  createCanvas(1900,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,80,50,50);
  car.velocityX=speed;
  wall=createSprite(1500,80,60,height/3);
  wall.shapeColor=color(80,80,80);

  speed1=random(55,90);
  weight1=random(400,1500);
  car1=createSprite(50,230,50,50);
  car1.velocityX=speed1;
  wall1=createSprite(1500,230,60,height/3);
  wall1.shapeColor=color(80,80,80);

  speed2=random(55,90);
  weight2=random(400,1500);
  car2=createSprite(50,380,50,50);
  car2.velocityX=speed2;
  wall2=createSprite(1500,380,60,height/3);
  wall2.shapeColor=color(80,80,80);

  //speed3=random(55,90);
  //weight3=random(400,1500);
  //car3=createSprite(50,440,50,50);
  //wall3=createSprite(1500,400,60,height/3);

  
 
}


function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5 * weight1 * speed1* speed1/22509;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  }
  if(wall2.x-car2.x < (car2.width+wall2.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5 * weight2 * speed2* speed2/22509;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}