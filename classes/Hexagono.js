class Hexagono {
  constructor(particula1, particula2) {
    this.inicio = particula1;
    this.fin = particula2;
    this.lifetime = 100; // Duración del hexágono en frames
    this.age = 0; // Edad del hexágono
  }

  update() {
    this.age++;
  }

  display() {
    stroke(255, 255 - (this.age / this.lifetime) * 255); // Desvanecer el hexágono
    fill(100, 100, 255, 100); // Color del hexágono
    this.drawHexagon();
  }

  drawHexagon() {
    const x1 = this.inicio.x;
    const y1 = this.inicio.y;
    const x2 = this.fin.x;
    const y2 = this.fin.y;

    // Calcular el centro del hexágono
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;

    beginShape();
    for (let i = 0; i < 6; i++) {
      const angle = (TWO_PI / 6) * i; // Ángulo para cada vértice
      const xOffset = cos(angle) * 30; // Tamaño del hexágono
      const yOffset = sin(angle) * 30;
      vertex(cx + xOffset, cy + yOffset);
    }
    endShape(CLOSE);
  }

  isExpired() {
    return this.age > this.lifetime;
  }
}
