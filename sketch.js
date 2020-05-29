var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.velocityX=-5;
  movingrect = createSprite(200,200,80,50);
  movingrect.velocityX=5;
  fixedrect.shapeColor = "yellow";
  movingrect.shapeColor = "yellow";
}

function draw() {
  background(0);
  //movingrect.x = World.mouseX;
  //movingrect.y = World.mouseY;
  bounceOff(fixedrect,movingrect);
   if(isTouching(fixedrect,movingrect)) {
    fixedrect.shapeColor="pink";
    movingrect.shapeColor="pink";
   }
   else{
    fixedrect.shapeColor = "yellow";
    movingrect.shapeColor = "yellow";
   }
  drawSprites();
}
