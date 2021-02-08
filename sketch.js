//constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var maxDrops = 100;
var drops = [];



function setup(){
    
    var canvas = createCanvas(800,800);
    
 
    engine = Engine.create();
    world = engine.world;
    


    //adding the drops to the array
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,800), random(0,800)));
        }
    }
}

function draw(){
    //background black
    background(0);
    //updating the engine
    Engine.update(engine);




   

      for(var i = 0; i<maxDrops; i++){
          drops[i].display();
          drops[i].changePosition();
      }
    
      drawSprites();
}   
