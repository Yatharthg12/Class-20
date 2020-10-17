var FR,MR;


function setup() {
  createCanvas(800,800);
  FR = createSprite(400, 400, 80, 50);
  FR.shapeColor = "green";
  FR.debug = true;
  MR = createSprite(100, 200, 50, 80);
  MR.debug = true;
  MR.shapeColor = "green";
  
}

function draw() {

  MR.y = World.mouseY;
  MR.x = World.mouseX;

if(MR.x-FR.x < MR.width/2 + FR.width/2 && FR.x-MR.x < MR.width/2 + FR.width/2 
  && MR.y-FR.y < MR.height/2 + FR.height/2 && FR.y-MR.y < MR.height/2 + FR.height/2 ){
  MR.shapeColor = "red";
  FR.shapeColor = "red";
}
else{
  MR.shapeColor = "green";
  FR.shapeColor = "green";
}

  background(0);  
  drawSprites();
}