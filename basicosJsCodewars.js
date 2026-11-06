//CODE WARS

//Remove First and Last Character
let str = "eloquent";
function removeChar(str) {
  //You got this!
  if (typeof str !== "string") return "";
  // remove first and last character
  return str.slice(1, -1);
}
console.log(removeChar(str));

//Calculate BMI
function bmi(weight, height) {
  let bmi = weight / (height * height);
  console.log(bmi);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}
console.log(bmi(50, 1.8));

//Given a non-empty array of integers,
// return the result of multiplying the values together in order.

function grow(x) {
  suma = 1;
  for (let i = 0; i < x.length; i++) {
    suma *= x[i];
  }
  return suma;
}
console.log(grow([1, 2, 3, 4]));

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};
console.log(zeroFuel(50, 25, 2));

//Sum Arrays
function sum(numbers) {
  suma = 0;
  for (i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  console.log(suma);
  return suma;
  if (!numbers || numbers.length === 0) {
    return 0;
  }
}
console.log(sum([1, 5.2, 4, 0, -1]));
//mismo para sum arrays pero otra opción, con reduce:
function sum2(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum2([1, 5.2, 4, 0, -1]));

//6 kyu codewars
//Does my number look big in this?
/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

Your code must return true or false depends on if is a nascissistic number or not
*/
function narcissistic(value) {
  // Code me to return true or false
  //1.primero sacar cuantos digitos tiene el numero
  //2.luego multiplicar cada digito por si mismo por el numDig ejemplo,
  //o mas bien sacarlo con el exponente: 5^3 = (5*5*5) = 125
  //3.Después sumar entre las respuestas
}

//7 kyu
//Odder Than the Rest
function oddOne(arr) {
  let odd = -1;
  // Code here
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] % 2 != 0) {
      odd = arr.indexOf(arr[i]);
      console.log(odd);
    }
  }
  return odd;
}
console.log(oddOne([2, 4, 6, 7, 10]));

//pair of gloves
function numberOfPairs(gloves) {
  //My hands are freezing
}

//negative number
num = 2;
function makeNegative(num) {
  // Code?
  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return num;
  } else {
    //return "-" + String(num);
    return -num;
  }
}
console.log(makeNegative(num));

// leetcode
/**
 * @param {string[]} strs
 * @return {string}
 */
/*example:
Input: strs = ["flower","flow","flight"]
Output: "fl"*/
var longestCommonPrefix = function (strs) {
  for (i = 0; i < strs.length; i++) {}
};

function maxProduct(a) {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max1) {
      max2 = max1;
      max1 = a[i];
    } else if (a[i] > max2) {
      max2 = a[i];
    }
  }

  return max1 * max2;
}
/* */
/*
Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If a number is a multiple of both 3 and 5, only count it once.
*/
//let number = 10;
function solution(number) {
  let sum = 0;
  for (i = 0; i < number; i++) {
    if (number < 0) {
      return 0;
    } else if (i % 3 === 0 || i % 5 === 0) {
      sum = i + sum;
      console.log(sum);
    }
  }
  return sum;
}
console.log(solution(10));

// leetcode similar but with 7 also
var sumOfMultiples = function (n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    if (n < 0) {
      return 0;
    } else if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum = i + sum;
      console.log(sum);
    }
  }
  return sum;
};
console.log(sumOfMultiples(7));
