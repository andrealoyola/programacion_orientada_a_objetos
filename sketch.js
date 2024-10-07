let posX, posY;
let velX, velY; //velocidad
let diametro;
let radio;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);

  radio = ceil(random(20, 50));
  diametro = radio * 2;
  posX = random(radio, width - radio);
  posY = random(radio, height - radio);
  velX = 6;
  velY = 6;
  bg = color(random(150, 0, 230), random(70, 0, 240), random(100, 10, 180));

  //velX = random(-10, 10)
  //velY = random(-10, 10)
}

function draw() {
  background(bg);
  posX += velX;
  posY += velY;

  //if (posX > width - radio || posX < radio)
  //if(4<10 && 5>20) las 2 deben ser verdaderas para que se ejecute - || = OR basta que una de las 2 sea verdadera
  if (posX > width - radio || posX < radio) {
    velX *= -1;
    bg = color(random(150, 0, 230), random(70, 0, 240), random(100, 10, 180));
    //console.log("se fueeeee");
  }
  if (posY > height - radio || posY < radio) {
    velY *= -1;
    bg = color(random(150, 0, 230), random(70, 0, 240), random(100, 10, 180));
  }
  circle(posX, posY, diametro);
  fill(255);
  noStroke();
}
