let bg;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = color(random(150, 0, 230), random(70, 0, 240), random(100, 10, 180));
  //circulo admite (posX, posY y diametro)
  // for(let x = 20; x < width, x+=20){ **la variable x puede llamarse como nos de la gana
  //     circle(x, 20, 10);
  //     circle(20, x, 10); *circulos se irian para abajo
  //     circle(x, x, 10); *circulos aárecen de manera diagonal, aumenta de igual manera en sentido de las x y las y
  // for(let x = 20; x < width, x+=50) ** existiria mas espacio entre los circulos
  //for loop anidado
  //for(let x = 20; x < width, x+=20){
  //    for(let y = 20; y < height; y +=20){
  //        circle(x, y, random(2, 10)); // function set up, en function draw, todos los circulos cambian de tamaño
  // let
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }
}

function draw() {
  // space = mouseX + 1;
  background(bg);
  for (let i = 0; i < 100; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
}

class Pelota {
  // Plano de instrucciones para creae una pelota
  constructor() {
    this.rad = ceil(random(5, 30));
    this.diam = this.rad * 2;
    this.posX = random(this.rad, width - this.rad);
    this.posY = random(this.rad, height - this.rad);
    this.velX = random(-10, 10);
    this.velY = random(-10, 10);
    console.log("estoy viaaaaa!");
  }
  // método update
  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX > width - this.rad || this.posX < this.rad) {
      this.velX *= -1;
    }
    if (this.posY > height - this.rad || this.posY < this.rad) {
      this.velY *= -1;
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, this.diam);
  }
}
