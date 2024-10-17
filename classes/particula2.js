class Particula {
  // este método se ecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo que tiene de vida
    this.tVida = round(random(10, 200));
    this.tamano = 50;
  }
  update() {
    this.tVida -= 1;
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }
    this.posy += 2;
    this.posx += random(-10, 10);
    this.tamano -= 0.5;
  }
  display() {
    fill(255);
    noStroke();
    circle(this.posx, this.posy, this.tVida);
  }
}

//esto va en sketch

let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(20);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
  for (let i = 0; i < particulas.length; i++) {
    if (!particulas[i].estaViva) {
      particulas.splice(i, 1);
    }
  }
  console.log(particulas.length);
}
