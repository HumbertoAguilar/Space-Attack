var prefondo
var buton
var postfondo
var retrybuton
var fondo
var shooter
var gun 
var enemy
var barrera
var shot
var gameState=0
var shutsound
bestscore=0
var score=0
var vidas=5
function preload(){
  shooterimg=loadImage("nave_preview_rev_1.png")

  fondoimg=loadImage("566899dd-729c-4a52-bc3e-8bb964745cdb.jpg")
 // shot=loadSound("sound.mp3")
//sound=loadSound("intro1.mp3")
kill=loadSound("muerte.mp3")
shot=loadSound("Record (online-voice-recorder.com) (1).mp3")
butonimg=loadImage("estilo-de-dibujos-animados-vectoriales-botones-habilitados-y-desactivados-con-texto-para-el-diseno-de-juegos-sobre-fondo-de-textura-de-nave-espacial-boton-de-interfaz-de-juego-en-la-nave-espacial-interi-.png")
gunimg=loadImage("bala_preview_rev_1.png")
shotenimg=loadImage("4e3d4629-dba0-4bd1-b19c-0c21164765a0_preview_rev_1.png")
retryimg=loadImage("png-transparent-computer-icons-reboot-symbol-restart-miscellaneous-purple-violet-thumbnail_preview_rev_3.png")
scoreimg=loadImage("Cool Text - Score 425022519992321.png")
vidasimg=loadImage("Cool Text - LIves 425022536144522.png")
gameover=loadImage("ebf72b7b-09e0-45c6-9e23-e4d7de6e2c72.jpg")
playimg=loadImage("Cool Text - Press Play 425021079726323.png")
prefondoimg=loadImage("ebf72b7b-09e0-45c6-9e23-e4d7de6e2c72.jpg")
loseSound=loadSound("loseRecord (online-voice-recorder.com) (4).mp3")
balaenemgo=loadImage("e13b7fed-77fe-4e90-aab2-dc8491337425_preview_rev_1 (1).png")
explosion=loadImage("cuadros-animacion-explosion-pixel-art_1284-53122_preview_rev_1.png")
level1img=loadImage("Cool Text - level 1 425022651658708.png")

level2img=loadImage("Cool Text - level 2 425022680853783.png")
level3img=loadImage("Cool Text - level 3 425022692552279 (1).png")
level4img=loadImage("Cool Text - level 4 425022721289434.png")
navesimg=loadImage('ovni-nave-espacial-alienigena-conjunto-dibujos-animados-naves-espaciales_8071-3035_preview_rev_1.png')
textSpace=loadImage('Cool Text - SPACE ATTACK 425020838796534.png')
over=loadImage('Cool Text - Game over 425088976254194.png')
bestscoreimg=loadImage('Cool Text - Best score 425169446568569.png')
}
function setup(){
  createCanvas(600,630)
  
  fondo=createSprite(300,200,600,800)
  fondo.addImage(fondoimg)
  fondo.scale=1.2
  shooter=createSprite(300,450,30,30)
  shooter.addImage(shooterimg)
  shooter.scale=.2
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  gun.scale=.11

enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),40,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),40,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),40,50,50)
enemy6.shapeColor="green"
enemy6.visible=false

postfondo=createSprite(310,250,600,600)
postfondo.addImage(gameover)
postfondo.scale=1.8
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.scale=0.6
retrybuton.visible=false
//sound.play();


  prefondo=createSprite(300,300,600,600)

//imagen fondo
prefondo.addImage(prefondoimg)
prefondo.scale=1.8
scoreAn=createSprite(100,40)
  scoreAn.addImage(scoreimg)
  scoreAn.scale=.3
  vidasAn=createSprite(450,40)
  vidasAn.scale=.3
  vidasAn.addImage(vidasimg)
playButton=createButton('PLAY')
playButton.position(220,400)
returnButton=createButton('↺')
returnButton.position(-220,450)
pauseButton=createButton('| |')
pauseButton.position(-440,550)
pauseButton.size(70,70)
instructionsButton=createButton('?')
instructionsButton.position(520,550)
instructionsButton.size(70,70)
playBoton=createButton('▶')
playBoton.position(-360,550)
playBoton.size(70,70)
reiniciar=createButton('↺')
reiniciar.position(-360,550)
reiniciar.size(70,70)


play=createSprite(300,300)
  play.addImage(playimg)
  play.scale=0.55

