console.log("---------- Ejercicio 1, Algoritmos ----------");

//ENUNCIADO:
// Dada la siguiente colección elementos [1,10,6,8,15,2]
// Ejercicio 1) Determinar cuál es el numero mayor y en que posición de la coleccion se encuentra.
// a) Sin utilizar ninguna función provista por el lenguaje elegido
// b) Utilizando funciones provistas por el lenguaje elegido

// a) Sin utilizar ninguna función provista por el lenguaje elegido
const array = [1, 10, 6, 8, 15, 2];

function findLargestNumber(array) {
  let largest = 0;
  let largestPos = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
      largestPos = i;
    }
  }
  return { largest, largestPos };
}

const result1 = findLargestNumber(array);
console.log(
  `El numero mayor es ${result1.largest} y se encuentra en la posición ${result1.largestPos}`
);
// ------------------------------------------------------------------------------------------------------------------------ //

// b) Utilizando funciones provistas por el lenguaje elegido
function findMaxNumber(array) {
  const max = Math.max(...array);
  const position = array.indexOf(max);
  return { max, position };
}

const result2 = findMaxNumber(array);
console.log(
  `El número mayor es ${result2.max} y se encuentra en la posición ${result2.position}.`
);
// ------------------------------------------------------------------------------------------------------------------------ //
// 2) Ordenar la lista de números.
function sortNumbers(array) {
  return array.sort((a, b) => a - b);
}
const result3 = sortNumbers(array);
console.log(`La lista de números ordenada es: ${result3}`);

// ------------------------------------------------------------------------------------------------------------------------ //
// 3) Determinar cuáles números son pares y en qué posiciones se encuentran.
function findEvenNumbers(array) {
  const evens = array.filter((num) => num % 2 === 0);
  const positions = evens.map((num) => array.indexOf(num));
  return { evens, positions };
}
const result4 = findEvenNumbers(array);
console.log(
  `Los números pares son: ${result4.evens} y se encuentran en las posiciones: ${result4.positions}`
);
// ------------------------------------------------------------------------------------------------------------------------ //
// 4) Crear un nuevo arreglo con todos los números pares.
function createEvenNumbersArray(array) {
  const evenArray = array.filter((num) => num % 2 === 0);
  return evenArray;
}
const result5 = createEvenNumbersArray(array);
console.log(`El nuevo arreglo con los números pares es: ${result5}`);
// Se podria reutilizar la funcion numerosPares(array) para obtener el mismo resultado
console.log(`El nuevo arreglo con los números pares es: ${result4.evens}`);
// ------------------------------------------------------------------------------------------------------------------------ //
