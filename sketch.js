var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() 
{
  createCanvas(1600,400);
  bullet = createSprite(50,200, 50, 20);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83)
}

function draw() 
{
  background("black");
  
  bullet.velocityX = speed;

  hasCollided();

}

function hasCollided()
{
  if(wall.x - bullet.x  < wall.width/2 + bullet.width/2) 
  {
    bullet.x = 1130;
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    console.log("damage: "+damage);
    if(damage < 10 && damage >= 0)
    {
      bullet.shapeColor = "green";
    }
    if(damage > 10)
    {
      bullet.shapeColor = "red";
    }
  }
    drawSprites();
}
