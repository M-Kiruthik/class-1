var box;

function setup() {
  createCanvas(1600,400);
  box = createSprite(400,400,60,60);
  box.shapeColor=color("#ffffff ")
}

function draw() 
{
   background("red");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor=color("pink")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor=color("violet")
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor=color("blue")

   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor=color("olive")
  }

  drawSprites();
}




