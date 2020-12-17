const Engine = Matter.engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,World

function setup(){
    var canvas = createCanvas(1200,400)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
}

function draw(){
    background("brown")
    Engine.update(engine);
    ground.display();
}
