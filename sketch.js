//examples on the different types of data in js

//string
var string = "maggie";
console.log(string);

//number
var number = 8;
console.log(number);

//boolean
var boolean = true;
console.log(boolean);

//undefined
var undefined;
console.log(undefined);

//reassigning the same undefined object with null
undefined = null;
console.log(undefined);

//an array holding same data type
var array1 = [1, 2, 3, 4];
console.log(array1);

//array holding different data types
var array2 = ["noodle", false, 24];
console.log(array2);

//array storing a list of arrays
var array3 = [["spicy", 7],[true, null],[90, "jack", false]];
console.log(array3);

//accessing the second element of array2
console.log(array2[1]);

//accessing the second element of the third element of array3
console.log(array3[2][1]);

//checking the length of an array
console.log(array2.length);

//adding an element in an existing array
array3.push(90);
console.log(array3);

//removing an element from an array
array1.pop(1);
console.log(array1);



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onsling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

//function keyPressed(){
    //if(keyCode === 32){
        //slingshot.attach(bird.body);
    //}
//}