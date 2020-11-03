var movingRect,fixedRect;

function setup() {
  createCanvas(400,400);
  movingRect=createSprite (100, 100, 35, 65);
  fixedRect = createSprite (200,200,31,17);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="pink";
}

function draw() {
  background(0); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
 console.log(movingRect.x-fixedRect.x);
 console.log(movingRect.width/2+fixedRect.width/2);

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2
    ){
    movingRect.shapeColor="orange"
    fixedRect.shapeColor="purple"
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="pink";
  }

  






  drawSprites();
}