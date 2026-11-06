// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {};

/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
*/
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = "";
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    const currentChar = firstWord[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== currentChar) {
        return prefix;
      }
    }

    prefix += currentChar;
  }

  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
/*
La corrección conceptual sería esta: en cada posición i, tomar la letra de la primera palabra y verificar que esa misma posición exista y coincida en todas las demás palabras. Si alguna no coincide, paras y devuelves lo que llevabas acumulado.*/

/*
26. Remove Duplicates from Sorted Array
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let next = new Array();
    next = nums[i];
    console.log(nums[i]);
    if (next === nums[i]) {
    }
    console.log(nums);
  }
  return nums;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/*PATRON DE 2 PUNTEROS*/

var palindromo2 = function (palabra) {
  let izquierda = 0;
  let derecha = palabra.length - 1;

  while (izquierda < derecha) {
    // Si encontramos una sola diferencia, ¡rompemos la función de inmediato!
    if (palabra[izquierda] != palabra[derecha]) {
      return false;
    }
    // Si eran iguales, movemos los punteros hacia el centro para revisar el siguiente par
    izquierda++;
    derecha--;
  }
  // Si el while terminó y nunca entró al 'if', significa que toda la palabra coincide
  return true;
};
console.log(palindromo2("reconocer"));
console.log(palindromo2("tomate"));

/*
Patrón 3: El Diccionario de Frecuencias (Frequency Counter / Hash Map)
*/
let contador = {};
let arr = ["manzana", "pera", "manzana", "platano"];

for (let i = 0; i < arr.length; i++) {
  let fruta = arr[i];

  // Si la fruta ya está en nuestro mapa, le sumamos 1.
  // Si no está, la registramos empezando en 1.
  if (contador[fruta]) {
    contador[fruta]++;
  } else {
    contador[fruta] = 1;
  }
}

console.log(contador);
// Resultado: { manzana: 2, pera: 1, platano: 1 }

/*Problema: Encontrar el primer número duplicado.
Dada una lista de números, queremos encontrar el primer número que aparezca más de una vez. 
En cuanto lo detectes, devuélvelo. Si no hay duplicados, devuelve -1. */

var encontrarDuplicado = function (arr) {
  let vistos = {};

  for (let i = 0; i < arr.length; i++) {
    let numero = arr[i];
    // 1. ¿Ya lo habíamos visto antes?
    console.log(vistos[numero]);
    if (vistos[numero]) {
      return numero; // ¡Lo encontramos! Devolvemos el número duplicado de inmediato.
    }
    // 2. Si no lo habíamos visto, lo anotamos en nuestro registro
    vistos[numero] = true;
  }
  // 3. Si el bucle 'for' termina por completo significa que nadie se repitió
  return -1;
};

console.log(encontrarDuplicado([2, 4, 5, 4, 2]));

var removeDuplicates = function (nums) {
  //regresamos el numero de los elementos unicos = k y los elementos en el array
  let duplicate = {};
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    let arr = nums[i];
    if (duplicate[arr]) {
      k++;
    }
  }
};
console.log(removeDuplicates([2, 4, 2, 4, 5, 6]));
