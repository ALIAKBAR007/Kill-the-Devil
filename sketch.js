const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11;
var bgig;
var backgroundImg,platform;
var slingshot;
var hero
var bgig

function preload(){
    bgig=loadImage("gamingbackground2.png")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(810, 350);
    //box4 = new Box(810,260,300, PI/2);

    box5 = new Box(700,240,70,70);
    box6 = new Box(920,240,70,70);
    box7 = new Box(810, 220);

    //box8 =  new Box(810,180,300, PI/2);

    box9 = new Box(810,160,70,70);
    //box10 = new Box(760,120,150, PI/7);
    //box11 = new Box(870,120,150, -PI/7);

    hero = new Hero(100,100, 30, 50);

    
}

function draw(){
    background(bgig);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
   // box4.display();

    box5.display();
    box6.display();
    box7.display();
   // box8.display();

    box9.display();
   // box10.display();
    //box11.display();

    hero.display();
}

