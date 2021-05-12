var bg
var wood_h,wood_v
var tom,tom_Image,tom_running
var sofa,sofa2,sofa3
var table
var kitchen
var tv,tabletv
var bookshelf
var jerry1,jerry2,jerry3,jerry4,jerry5
var l1,l2,l3,l4
var c1,c2,c3
var a1,a2,a3,a4
var t1,t2
var c4,c5,c6
var h1,h2
var m1,m2,m3,m4
var e1,e2,e3,e4
var bed
var jerry1_Image
var score=0

function preload(){
  tom_Image=loadImage("tom_s.png")
  tom_running=loadImage("tom.png")
  bg=loadImage("bg.jpg")
  wood_h=loadImage("wood.png")
  wood_v=loadImage("wood2.png")
  sofa=loadImage("sofa.png")
  sofa2=loadImage("sofa2.png")
  sofa3=loadImage("sofa3.png")
  table=loadImage("table.png")
  kitchen=loadImage("kitchen.png")
  tv=loadImage("tv.png")
  tabletv=loadImage("tabletv.png")
  bookshelf=loadImage("bookshelf.jpg")
  bed=loadImage("bed.png")
  //jerry1_Image=loadImage()
  
}

function setup() {
  createCanvas(1366, 620);
 //creating edge sprites
  l1=createSprite(5,312,5,625)
  l2=createSprite(1361,312,5,625)
  l3=createSprite(700,5,1380,5)
  l4=createSprite(680,620,1380,5)
 //giving color to edges
  l1.shapeColor="white"
  l2.shapeColor="white"
  l3.shapeColor="white"
  l4.shapeColor="white"
 //adding images to the edges
  l1.addImage(wood_v)
  l2.addImage(wood_v)
  l3.addImage(wood_h)
  l4.addImage(wood_h)
  
  /*l1.debug=true
  l2.debug=true
  l3.debug=true
  l4.debug=true*/

  l1.setCollider("rectangle",-75,20)
  l2.setCollider("rectangle",75,20)
  l3.setCollider("rectangle",20,-150)
  l4.setCollider("rectangle",20,150)

 //creating sprites for forming the letter "C"
  c1=createSprite(250,180,145,20)
  c1.shapeColor="white"
  c1.addImage(sofa2)
  c1.scale=0.5

  c2=createSprite(150,260,20,150)
  c2.shapeColor="white"
  c2.addImage(sofa)

  c3=createSprite(250,345,145,20)
  c3.shapeColor="white"
  c3.addImage(sofa3)
  c3.scale=0.3

 //creating sprites for forming the letter "A"
    
  a3=createSprite(450,250,20,160)
  a3.shapeColor="white"
  a3.addImage(tv)
  a3.scale=0.6

  a3.debug=false
  a3.setCollider("rectangle",5,5,175,275,-5)
 //creating sprites for forming the letter "T"
  t1=createSprite(700,200,170,20)
  t1.shapeColor="white"
  t1.addImage(bookshelf)
  t1.scale=0.3
  t1.debug=false

 
 //creating sprites for forming the letter "C"
 
  c6=createSprite(1000,250,20,150)
  c6.shapeColor="white"
  c6.addImage(kitchen)
  c6.scale=0.7

  c6.debug=false
  

  h4=createSprite(1050,240,70,20)
  h4.shapeColor="white"
  h4.addImage(table)
  h4.scale=0.3


 //creating sprites for forming the letter "M"
 
  m2=createSprite(650,550,20,120)
  m2.shapeColor="white"
  m2.addImage(bed)
  m2.scale=0.7
 
//creating PC
  tom=createSprite(70,100,50,100)
  tom.addImage(tom_running)
  tom.scale=0.4
  
  tom.debug=false
  tom.setCollider("circle",-50,60,70)
  
  jerry1=createSprite(random(150,1360),random(200,600),20,20)
  jerry2=createSprite(random(150,1360),random(200,600),20,20)
  jerry3=createSprite(random(150,1360),random(200,600),20,20)
  jerry4=createSprite(random(150,1360),random(200,600),20,20)
  jerry5=createSprite(random(150,1360),random(200,600),20,20)

  jerry1.velocityX=random(-4,4)
  jerry1.velocityY=random(-4,4)

  jerry2.velocityX=random(-3,3)
  jerry2.velocityY=random(-3,3)

  jerry3.velocityX=random(-6,2)
  jerry3.velocityY=random(-2,6)

  jerry4.velocityX=random(-5,5)
  jerry4.velocityY=random(-5,5)

  jerry5.velocityX=random(-5,5)
  jerry5.velocityY=random(-5,5)
}

