var ghost1, ghost2,ghost3
var sceneImg
var ghost1Img, ghost2Img, ghost3Img
var background1;
function preload(){
	sceneImg = loadImage("background.png")
	ghost1Img = loadImage("ghost1.png")
	ghost2Img = loadImage("ghost2.png")
	ghost3Img = loadImage("ghost3.png")
}
function setup(){
createCanvas(800,400)
g1Group = new Group()
g2Group = new Group()
g3Group = new Group()
background1 = createSprite(400,200)
background1.addImage(sceneImg)
background1.scale = 3                          
}
function draw(){
	background("black")
	if(frameCount%80 === 0){
		var r=Math.round(random(1,3))
		if(r===1){
			g1()
		}
		else if(r===2){
			g2()
		}
		else{
			g3()
		}
	}
	drawSprites();

}
function g1(){
	ghost1 = createSprite (-20,Math.round(random(50,350)),10,20)
	ghost1.addImage(ghost1Img)
	ghost1.scale = 0.3
	ghost1.velocityX = 2
	ghost1.lifetime = 400
	g1Group.add(ghost1)
}
function g2(){
	ghost2 = createSprite(-20,Math.round(random(50,350)),10,20)
	ghost2.addImage(ghost2Img)
	ghost2.scale = 0.3
	ghost2.velocityX = 2
	ghost2.lifetime = 400
	g2Group.add(ghost2)
}
function g3(){
	ghost3 = createSprite(-20,Math.round(random(50,350)),10,20)
	ghost3.addImage(ghost3Img)
	ghost3.scale = 0.3
	ghost3.velocityX = 2
	ghost3.lifetime = 400
	g3Group.add(ghost3)
}