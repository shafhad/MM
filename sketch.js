const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var   river , bridge ,bridge2;
var backgroundI , riverI , bridgeI ;
var dragon1,dragon2,dragon3;
var dragon1I,dragon2I,dragon3I 
var dragon1II,dragon2II,dragon3II 
var ground, playerCount,gameState
var castle,castleI ,  castle2 ,  c2I;
var fire2I , fire2 ;
function preload(){
    backgroundI= loadImage("Background.jpeg");
    riverI=loadImage("River.jpg");
    bridgeI=loadImage("bridge.png");
    dragon1I=loadImage("Dragon1.gif");
    c2I = loadImage("r.png")
    dragon2I=loadImage("dragon2.gif");
    dragon3I=loadImage("dragon3.gif");
    fireI= loadImage("fire.png")
    dragon1II = loadImage("gragon1.jpg");
    dragon2II=loadImage("2 card.jpg");
    dragon3II=loadImage("dra3.jpg")
     
    fire2I=loadImage("blue.png")
    castleI=loadImage("r2.png")

}
function setup(){
     createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;


    ground = createSprite( 700,500,displayWidth,displayHeight)
    ground.addImage(backgroundI,"gro")
    ground.scale=1.5
    
    river = createSprite( displayWidth/2-30,displayHeight/2+10,600,100)
    river.addImage(riverI,"riv")
    river.scale=1.05
    bridge = createSprite( displayWidth/2-33,200,100,100)
    bridge.addImage(bridgeI,"bri")
    bridge.scale = 0.4;
    bridge2 = createSprite( displayWidth/2-33,700,100,100)
    bridge2.addImage(bridgeI,"brig")
    bridge2.scale = 0.4;
    
    
    dragon1 = createSprite(300,500)
    dragon1.addImage(dragon1I,"d1")
    dragon1.scale=0.5;

    dragon2 = createSprite(1300,520)
    dragon2.addImage(dragon2I,"d2")
    dragon2.scale= 1;
    
    
    castle = createSprite(displayWidth-100,400)
    castle.addImage(castleI,"cas")
    castle2= createSprite( 100,400)
    castle2.addImage(c2I,"cast")
     
 
   
   
   
    
}


function draw(){


  if(playerCount === 2){
    game.update(1);
  }
   
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
    

        
    background("white")
   /* 
    image(dragon2II,600,100,50 ,50);
    image(dragon3II,600,100,50 ,50);*/
    
    if(keyDown(LEFT_ARROW)){
        dragon1.x+= -5
    }
    if(keyDown(RIGHT_ARROW)){
        dragon1.x+= 5
    }
    if(keyDown(UP_ARROW)){
        dragon1.y+= -5
    } if(keyDown(DOWN_ARROW)){
        dragon1.y+= 5
    }
    image(dragon1II,200,200,200,200);

    

    if(keyDown(65)){
        dragon2.x+= -5
    }
    if(keyDown(68)){
        dragon2.x+= 5
    }
    if(keyDown(87)){
        dragon2.y+= -5
    } if(keyDown(83)){
        dragon2.y+= 5
    }
    fire = createSprite(520,280,100,100);
    fire.addImage(fireI);
    fire.scale=0.2;
    fire.visible=false;
    if(keyWentUp("space")) 
    {
      fire.visible=true;
      fire.velocityX=10  
    }
    fire.y=dragon1.y
    fire.x=dragon1.x+60
    
  

  
      fire2 = createSprite(520,280,100,100);
      fire2.addImage(fire2I);
      fire2.scale=0.16;
      fire2.visible=false;
      if(keyWentUp(70)) 
      {
        fire2.visible=true;
        fire2.velocityX=-10  
      }
      fire2.y=dragon2.y-20
      fire2.x=dragon2.x-60
   

    drawSprites();
}

 function windoResized()
{
  resizeCanvas(displayWidth,displayHeight)
}

    
      
    
