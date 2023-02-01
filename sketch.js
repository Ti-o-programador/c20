const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var body1;
var body2;
var body3;
var chao;

function preload() {

}

function setup() {
	createCanvas(800, 700);



	var options = {
		isStatic: false,
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0.1
	}

	var options1 = {
		isStatic: true
	}



	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	chao = Bodies.rectangle(400, 690, 800, 20, options1);
	World.add(world, chao);

	body1 = Bodies.circle(600, 100, 20, options);
	World.add(world, body1);

	body2 = Bodies.rectangle(500, 100, 200, 40, options);
	World.add(world, body2);

	body3 = Bodies.rectangle(200, 100, 50, 50, options);
	World.add(world, body3);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("green");
	Engine.update(engine);
	ellipse(body1.position.x, body1.position.y, 20);
	rect(body2.position.x, body2.position.y, 200, 40);
	rect(body3.position.x, body3.position.y, 50, 50);
	rect(chao.position.x, chao.position.y, 800, 20);
	drawSprites();


}