textplay=createSprite(300,150)
textplay.addImage(textSpace)
textplay.scale=0.5
//imagenes niveles
level=createSprite(300,130)
level.addImage(level1img)
level.scale=.6
level.visible=false

level2=createSprite(300,130)
level2.addImage(level2img)
level2.scale=.6
level2.visible=false
level3=createSprite(300,130)
level3.visible=false
level3.scale=.6
level3.addImage(level3img)
level4=createSprite(300,130)
level4.visible=false
level4.scale=.6
level4.addImage(level4img)

barrera=createSprite(610,300,20,600)
barrera.visible=false
barrera2=createSprite(-10,300,20,600)
barrera2.visible=false
  over1=createSprite(300,200)
  over1.addImage(over)
  over1.scale=.6
  over1.visible=false
  bestScores=createSprite(150,600)
  bestScores.addImage(bestscoreimg)
  bestScores.scale=.3
}

function draw(){
  background("black")
  if(score>bestscore){
    bestscore=score
  }
  if(vidas<0){
    vidas=0
  }
  instructionsButton.mousePressed(regresar)
console.log(gameState)
      if(gameState===0){
        pauseButton.position(-440,550)


        playButton.mousePressed(playB)

        retrybuton.visible=false
        postfondo.visible=false


}
if(gameState===1){
  pauseButton.position(440,550)

  pauseButton.mousePressed(pause)
shooter.collide(barrera)
shooter.collide(barrera2)
  if(fondo.y===400){
    fondo.y=200
  }
  retrybuton.visible=false
  postfondo.visible=false
prefondo.visible=false
play.visible=false
shooter.velocityX=0
if(score===0){
level.visible=true


}
if(score>0){
  level.visible=false
}
spawnenemy();
enemyShot();
move();
shoot();
console.log(score)
if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play();
}
if(gunGroup.isTouching(enemy2)){

  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play();
  }

  if(gunGroup.isTouching(enemy3)){

    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play();
    }

if(shoten.isTouching(shooter)){
vidas+=-1
shoten.destroy();
loseSound.play();


}
if(shoten2.isTouching(shooter)){
  vidas+=-1
  shoten2.destroy();
  loseSound.play();
  
  
  }
  if(shoten3.isTouching(shooter)){
    vidas+=-1
    shoten3.destroy();
    loseSound.play();
    
    
    }
    if(score===20){
      gameState+=+1
      vidas=5
      level2.visible=true
    }

    if(vidas<1){
      gameState=5
    }
}


        if(gameState===2){
          pauseButton.mousePressed(pause)

          if(fondo.y===400){
            fondo.y=200
          }
          if(score>20){
            level2.visible=false
          }

          shooter.collide(barrera)
shooter.collide(barrera2)
spawn2();
enemyshot2();
move();
shoot();
shooter.velocityX=0

console.log(score)
if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play()
}
if(gunGroup.isTouching(enemy2)){
  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play()
  }

  if(gunGroup.isTouching(enemy3)){
    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play()
    }
    if(gunGroup.isTouching(enemy4)){
      gun.destroy();
      enemy4.destroy();
      score+=+1
      kill.play()
      }
      if(shoten.isTouching(shooter)){
        vidas+=-1
        shoten.destroy();
        loseSound.play();
        
        
        }
        if(shoten2.isTouching(shooter)){
          vidas+=-1
          shoten2.destroy();
          loseSound.play();
          
          
          }
          if(shoten3.isTouching(shooter)){
            vidas+=-1
            shoten3.destroy();
            loseSound.play();
            
            
            }
            if(shoten4.isTouching(shooter)){
              vidas+=-1
              shoten4.destroy();
              loseSound.play();
              
              
              }
    if(score===40){
      gameState+=+1
      vidas=5
      level3.visible=true
    }


    if(vidas<1){
      gameState=5
    }
        }

                  if(gameState===3){
                    pauseButton.mousePressed(pause)

                    if(fondo.y===400){
                      fondo.y=200
                    }
                    if(score===40){
                      level3.visible=true
                    }
                    if(score>40){
                      level3.visible=false
                    }
                    shooter.collide(barrera)
shooter.collide(barrera2)
spawn3();
enemyshot3();
move();
shoot();
shooter.velocityX=0

console.log(score)
if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play()
}
if(gunGroup.isTouching(enemy2)){
  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play()
  }

  if(gunGroup.isTouching(enemy3)){
    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play()
    }
    if(gunGroup.isTouching(enemy4)){
      gun.destroy();
      enemy4.destroy();
      score+=+1
      kill.play()
      }
      if(gunGroup.isTouching(enemy5)){
        gun.destroy();
        enemy5.destroy();
        score+=+1
        kill.play()
        }
        if(shoten5.isTouching(shooter)){
          vidas+=-1
          shoten5.destroy();
          loseSound.play();
          
          
          }
          if(shoten6.isTouching(shooter)){
            vidas+=-1
            shoten6.destroy();
            loseSound.play();
            
            
            }
            if(shoten7.isTouching(shooter)){
              vidas+=-1
              shoten7.destroy();
              loseSound.play();
              
              
              }
              if(shoten8.isTouching(shooter)){
                vidas+=-1
                shoten8.destroy();
                loseSound.play();
                
                
                }
                if(shoten9.isTouching(shooter)){
                  vidas+=-1
                  shoten9.destroy();
                  loseSound.play();
                  
                  
                  }
  
        if(score===70){
          gameState+=+1
          vidas=5
          level4.visible=true
        }
        if(vidas<1){
          gameState=5
        }

                  }

                  if(gameState===4){
                    pauseButton.mousePressed(pause)

                    if(fondo.y===400){
                      fondo.y=200
                    }
                    if(score>70){
level4.visible=false

                    }
                    shooter.collide(barrera)
shooter.collide(barrera2)
                    spawn4();
                    enemyshot4();

                    move();
                    shoot();
                    console.log(score)
                    shooter.velocityX=0

if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play()
}
if(gunGroup.isTouching(enemy2)){
  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play()
  }

  if(gunGroup.isTouching(enemy3)){
    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play
    }
    if(gunGroup.isTouching(enemy4)){
      gun.destroy();
      enemy4.destroy();
      score+=+1

kill.play()      
      }
      if(gunGroup.isTouching(enemy5)){
        gun.destroy();
        enemy5.destroy();
        score+=+1
        kill.play()
        }
        if(gunGroup.isTouching(enemy6)){
          gun.destroy();
          enemy6.destroy();
          score+=+1

          kill.play()
          }

          if(shoten5.isTouching(shooter)){
            vidas+=-1
            shoten5.destroy();
            loseSound.play();
            
            
            }
            if(shoten6.isTouching(shooter)){
              vidas+=-1
              shoten6.destroy();
              loseSound.play();
              
              
              }
              if(shoten7.isTouching(shooter)){
                vidas+=-1
                shoten7.destroy();
                loseSound.play();
                
                
                }
                if(shoten8.isTouching(shooter)){
                  vidas+=-1
                  shoten8.destroy();
                  loseSound.play();
                  
                  
                  }
                  if(shoten9.isTouching(shooter)){
                    vidas+=-1
                    shoten9.destroy();
                    loseSound.play();
                    
                    
                    }
                    if(shoten10.isTouching(shooter)){
                      vidas+=-1
                      shoten10.destroy();
                      loseSound.play();
                      
                      
                      }
                      if(vidas<1){
                        gameState=5
                      }
                   
                  }

                              if(gameState===5){
                                returnButton.position(220,450)
                                playButton.position(-220,400)
                                pauseButton.position(-440,550)
                                instructionsButton.position(-520,550)
shooter.destroy();
enemy1.destroy();
enemy2.destroy();
enemy3.destroy();
enemy4.destroy();
enemy5.destroy();
enemy6.destroy();
level.destroy();
level2.destroy();
level3.destroy();
level4.destroy();


postfondo.visible=true
  over1.visible=true

if(mousePressedOver(retrybuton)){
gameState=0
  create();
  shooter.velocityX=0
  retrybuton.visible=false
  postfondo.visible=false
    over1.visible=false

  create();
  vidas=5
  score=0

}


                              }
