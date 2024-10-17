let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Crear nuevas partículas aleatoriamente
  if (frameCount % 5 === 0) {
    particulas.push(new Particula(random(width), random(height)));
  }

  // Actualizar y mostrar todas las partículas
  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].update();
    particulas[i].display();

    // Eliminar la partícula si se desvanece
    if (particulas[i].termina()) {
      particulas.splice(i, 1);
    }
  }
}
