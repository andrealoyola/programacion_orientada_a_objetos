class Particula {
  constructor(x, y) {
    this.x = x; // Posición x
    this.y = y; // Posición y
    this.vx = random(-1, 5); // Velocidad en x
    this.vy = random(-1, 5); // Velocidad en y
    this.tVida = 255; // Duración de la partícula
    this.size = random(2, 20); // Tamaño aleatorio
    this.size1 = random(5, 40); // Tamaño aleatorio
  }

  update() {
    this.x += this.vx; // Actualizar posición x
    this.y += this.vy; // Actualizar posición y
    this.tVida -= 1; // Reducir la duración
  }

  termina() {
    return this.tVida < 0; // Verificar si la partícula ha terminado
  }
}

class ParticulaAmarilla extends Particula {
  display() {
    fill(255, 200, 0, this.tVida); // Color rojo
    circle(this.x, this.y, this.size); // Dibujar la partícula
  }
}

class ParticulaBlanca extends Particula {
  display() {
    fill(255, this.tVida); // Color blanco
    circle(this.x, this.y, this.size1); // Dibujar la partícula
  }
}
