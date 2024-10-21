let particles = [];
let hexSize = 50;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  // Actualizar y mostrar partículas
  for (let particle of particles) {
    particle.update();
    particle.display();
  }

  // Dibujar hexágonos entre partículas
  drawHexagons();
}

function mousePressed() {
  // Crear una nueva partícula en la posición del mouse
  particles.push(new Particle(mouseX, mouseY));
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.size = random(5, 15);
  }

  update() {
    // Las partículas no se mueven, pero puedes añadir movimiento si quieres
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.size);
  }
}

function drawHexagons() {
  stroke(255);
  noFill();

  // Dibujar hexágonos conectando las partículas
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      if (
        dist(
          particles[i].position.x,
          particles[i].position.y,
          particles[j].position.x,
          particles[j].position.y
        ) < hexSize
      ) {
        beginShape();
        for (let angle = 0; angle < TWO_PI; angle += PI / 3) {
          let x = particles[i].position.x + cos(angle) * hexSize;
          let y = particles[i].position.y + sin(angle) * hexSize;
          vertex(x, y);
        }
        endShape(CLOSE);
      }
    }
  }
}
