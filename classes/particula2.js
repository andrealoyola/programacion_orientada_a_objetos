class Particula {
  // este método se ecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo que tiene de vida
    this.tVida = round(random(10, 200));
    this.tamano = 50; //aumente el tamaño, comience en 1
    /** let = posx = 50, posy =56, size = 20,
     * con prettier se hace automatico
     */
    this.opacidad = 100; //no usar valor en display
  }
  update() {
    this.tVida -= 1; //-=0.5 disminuye más lento
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;

      /**salgan de la pantalla if(this.posy < 0 - this.tamano/2){
       * this.estaViva = false;
       * return
       */
    }
    this.posy += 2; //-=2 para que vaya para arriba
    this.posx += random(-10, 10);
    this.tamano -= 0.5; // que aumente el tamaño ** += 0.5
    this.opacidad -= 1;
  }
  display() {
    fill(255);
    noStroke();
    circle(this.posx, this.posy, this.tVida); //usamos el tamaño
    /** tVida tiene el comportamiento de ir perdiendo tamaño
     * si se quita, solo se aumenta el array y puede colgarse
     * la computadora, puede hacerse que particulas mueran cuando
     * salgan de la pantalla posy<0-radio
     */
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

//for (let i = 0; i < particulas.length; i++) {
//  if (!particulas[i].estaViva) {
//    particulas.splice(i, 1);
//  }
//}
//console.log(particulas.length);
//se reemplaza por el nuevo codigo

//particulas = particulas.filter((pelota) => pelota.estaViva);
//console.log(particulas.length);

/** comentarios
 *
 */

noFill();
stroke(252, 99, 145);
strokeWeight(1);

for (
  let i = 0;
  i < particulas.length + 1;
  i++ //una solucion +1
)
  //otra solucion - if(particulas[i+1]!== undefined){ !== NO ES IGUAL
  //}
  line(
    particulas[i].posx,
    particulas[i].posy,
    particulas[i + 1].posx,
    particulas[i + 1].posy
  );
