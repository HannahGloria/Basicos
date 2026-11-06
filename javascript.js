//ejercicios random

for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}

//for in
const fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
  console.log(index);
}

//for of
for (let fruit of fruits) {
  console.log(fruit);
}

//for in en un objeto
const usuarios = {
  nombre: "Juana",
  edad: "18",
  ciudad: "Madrid",
};

for (let propiedad in usuarios) {
  console.log(propiedad + ":" + usuarios[propiedad]);
}

//fizzbuzz
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
//fizzbuzz();

//Tabla de multiplicar anidada: Crea un bucle anidado (un bucle dentro de otro bucle)
// que genere e imprima en la consola la tabla de multiplicar del 1 al 10. El resultado debe ser algo como:
/*
1 x 1 = 1
1 x 2 = 2
...
2 x 1 = 2
2 x 2 = 4
...
10 x 10 = 100
 */

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let total = i * j;
    console.log(i + "x" + j + "=" + total);
  }
}

//Búsqueda avanzada: Tienes un arreglo de objetos que representan productos. Usa un bucle for...of para encontrar e imprimir en la consola el nombre del producto que tiene el id 103.

const productos = [
  { id: 101, nombre: "Laptop", precio: 1200 },
  { id: 102, nombre: "Teléfono", precio: 800 },
  { id: 103, nombre: "Tablet", precio: 500 },
];

for (let producto of productos) {
  if (producto.id === 103) {
    console.log(producto.nombre);
    break; //detengo el bucle
  }
}

//Filtrar y crear un nuevo arreglo: Tienes un arreglo de números. Usa un bucle para crear un nuevo arreglo que contenga solo los números mayores de 50.

const numeros = [25, 75, 30, 90, 45, 60, 10];
let numerosGrandes = [];

for (let number of numeros) {
  if (number > 50) {
    numerosGrandes.push(number);
  }
}
console.log(numerosGrandes);

//usando filter:
const numerosGrandotes = numeros.filter((numero) => numero > 50);
console.log(numerosGrandotes);

/*
Contar vocales: Escribe una función que reciba una cadena de texto como parámetro y use un bucle para contar cuántas vocales (a, e, i, o, u) tiene. 
La función debe retornar el conteo final. Considera que la cadena puede tener vocales mayúsculas.
💡 Pista: Podrías convertir la cadena a minúsculas (.toLowerCase()) para simplificar la comparación. */

const vocalCount = (str) => {
  let contador = 0;
  const vocales = "aeiou";
  str = str.toLowerCase();
  for (let char of str) {
    if (vocales.includes(char)) {
      contador += 1;
    }
  }
  return contador;
};
console.log(vocalCount("caracol"));

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//codewars
function squareSum(numbers) {
  numbers = [3, 2, 2];
  let suma = 0;
  for (let num in numbers) {
    console.log(numbers[num]);
    suma += numbers[num] ** 2;
  }
  console.log(suma);
  return suma;
}
console.log(squareSum());

//codewars
//Write a function that removes the spaces from the string, then return the resultant string.
let nox = "8 j 8   mBliB8g  imjB8B8  jl  B";
function noSpace(nox) {
  let result = nox.replaceAll(" ", "");
  return result;
}
console.log(noSpace(nox));
//codewars
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//Example: 35231 => [1,3,2,5,3]
let n = 35231;
function digitize(n) {
  //code here
  //no es un array es numero, primero lo voy a recorrer y separar digito por digito, split es para string no para numeros
  let resultado = n.toString().split("").reverse().map(Number);
  console.log(resultado);
  return resultado;
}
console.log(digitize(n));

//codewars
// Remove First and Last Character Part Two
/*You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first 
and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value
 (represented as a generic value NULL in the examples below). 

"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL*/
//let string = "1,2,3,4,5,6"
let string = "A,B,C"; //considerar 2 elementos
//let string = "1" //considerar solo 1 elemento
function array(string) {
  // TODO
  something = string.split(",");
  console.log(something);
  if (something.length > 2) {
    something.shift();
    something.pop();
    return something.join(" ");
  } else {
    something = null;
  }
  return something;
}
console.log(array(string));

//codewars
function getVillainName(birthday) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward",
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];

  // your code here
  console.log(m);
}
