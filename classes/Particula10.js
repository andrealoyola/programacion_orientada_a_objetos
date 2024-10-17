class Particula {
  constructor(x, y) {
    this.x = x; // Posición x
    this.y = y; // Posición y
    this.vx = random(-2, 2); // Velocidad en x
    this.vy = random(-2, 2); // Velocidad en y
    this.tVida = 255; // Duración de la partícula
  }

  update() {
    this.x += this.vx; // Actualizar posición x
    this.y += this.vy; // Actualizar posición y
    this.tVida -= 2; // Reducir la duración
  }

  display() {
    stroke(255, this.tVida);
    strokeWeight(2);
    circle(this.x, this.y, 5); // Dibujar la partícula
    point(this.x, this.y); // Dibujar la partícula
  }

  termina() {
    return this.tVida < 0; // Verificar si la partícula ha terminado
  }
}