if (gameState===6){
  playBoton.position(440,550)
  playBoton.mousePressed(playB)
  reiniciar.position(360,550)
  reiniciar.mousePressed(retirn)

enemy1.velocityY=0
enemy2.velocityY=0
enemy3.velocityY=0
enemy4.velocityY=0
enemy5.velocityY=0
enemy6.velocityY=0


}



drawSprites();
textSize(35)
fill("white")
text("   "+score,165,50)
text("   "+vidas,495,50)
textSize(43)
text(""+bestscore,308,615)
}
 

 






function shoot(){
if(keyWentUp("space")){
gun=createSprite(shooter.x,shooter.y)
gun.addImage(gunimg)
gun.scale=.05

gun.velocityY=-40
shot.play();



}
gunGroup.add(gun)
gunGroup.lifetime=10




}

function spawnenemy(){
/*if(frameCount%20===0){
enemy=createSprite(random(50,400),0,50,50)
enemy.shapeColor="green"
enemy.velocityY=3


}
enemyGroup.add(enemy)*/
if(frameCount%200===0){
enemy1=createSprite(random(50,400),-50,50,50)
enemy1.addImage(shotenimg)
enemy1.velocityY=5
enemy1.scale=.3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.3

enemy2.velocityY=5

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.3

enemy3.velocityY=5


}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();
  enemy2.destroy();
  enemy3.destroy();
}
}

