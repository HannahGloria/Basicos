// PLANTILLA DE PRÁCTICA - 10 EJERCICIOS BÁSICOS

// =====================================================
// EJERCICIO 1 - Filtrar por precio
// Devuelve los nombres de productos con precio >= minPrecio
// Usa: filter + map
// =====================================================
const productos = [
  { id: 1, nombre: "Libro", precio: 10 },
  { id: 2, nombre: "Guitarra", precio: 300 },
  { id: 3, nombre: "Mouse", precio: 25 },
  { id: 4, nombre: "Monitor", precio: 350 },
];

function filtrarPorPrecio(productos, minPrecio) {
  // TODO: devolver solo los nombres de productos con precio >= minPrecio
  return productos
    .filter((p) => p.precio >= minPrecio)
    .map((pro) => pro.nombre);
}

console.log(filtrarPorPrecio(productos, 50));

// =====================================================
// EJERCICIO 2 - Iniciales de nombres
// ["Ana María", "Luis"] => ["AM", "L"]
// Usa: map + strings
// =====================================================
const nombres = ["Ana María", "Luis", "Juan Pablo"];

function iniciales(nombres) {
  // TODO: devolver las iniciales en mayúsculas
  return nombres.map((no) =>
    no
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join(""),
  );
}

console.log(iniciales(nombres));

// =====================================================
// EJERCICIO 3 - Índice del primer par
// Devuelve el índice del primer número par, o -1 si no hay
// Usa: findIndex
// =====================================================
const numeros = [5, 3, 4, 7, 10];

function primerPar(nums) {
  // TODO: devolver el índice del primer número par
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] % 2 == 0) {
      return i;
    }
  }
}
console.log(primerPar(numeros));

function primerParConFindIndex(nums) {
  return nums.findIndex((n) => n % 2 === 0);
}

console.log(primerParConFindIndex(numeros));

// =====================================================
// EJERCICIO 4 - Suma acumulada
// [1,2,3,4] => [1,3,6,10]
// Usa: reduce o for
// =====================================================
const numerosAcumulados = [1, 2, 3, 4];

function sumaAcumulada(nums) {
  // TODO: devolver un nuevo array con las sumas parciales
  const res = [];
  let sum = 0;
  for (const n of nums) {
    sum += n;
    res.push(sum);
  }
  return res;
}
console.log(sumaAcumulada(numerosAcumulados));
//otra forma:
function sumaAcumulada2(nums) {
  return nums.reduce((acc, n) => {
    const last = acc.length ? acc[acc.length - 1] : 0;
    acc.push(last + n);
    return acc;
  }, []);
}
console.log(sumaAcumulada2(numerosAcumulados));

// =====================================================
// EJERCICIO 5 - Validación básica de usuario
// username: string de al menos 3 caracteres
// password: al menos 6 caracteres y un número
// Devuelve: { esValido, errores }
// =====================================================
const user = {
  username: "Ana",
  password: "clave123",
};

function validarUser(user) {
  const errores = [];

  if (typeof user.username !== "string" || user.username.trim().length < 3) {
    errores.push("El username debe tener al menos 3 caracteres");
  }

  if (typeof user.password !== "string" || user.password.length < 6) {
    errores.push("La password debe tener al menos 6 caracteres");
  } else if (!/\d/.test(user.password)) {
    errores.push("La password debe contener al menos un dígito");
  }

  return { esValido: errores.length === 0, errores };
}

console.log(validarUser(user));

// =====================================================
// EJERCICIO 6 - Filtrar tareas pendientes
// Devuelve solo las tareas que no están completadas
// Usa: filter
// =====================================================
const tareas = [
  { id: 1, texto: "Estudiar JS", completada: true },
  { id: 2, texto: "Practicar arrays", completada: false },
  { id: 3, texto: "Hacer ejercicios", completada: false },
];

function tareasPendientes(tareas) {
  // TODO: devolver solo las tareas incompletas
  return tareas.filter((t) => t.completada == false).map((t) => t.texto);
}

console.log(tareasPendientes(tareas));
// =====================================================
// EJERCICIO 7 - Formatear precios
// ["Libro", 10] => "Libro - $10"
// Usa: map
// =====================================================
const listaProductos = [
  { nombre: "Libro", precio: 10 },
  { nombre: "Teclado", precio: 80 },
  { nombre: "Monitor", precio: 350 },
];

function formatearProductos(productos) {
  // TODO: devolver un array de strings formateados
  return productos.map((p) => p.nombre + " - " + "$" + p.precio);
}

console.log(formatearProductos(listaProductos));

// =====================================================
// EJERCICIO 8 - Buscar usuario por id
// Devuelve el objeto del usuario con el id indicado
// Usa: find
// =====================================================
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "María" },
];

function buscarUsuarioPorId(usuarios, id) {
  // TODO: devolver el usuario cuyo id coincida
  return usuarios.find((i) => i.id === id);
}

console.log(buscarUsuarioPorId(usuarios, 2));

// =====================================================
// EJERCICIO 9 - Sumar todos los números
// Devuelve la suma total del array
// Usa: reduce
// =====================================================
const valores = [5, 10, 15, 20];

function sumarValores(valores) {
  // TODO: devolver la suma total
  return valores.reduce((acc, total) => acc + total, 0);
}

console.log(sumarValores(valores));

// =====================================================
// EJERCICIO 10 - Validar paréntesis básicos
// "()" => true
// "([)]" => false
// Usa: stack / pila
// =====================================================
// TODO: validar que los paréntesis estén correctos
function validarParentesis(s) {
  const pila = [];
  const parejas = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      pila.push(char);
    } else {
      const ultimo = pila.pop();

      if (ultimo !== parejas[char]) {
        return false;
      }
    }
  }

  return pila.length === 0;
}

console.log(validarParentesis("()"));
console.log(validarParentesis("([)]"));
console.log(validarParentesis("({[]})"));

function validarHTMLTags(tag) {
  const pila2 = [];
  const parejitas = {
    "<span>": "</span>",
    "<div>": "</div>",
    "<h1>": "</h1>",
  };
  for (const char of tag) {
    if (char === "<span>" || char === "<div>" || char === "<h1>") {
      pila2.push(char);
    } else {
      const ultimo = pila2.pop();
      if (ultimo !== parejitas[char]) {
        return false;
      }
    }
  }
  return pila2.length === 0;
}
console.log(validarHTMLTags("<span></span>"));
console.log(validarHTMLTags("<div><span></div></span>"));
console.log(validarHTMLTags("<div><span></span></div>"));
