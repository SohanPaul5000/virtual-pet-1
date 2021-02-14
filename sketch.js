//Create variables here
var dog, happydog, foods,foodstock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happydogImg=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(400,350,50,50);
  dog.addImage(dogImg);
  foodstock=database.ref('food')
  foodstock.on("value", readstock);
  
}


function draw() {  
background(255);
if (keyWentDown(UP_ARROW)){
  writeStock(foods);
dog.addImage(happydogImg);
}
  drawSprites();
  textSize(30)
  text("food remaining" + foods,100,100)
  //add styles here

}

function readstock(data){
  foods=data.val();
}

function writeStock(x){
  if (x<=0){
    x= 0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
