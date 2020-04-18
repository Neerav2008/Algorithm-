var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;

  if(isTouching(gameObject2, gameObject1)){
    gameObject2.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    gameObject2.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}

