var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
path=createSprite(200,200)
path.velocityY = 4; 
path.addImage(pathImg)



//Criando menino que corre 
boy = createSprite(180,340,30,30)
boy.addAnimation("O_cara_que_corre",boyImg);
boy.scale = 0.1
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible = false
}


function draw() {
background(0);
boy.x = World.mouseX;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 //Reiniciar o fundo
 if(path.y > 400 ){
    path.y = height/2;
 }



 drawSprites();

 }




