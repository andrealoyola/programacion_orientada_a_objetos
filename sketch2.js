let frutas = ["manzana", "pera", "naranja"]; // indice empieza por 0 y es el total variables
let precios = [24, 35, 9999, 34, 234];
precios[5] = 666; // forma de agregar no en el mismo array

precios.push(3434); // agrego al final del array

precios.splice(2, 1, 689);

//Parámetros: array.splice(indice, cantidad, elemento1, elemento2, ...);
//indice: La posición en el array donde comenzará a hacer los cambios.
//cantidad: El número de elementos que se eliminarán a partir del índice especificado.
//elemento1, elemento2, ...: Elementos opcionales que se agregarán al array en la posición indicada.

for (let i = 0; i <= 10; i += 10) {
  console.log(i);
}

//empezar con el ultimo valor

for (let i = frutas.length - 1; i >= 0; i -= 1) {
  console.log(frutas[i]);
}

// loop sirve para repetir un objeto muchas veces en segundos,
//for(alberga 3 declaraciones distintas separadas por punto y coma){}

//variable i puede llamarse como quiera, 0 = indice(i)
// segunda variable puede ser true (se puede colgar la pagina) or false, se debe usar una comparacion logica que empiece siendo verdadera
//y que en un futuro cambie y sea falsa
//tercera declaracion (aumenta) i+=1, se ejecuta cada vez que se cumpla un ciclo del loop -- i++ (agrega siempre 1)

console.log(frutas);
console.log(frutas.length); //length es el numero de objetos o variables internos
console.log(precios[2]); //numero del indice al que quiero acceders
console.log(precios);

console.log(frutas.indexOf("naranja"));
console.log(frutas.indexOf("piña")); //en consola valor -1 porque el objeto no existe}

//cuando un array tiene demasiados elementos, se usa un for loop.