function draw() {
 background("lightblue")

  if(keyDown(UP_ARROW)){
    tom.velocity.y=-4
  }
  if(keyDown(DOWN_ARROW)){
    tom.velocity.y=4
  }
  if(keyDown(RIGHT_ARROW)){
    tom.velocity.x=4
  }
  if(keyDown(LEFT_ARROW)){
    tom.velocity.x=-4
  }
  tom.bounceOff(l1)
  tom.bounceOff(l2)
  tom.bounceOff(l3)
  tom.bounceOff(l4)

  tom.bounceOff(c1)
  tom.bounceOff(c2)
  tom.bounceOff(c3)
  tom.bounceOff(c6)
  tom.bounceOff(a3)
  tom.bounceOff(t1)
  tom.bounceOff(h4)
  tom.bounceOff(m2)

  jerry1.bounceOff(l1)
  jerry1.bounceOff(l2)
  jerry1.bounceOff(l3)
  jerry1.bounceOff(l4)

  jerry1.bounceOff(c1)
  jerry1.bounceOff(c2)
  jerry1.bounceOff(c3)
  jerry1.bounceOff(c6)
  jerry1.bounceOff(a3)
  jerry1.bounceOff(t1)
  jerry1.bounceOff(h4)
  jerry1.bounceOff(m2)

  jerry1.bounceOff(l1)
  jerry1.bounceOff(l2)
  jerry1.bounceOff(l3)
  jerry1.bounceOff(l4)

  jerry1.bounceOff(c1)
  jerry1.bounceOff(c2)
  jerry1.bounceOff(c3)
  jerry1.bounceOff(c6)
  jerry1.bounceOff(a3)
  jerry1.bounceOff(t1)
  jerry1.bounceOff(h4)
  jerry1.bounceOff(m2)
  
  jerry2.bounceOff(l1)
  jerry2.bounceOff(l2)
  jerry2.bounceOff(l3)
  jerry2.bounceOff(l4)

  jerry2.bounceOff(c1)
  jerry2.bounceOff(c2)
  jerry2.bounceOff(c3)
  jerry2.bounceOff(c6)
  jerry2.bounceOff(a3)
  jerry2.bounceOff(t1)
  jerry2.bounceOff(h4)
  jerry2.bounceOff(m2)
 
  jerry3.bounceOff(l1)
  jerry3.bounceOff(l2)
  jerry3.bounceOff(l3)
  jerry3.bounceOff(l4)

  jerry3.bounceOff(c1)
  jerry3.bounceOff(c2)
  jerry3.bounceOff(c3)
  jerry3.bounceOff(c6)
  jerry3.bounceOff(a3)
  jerry3.bounceOff(t1)
  jerry3.bounceOff(h4)
  jerry3.bounceOff(m2)
  
  jerry4.bounceOff(l1)
  jerry4.bounceOff(l2)
  jerry4.bounceOff(l3)
  jerry4.bounceOff(l4)

  jerry4.bounceOff(c1)
  jerry4.bounceOff(c2)
  jerry4.bounceOff(c3)
  jerry4.bounceOff(c6)
  jerry4.bounceOff(a3)
  jerry4.bounceOff(t1)
  jerry4.bounceOff(h4)
  jerry4.bounceOff(m2)

  jerry5.bounceOff(l1)
  jerry5.bounceOff(l2)
  jerry5.bounceOff(l3)
  jerry5.bounceOff(l4)

  jerry5.bounceOff(c1)
  jerry5.bounceOff(c2)
  jerry5.bounceOff(c3)
  jerry5.bounceOff(c6)
  jerry5.bounceOff(a3)
  jerry5.bounceOff(t1)
  jerry5.bounceOff(h4)
  jerry5.bounceOff(m2)

  if(tom.isTouching(jerry1)){
    jerry1.destroy()
    score+=20
  }

  if(tom.isTouching(jerry2)){
    jerry2.destroy()
    score+=30
  }

  if(tom.isTouching(jerry3)){
    jerry3.destroy()
    score+=40
  }

  if(tom.isTouching(jerry4)){
    jerry4.destroy()
    score+=50
  }

  if(tom.isTouching(jerry5)){
    jerry5.destroy()
    score+=10
  }


  drawSprites();
  textSize(20)
  stroke("black")
  fill("black")
  text("SCORE : "+score,1200,50)
  
}

