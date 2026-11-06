const pedidos = [
  { id: 1, producto: "Laptop", precio: 1200, enviado: true },
  { id: 2, producto: "Mouse", precio: 25, enviado: false },
  { id: 3, producto: "Teclado", precio: 80, enviado: true },
  { id: 4, producto: "Monitor", precio: 350, enviado: false },
  { id: 5, producto: "Webcam", precio: 90, enviado: false },
];
function obtenerPendientes(pedidos) {
  // devuelva solo los pedidos que no han sido enviados
  return pedidos.filter((p) => !p.enviado);
}
console.log(obtenerPendientes(pedidos));

//Objetivo: Usar .map() para transformar datos
//"Mouse - $25"
function formatearPedidos(pedidos) {
  //return pedidos.map((p) => p.producto + " -" + " $" + p.precio);
  // Alternativa más limpia
  return pedidos.map((p) => `${p.producto} - $${p.precio}`);
}
console.log(formatearPedidos(pedidos));

// Mismo array de pedidos. Un usuario hace clic en un pedido y tienes su id (número).
function buscarPedidoPorId(pedidos, id) {
  return pedidos.find((p) => p.id === id);
}
console.log(buscarPedidoPorId(pedidos, 2));

function totalPrecios(pedidos) {
  return pedidos.reduce((total, pedido) => total + pedido.precio, 0);
}
console.log(totalPrecios(pedidos));

function hayPendientes(pedidos) {
  return pedidos.some((p) => !p.enviado);
}
console.log(hayPendientes(pedidos));

//usar un for loop para duplicar numeros: numero * 2
const numeros = [5, 12, 8, 130, 44];
function duplicarNumeros(numeros) {
  let nuevosNumeros = [];
  for (let i = 0; i < numeros.length; i++) {
    nuevosNumeros[i] = numeros[i] * 2; //o podría ser con push: nuevosNumeros.push(numeros[i] * 2);
  }
  return nuevosNumeros;
}
console.log(duplicarNumeros(numeros));

///devolver la suma total de hrs, usando reduce
const horas = [8, 6, 9, 7, 5];
function totalHoras(horas) {
  return horas.reduce((total, hora) => total + hora, 0);
}
console.log(totalHoras(horas));

///Objetivo: Practicar algo más realista con datos tipo API usando filter + map
const response = {
  data: [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "María", activo: true },
    { id: 4, nombre: "Juan", activo: false },
  ],
};

function obtenerNombresActivos(response) {
  return response.data
    .filter((usuario) => usuario.activo) // nos quedamos solo con los activos
    .map((usuario) => usuario.nombre);
}
console.log(obtenerNombresActivos(response));

const apiResponse = {
  usuarios: [
    { id: 1, nombre: "Ana", email: "ana@mail.com", verificado: true },
    { id: 2, nombre: "Luis", email: "luis@mail.com", verificado: false },
    { id: 3, nombre: "María", email: "maria@mail.com", verificado: true },
    { id: 4, nombre: "Juan", email: "juan@mail.com", verificado: false },
  ],
};

function obtenerEmailsVerificados(apiResponse) {
  return apiResponse.usuarios.filter((u) => u.verificado).map((u) => u.email);
}
console.log(obtenerEmailsVerificados(apiResponse));

///validacion de formulario
const formData = {
  nombre: "Ana",
  email: "ana@mail.com",
  edad: 17,
};

function validarFormulario(formData) {
  const errores = [];

  if (typeof formData.nombre !== "string" || formData.nombre.trim() === "") {
    errores.push("Tienes que escribir un nombre");
  }

  if (typeof formData.email !== "string" || !formData.email.includes("@")) {
    errores.push("No es un formato de email valido");
  }

  if (typeof formData.edad !== "number" || formData.edad < 18) {
    errores.push("No es mayor de edad");
  }

  return {
    esValido: errores.length === 0,
    errores,
  };
}
console.log(validarFormulario(formData));

const registro = {
  usuario: "Ana",
  password: "clave123",
  telefono: "1234567890",
  aceptaTerminos: true,
};

function validarRegistro(registro) {
  const errores = [];
  if (
    typeof registro.nombre !== "string" ||
    nombre.trim() === "" ||
    nombre.length < 3
  ) {
    errores.push("Tienes que escribir un nombre de minimo 4 caracteres");
  }
  return {
    esValido: errores.length === 0,
    errores,
  };
}
//validar parentesis
((s = "("), ")", "{", "}", "[", "]");
/*Un string es válido si:
Los paréntesis abiertos se cierran con el mismo tipo.
Se cierran en el orden correcto.
Cada cierre tiene su apertura correspondiente.*/
// String de ejemplo con paréntesis, llaves y corchetes
//const s = "(){}[]"; // puedes cambiarlo para probar otros casos

function esValido(s) {
  // 1. Usamos una pila para guardar las aperturas pendientes de cerrar
  const stack = [];

  // 2. Mapa de cierres → su apertura correspondiente
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // 3. Recorremos el string carácter por carácter
  for (let char of s) {
    // 3.a. Si es un símbolo de apertura, lo guardamos en la pila
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      continue;
    }

    // 3.b. Si es un símbolo de cierre, comprobamos contra la pila
    if (char === ")" || char === "}" || char === "]") {
      // Si no hay nada en la pila, no hay apertura que coincida → inválido
      if (stack.length === 0) {
        return false;
      }

      // Sacamos la última apertura que teníamos pendiente
      const lastOpen = stack.pop();

      // Comprobamos si la apertura coincide con el cierre actual
      if (lastOpen !== pairs[char]) {
        return false;
      }
    }
  }

  // 4. Al final, si la pila está vacía, todas las aperturas se cerraron bien
  return stack.length === 0;
}

// Pruebas de ejemplo:
console.log(esValido("()")); // true
console.log(esValido("()[]{}")); // true
console.log(esValido("({})")); // true
console.log(esValido("(]")); // false
console.log(esValido("([)]")); // false
console.log(esValido("(((")); // false

// Problema de leet code "Two Sum": Dado un array de números y un objetivo, devuelve los índices de los dos números que suman el objetivo.
const nums = [2, 7, 11, 15];
const target = 9;

/*
Ejercicio 1 — Filtrar por precio:
Dado productos (array de objetos {id, nombre, precio}) escribe filtrarPorPrecio(productos, minPrecio) que devuelva los nombre de productos con precio >= minPrecio.
Ejemplo entrada: [{id:1,nombre:"Libro",precio:10},{id:2,nombre:"Guitarra",precio:300}] con minPrecio=50 → salida ["Guitarra"]. Usa filter + map.*/
const productos = {
  producto: [
    { id: 1, nombre: "Libro", precio: 10 },
    { id: 2, nombre: "Guitarra", precio: 300 },
  ],
};

function filtrarPorPrecio(obj, minPrecio) {
  return obj.producto
    .filter((p) => p.precio >= minPrecio)
    .map((precio) => precio.nombre);
}
console.log(filtrarPorPrecio(productos, 50));
