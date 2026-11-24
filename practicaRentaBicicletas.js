/*
  Ejercicio: calcula el precio de una renta de bicicletas.

  Implementa calcularRenta(reserva). La reserva contiene el tipo de
  cliente (REGULAR o SOCIO), el tipo de entrega (TIENDA o DOMICILIO)
  y un arreglo de bicicletas. Cada bicicleta tiene tipo, horas y tarifaPorHora.

  1. Lanza un Error si falta la reserva, si no hay bicicletas o si alguna
     tiene horas que no sean un entero positivo o una tarifa inválida
     (debe ser un número finito mayor o igual a cero).
  2. El subtotal es la suma de horas * tarifaPorHora de cada bicicleta.
  3. Aplica un 15% de descuento a cada bicicleta rentada por 4 horas o más.
     Si el cliente es SOCIO y la bicicleta es URBANA, aplica un 10% adicional
     sobre el importe de esa bicicleta después del descuento por horas.
  4. Recoger en TIENDA cuesta 0. Para DOMICILIO, cobra 50 si el subtotal
     después de los descuentos es menor a 300. Si es 300 o más, cobra 0.
  5. Devuelve { subtotal, descuento, entrega, total }. El total es
     subtotal - descuento + entrega. Redondea los importes a dos decimales
     al devolverlos y mantenlos como números.
*/

function calcularRenta(reserva) {
  // Escribe tu código aquí.
  let subtotal = 0;
  let descuento = 0;
  let entrega = 0;

  if (!reserva) {
    throw new Error("Falta la reserva");
  }
  for (const bicicleta of reserva.bicicletas) {
    if (!Number.isInteger(bicicleta.horas) || bicicleta.horas <= 0) {
      throw new Error("Las horas deben ser un entero positivo");
    }

    const importe = bicicleta.horas * bicicleta.tarifaPorHora;
    subtotal += importe;

    if (bicicleta.horas >= 4) {
      descuento += importe * 0.15;
    }
  }
  if (reserva.bicicletas.horas > 4) {
    descuento = (15 * subtotal) / 100;
  }
  if (reserva.entrega === "DOMICILIO") {
    if (subtotal - descuento < 300) {
      entrega = 50;
    }
  }
  return (total = subtotal - descuento + entrega);
}

const casos = [
  {
    nombre: "Cliente regular con dos bicicletas y recogida en tienda",
    reserva: {
      cliente: "REGULAR",
      entrega: "TIENDA",
      bicicletas: [
        { tipo: "URBANA", horas: 2, tarifaPorHora: 40 },
        { tipo: "MONTANA", horas: 1, tarifaPorHora: 60 },
      ],
    },
    esperado: { subtotal: 140, descuento: 0, entrega: 0, total: 140 },
  },
  {
    nombre: "Socio con ambos descuentos y entrega a domicilio",
    reserva: {
      cliente: "SOCIO",
      entrega: "DOMICILIO",
      bicicletas: [{ tipo: "URBANA", horas: 4, tarifaPorHora: 90 }],
    },
    esperado: { subtotal: 360, descuento: 84.6, entrega: 50, total: 325.4 },
  },
  {
    nombre: "Entrega gratis justo en el límite de 300",
    reserva: {
      cliente: "REGULAR",
      entrega: "DOMICILIO",
      bicicletas: [{ tipo: "MONTANA", horas: 3, tarifaPorHora: 100 }],
    },
    esperado: { subtotal: 300, descuento: 0, entrega: 0, total: 300 },
  },
];
console.log(calcularRenta(casos[2].reserva));

for (const { nombre, reserva, esperado } of casos) {
  console.log(nombre);
  console.log("Resultado:", calcularRenta(reserva));
  console.log("Esperado: ", esperado);
}

// Prueba también estos casos. Ambos deben lanzar un Error.
// calcularRenta({ cliente: "REGULAR", entrega: "TIENDA", bicicletas: [] });
// calcularRenta({
//   cliente: "REGULAR",
//   entrega: "TIENDA",
//   bicicletas: [{ tipo: "URBANA", horas: 0, tarifaPorHora: 40 }],
// });