function spawn2(){
  if(frameCount%150===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.scale=.27

enemy1.velocityY=5.7

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.27

enemy2.velocityY=5.7

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.27
enemy3.velocityY=5.7
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.scale=.27


enemy4.velocityY=5.7
enemy4.visible=true

}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();
  enemy2.destroy();
  enemy3.destroy();
  enemy4.destroy();
}
}

function spawn3(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.scale=.25

enemy1.velocityY=6.5

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.velocityY=6.5
enemy2.scale=.25


enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.velocityY=6.5
enemy3.scale=.25

enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.scale=.25

enemy4.velocityY=6.5
enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.addImage(shotenimg)
enemy5.scale=.25

enemy5.velocityY=6.5
enemy5.visible=true
}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();

  enemy2.destroy();

  enemy3.destroy()
  enemy4.destroy();
  enemy5.destroy();
}


}
function spawn4(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.velocityY=7
    enemy1.scale=.22

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.22


enemy2.velocityY=7

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.22

enemy3.velocityY=7
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.velocityY=7
enemy4.scale=.22

enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.addImage(shotenimg)
enemy5.scale=.22

enemy5.velocityY=7
enemy5.visible=true

enemy6=createSprite(random(50,400),-50,50,50)
enemy6.addImage(shotenimg)
enemy6.velocityY=7
enemy6.visible=true
enemy6.scale=.22
}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();
  enemy2.destroy();

    enemy3.destroy()
    enemy4.destroy();

    enemy5.destroy();

    enemy6.destroy();
}
}

function move(){
  if(keyCode===LEFT_ARROW){
    shooter.x+=-9
  }
  if(keyCode===RIGHT_ARROW){
    shooter.x+=+9
  }
}

function create(){

//nuevo
fondo=createSprite(300,200,600,800)
  fondo.addImage(fondoimg)
  fondo.scale=3
  shooter=createSprite(300,500,30,30)
  shooter.addImage(shooterimg)
  shooter.scale=.2
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  gun.scale=.11
  returnButton.position(-220,450)

playButton.position(220,400)
returnButton.position(-220,450)
pauseButton.position(440,550)
pauseButton.size(70,70)
instructionsButton.position(520,550)
instructionsButton.size(70,70)
playBoton.position(-360,550)
playBoton.size(70,70)
reiniciar.position(-360,550)
reiniciar.size(70,70)

enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),40,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),40,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),40,50,50)
enemy6.shapeColor="green"
enemy6.visible=false

postfondo=createSprite(310,250,600,600)
postfondo.addImage(gameover)
postfondo.scale=1.7
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.scale=0.6
retrybuton.visible=false


  prefondo=createSprite(300,300,600,600)

//imagen fondo
prefondo.addImage(prefondoimg)
prefondo.scale=1.8

playButton.position(220,350)
play=createSprite(300,280)
  play.addImage(playimg)
  play.scale=0.55

textplay=createSprite(300,150)
textplay.addImage(textSpace)
textplay.scale=0.5
//imagenes niveles
level=createSprite(300,130)
level.addImage(level1img)
level.scale=.6
level.visible=false
scoreAn=createSprite(100,40)
  scoreAn.addImage(scoreimg)
  scoreAn.scale=.3
  vidasAn=createSprite(450,40)
  vidasAn.scale=.3
  vidasAn.addImage(vidasimg)

level2=createSprite(300,130)
level2.addImage(level2img)
level2.scale=.6
level2.visible=false
level3=createSprite(300,130)
level3.visible=false
level3.scale=.6
level3.addImage(level3img)
level4=createSprite(300,130)
level4.visible=false
level4.scale=.6
level4.addImage(level4img)

