var fixedRect, movingRect;
var test;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  test = createSprite(100,100,20,20);
  test.shapeColor = "green";
  test.debug = true;




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,test))
{
 test.shapeColor = "blue"
  movingRect.shapeColor = "brown"
}
  
  
  else {
    movingRect.shapeColor = "green";
    test.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object2,object1){
  if (object2.x - object1.x < object1.width/2 + object2.width/2 //object1 = fixedrect - object2  = movingrect
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
      return true}
        else{return false}
      }
