var canvas;
var floor1,floor2,floor3,floor4,jumpingbox;
var music;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
floor1=createSprite(100,590,150,10);
floor1.shapeColor = "blue";
floor2=createSprite(300,590,150,10);
floor2.shapeColor = "green";
floor3=createSprite(500,590,150,10);
floor3.shapeColor = "yellow";
floor4=createSprite(700,590,150,10);
floor4.shapeColor = "red";
    //create box sprite and give velocity
    var hi = Math.round(random(20,750));
    jumpingbox=createSprite(hi,300,20,20);
    jumpingbox.shapeColor = "black";
    jumpingbox.velocityX = 5;
    jumpingbox.velocityY = 5;
    
}

function draw() {
    background("white");
    //create edgeSprite
  edges = createEdgeSprites();
  jumpingbox.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (jumpingbox.isTouching(floor1)) {
        jumpingbox.shapeColor = "blue";
        jumpingbox.bounceOff(floor1);
        music.play();
    }
    if (jumpingbox.isTouching(floor2)) {
        jumpingbox.shapeColor = "green";
        jumpingbox.bounceOff(floor2);
        music.play();
    }
if(jumpingbox.isTouching(floor3)){
    jumpingbox.shapeColor = "yellow";
    jumpingbox.velocityX = 0;
    jumpingbox.velocityY = 0;
    music.stop();
}
if (jumpingbox.isTouching(floor4)) {
    jumpingbox.shapeColor = "red";
    jumpingbox.bounceOff(floor4);
    music.play();
}
drawSprites();
}