barrera=createSprite(610,300,20,600)
barrera.visible=false
barrera2=createSprite(-10,300,20,600)
barrera2.visible=false
  over1=createSprite(300,200)
  over1.addImage(over)
  over1.scale=.6
  over1.visible=false
  over1.visible=false
  bestScores=createSprite(150,600)
  bestScores.addImage(bestscoreimg)
  bestScores.scale=.3
}
function enemyShot(){
  if(enemy1.y<170){
  if(frameCount%80===0){

shoten=createSprite(enemy1.x,enemy1.y,5,10)
shoten.velocityY=20
shoten.addImage(balaenemgo)
shoten.scale=.6

  }
  if(frameCount%80===0){

    shoten2=createSprite(enemy2.x,enemy2.y,5,10)
    shoten2.velocityY=20
    shoten2.addImage(balaenemgo)
shoten2.scale=.6
    
      }
}
if(frameCount%80===0){

  shoten3=createSprite(enemy3.x,enemy3.y,5,10)
  shoten3.velocityY=20
  shoten3.addImage(balaenemgo)
  shoten3.scale=.6

}
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();

}
    }
    function enemyshot2(){

      if(enemy1.y<100){
        if(frameCount%40===0){
      
      shoten=createSprite(enemy1.x,enemy1.y,5,10)
      shoten.velocityY=25
      shoten.addImage(balaenemgo)
      shoten.scale=0.6
      
        }
        if(frameCount%40===0){
      
          shoten2=createSprite(enemy2.x,enemy2.y,5,10)
          shoten2.velocityY=25
          shoten2.addImage(balaenemgo)
          shoten2.scale=.6
          
            }
      }
      if(frameCount%40===0){
      
        shoten3=createSprite(enemy3.x,enemy3.y,5,10)
        shoten3.velocityY=25
        shoten3.addImage(balaenemgo)
        shoten3.scale=.6


      }
      if(frameCount%40===0){
      
        shoten4=createSprite(enemy4.x,enemy4.y,5,10)
        shoten4.velocityY=25
        shoten4.addImage(balaenemgo)
        shoten4.scale=.6
      }
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();
  shoten4.destroy();

}

    }


    function enemyshot3(){

      if(enemy5.y<200){
        if(frameCount%60===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=30
      shoten5.addImage(balaenemgo)
      shoten5.scale=.6
        }
        if(frameCount%40===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=30
          shoten6.addImage(balaenemgo)
          shoten6.scale=.6
          
            }
      }
      if(frameCount%60===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=30
        shoten7.addImage(balaenemgo)
shoten7.scale=.6

      }
      if(frameCount%60===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=30
        shoten8.addImage(balaenemgo)
        shoten8.scale=.6
      }
      if(frameCount%60===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=30
        shoten9.addImage(balaenemgo)
        shoten9.scale=.6
      }
if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();

}

    }

    function enemyshot4(){
      if(enemy5.y<200){
        if(frameCount%40===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=35
      shoten5.addImage(balaenemgo)
      shoten5.scale=.6
        }
        if(frameCount%40===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=35
          shoten6.addImage(balaenemgo)
          shoten6.scale=.6
          
            }
      }
      if(frameCount%40===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=35
        shoten7.addImage(balaenemgo)
shoten7.scale=.6

      }
      if(frameCount%40===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=35
        shoten8.addImage(balaenemgo)
        shoten8.scale=.6
      }
      if(frameCount%40===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=35
        shoten9.addImage(balaenemgo)
        shoten9.scale=.6
      }
      if(frameCount%40===0){

        shoten10=createSprite(enemy6.x,enemy6.y,5,10)
        shoten10.velocityY=35
        shoten10.addImage(balaenemgo)
        shoten10.scale=.6
      }


if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();
  shoten10.destroy()

}



    }

function playB(){

  gameState=1
  textplay.visible=false
  playButton.position(-200,300)
  enemy1.velocityY=5
enemy2.velocityY=5
enemy3.velocityY=5
enemy4.velocityY=5
enemy5.velocityY=5
enemy6.velocityY=5
playBoton.position(-360,550)
reiniciar.position(-360,550)


}
function pause(){
  gameState=6
}

function retirn(){

  create()
  gameState=0
  reiniciar.position(-360,550)
  playBoton.position(-440,550)


}

function regresar(){
  location.replace('https://humbertoaguilar.github.io/Space-Attack-Controls/')
}