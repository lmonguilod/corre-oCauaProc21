
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,leftside,rightside;
var world, engine;
var radius = 40;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;



	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//ball = Matter.Bodies.circle(100,300,50,balls_options);
	ball = Bodies.circle(260,100,radius/2,balls_options); //criação da bola usando o raio definido la nas variáveis; 
	World.add(world, ball);

		//Create the Bodies Here.
		ground = new Ground(width/2,670,width,20);
		leftside = new Ground(1100,600,20,120);
		rightside = new Ground(1300,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // Engine.update(engine); ja está sendo usado o engine.run

 // push(); //nao é necessário aqui porque só temos uma ellipse;
  //ellipseMode(CENTER); ellipse não se usa com CENTER, e sim com RADIUS(passar de graus para radiano).
  ellipse(ball.position.x,ball.position.y,radius,radius);
 // pop();

  ground.display();
  leftside.display();
  rightside.display();

 // keyPressed(); //não precisamos chamar essa função porque ela é pré definida, ou seja, ja tem uma funcionalidade própria;
 //quando acontecer de a seta para cima ser apertada, o computador automaticamente encontra a função que verifica isso.
 //chamamos funções quando não são pré definidas;
}

function keyPressed(){
   if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
   }
}
