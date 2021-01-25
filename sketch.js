var canvas;
var music;
var box1, box2, box3, box4,whiteBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    fill("red");
    box1=createSprite(100,580,160,20);
    box2=createSprite(300,580,160,20);
    box3=createSprite(500,580,160,20);
    box4=createSprite(700,580,160,20);
    whiteBox=createSprite(random(20,750),200,35,35);
    box1.shapeColor="red";
    box2.shapeColor="purple";
    box3.shapeColor="blue";
    box4.shapeColor="green";
    whiteBox.shapeColor="White";
    whiteBox.velocityX=3;
    whiteBox.velocityY=3;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    var edges=createEdgeSprites();
    whiteBox.bounceOff(edges);

    if(box1.isTouching(whiteBox) && whiteBox.bounceOff(box1)){
        whiteBox.shapeColor="red"
    }

    if(box2.isTouching(whiteBox) && whiteBox.bounceOff(box2)){
        whiteBox.shapeColor="purple"
    }

    if(box3.isTouching(whiteBox) && whiteBox.bounceOff(box3)){
        whiteBox.shapeColor="blue"
    }

    if(box4.isTouching(whiteBox) && whiteBox.bounceOff(box4)){
        whiteBox.shapeColor="green"
    }
   
    drawSprites();
}
