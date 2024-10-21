class Particula {
  constructor(x, y) {
    this.x = x; // Posición x
    this.y = y; // Posición y
    this.vx = random(-2, 3); // Velocidad en x
    this.vy = random(-2, 3); // Velocidad en y
    this.tVida = 255; // Duración de la partícula
    this.size = random(2, 20); // Tamaño aleatorio
    this.size1 = random(5, 40); // Tamaño aleatorio
  }

  update() {
    this.x += this.vx; // Actualizar posición x
    this.y += this.vy; // Actualizar posición y
    this.tVida -= 3; // Reducir la duración
  }

  termina() {
    return this.tVida < 0; // Verificar si la partícula ha terminado
  }
}

class ParticulaVioleta extends Particula {
  display() {
    noStroke;
    fill(colorVioleta, this.tVida); // Color rojo
    circle(this.x, this.y, this.size); // Dibujar la partícula
  }
}

class ParticulaLila extends Particula {
  display() {
    noStroke;
    fill(colorLila, this.tVida); // Color blanco
    circle(this.x, this.y, this.size1); // Dibujar la partícula
  }
}
