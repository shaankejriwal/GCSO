var car1,wall1;
var car2,wall2;
var car3,wall3;
var car4,wall4;
var parkingline1,parkingline2,parkingline3;
var speed,weight;

function setup() {
  createCanvas(1600,800);
  car1 = createSprite(100, 100, 40, 20);
  car1.shapeColor = "yellow";
  wall1 = createSprite(1500,100,20,60);
  car2 = createSprite(100,300,40,20);
  car2.shapeColor = "pink";
  wall2 = createSprite(1500,300,20,60);
  car3 = createSprite(100,500,40,20);
  car3.shapeColor = "lightblue";
  wall3 = createSprite(1500,500,20,60);
  car4 = createSprite(100,750,40,20);
  car4.shapeColor = "orange";
  wall4 = createSprite(1500,750,20,60);
  parkingline1 = createSprite(800,200,1600,5);
  parkingline1.shapeColor = "white";
  parkingline2 = createSprite(800,400,1600,5);
  parkingline2.shapeColor = "white";
  parkingline3 = createSprite(800,600,1600,5);
  parkingline3.shapeColor = "white";
  speed = random(55,90);
  weight = random(400,1500);

  car1.velocityX = 4;
  car2.velocityX = 4;
  car3.velocityX = 4;
  car4.velocityX = 4;
}

function draw() {
  background(0); 
  
  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car1.shapeColor = color(255,0,0)
    }

    if(deformation<180 && deformation>100)
    {
      car1.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2)
  {
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car2.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car2.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x-car3.x < (car3.width+wall3.width)/2)
  {
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car3.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car3.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car3.shapeColor = color(0,255,0);
    }
  }

  if(wall4.x-car4.x < (car4.width+wall4.width)/2)
  {
    car4.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car4.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car4.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car4.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}