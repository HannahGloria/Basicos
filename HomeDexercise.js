// The Problem Statement:
// Context:
// The Homed is processing customer orders with various fulfillment methods and customer membership tiers. Your task is to implement an OrderPricingService
//  that calculates the final order breakdown.
// Requirements:
// Input Validation:
// If the order has no items (or is null), throw an ArgumentException (or return an error / throw Error).
// If any item has a Quantity <= 0 or UnitPrice < 0, throw an ArgumentException.
// Subtotal:
// Calculate the initial sum of UnitPrice * Quantity for all items.
// Discounts (Applied per item or category):
// Bulk Item Discount: If the quantity of any individual item is 10 or more, apply a 10% discount on that specific item line.
// PRO Member Discount: If CustomerTier == "PRO", the customer receives an additional 5% discount on all items under the "Lumber" or "Tools" categories (applied after the bulk discount if both apply).
// Shipping Fee:
// "STORE_PICKUP": Always $0.00.
// "STANDARD_SHIPPING": Free ($0.00) if the discounted total is $45.00 or more; otherwise, flat fee of $8.99.
// "EXPRESS_DELIVERY": Flat fee of $19.99 regardless of total.
// Output:
// Return a summary object with:
// Subtotal (decimal)
// TotalDiscount (decimal)
// ShippingFee (decimal)
// Total (Subtotal - TotalDiscount + ShippingFee) (rounded to 2 decimal places)

/*Datos de prueba (Test Cases)Caso 1: Cliente regular, recogida en tiendaTier: "REGULAR"Fulfillment: "STORE_PICKUP"
Items:Item 1: Hammer, Category: "Tools", UnitPrice: 15.00, Qty: 2 (Subtotal = 30.00)Resultado esperado:Subtotal: 30.00TotalDiscount: 0.00ShippingFee: 0.00Total: 30.00
Caso 2: Cliente PRO con descuento por volumen y envío estándarTier: "PRO"Fulfillment: "STANDARD_SHIPPING"Items:Item 1: 2x4 Wood Stud, Category: "Lumber", 
UnitPrice: 5.00, Qty: 10Subtotal base: 50.00Bulk discount (10%): 5.00 $\rightarrow$ queda en 45.00PRO discount (5% sobre 45.00): 2.25
Descuento total del item: 7.25Resultado esperado:Subtotal: 50.00TotalDiscount: 7.25ShippingFee: 0.00 (porque 50.00 - 7.25 = 42.75... 
¡ojo aquí! Al ser menor a 45.00, el envío estándar cuesta $8.99)Total: 51.74 (42.75 + 8.99) */

export const calculateOrderPricing = (order) => {
  // 1. Validaciones básicas
  if (!order || !order.items || order.items.length === 0) {
    throw new Error("Order must contain at least one item.");
  }

  let subtotal = 0;
  let totalDiscount = 0;

  // 2. Procesar cada item
  for (const item of order.items) {
    if (item.quantity <= 0 || item.unitPrice < 0) {
      throw new Error(
        `Invalid item: ${item.name}. Quantity and price must be positive.`,
      );
    }

    const itemBaseTotal = item.unitPrice * item.quantity;
    subtotal += itemBaseTotal;

    let currentItemTotal = itemBaseTotal;
    let itemDiscount = 0;

    // Descuento por volumen (10 o más piezas -> 10% de descuento)
    if (item.quantity >= 10) {
      const bulkDiscount = currentItemTotal * 0.1;
      itemDiscount += bulkDiscount;
      currentItemTotal -= bulkDiscount;
    }

    // Descuento PRO (5% extra en Lumber o Tools si es miembro PRO)
    const isEligibleCategory =
      item.category === "Lumber" || item.category === "Tools";
    if (order.customerTier === "PRO" && isEligibleCategory) {
      const proDiscount = currentItemTotal * 0.05;
      itemDiscount += proDiscount;
      currentItemTotal -= proDiscount;
    }

    totalDiscount += itemDiscount;
  }

  const discountedTotal = subtotal - totalDiscount;

  // 3. Reglas de Envío
  let shippingFee = 0.0;

  switch (order.fulfillmentMethod) {
    case "STORE_PICKUP":
      shippingFee = 0.0;
      break;
    case "STANDARD_SHIPPING":
      // Gratis si el total con descuento es $45 o más; si no, $8.99
      shippingFee = discountedTotal >= 45.0 ? 0.0 : 8.99;
      break;
    case "EXPRESS_DELIVERY":
      shippingFee = 19.99;
      break;
    default:
      shippingFee = 0.0;
  }

  // 4. Total final redondeado a 2 decimales
  const finalTotal = discountedTotal + shippingFee;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    totalDiscount: Number(totalDiscount.toFixed(2)),
    shippingFee: Number(shippingFee.toFixed(2)),
    total: Number(finalTotal.toFixed(2)),
  };
};

// Prueba Caso 1: Cliente regular, pickup
const order1 = {
  customerTier: "REGULAR",
  fulfillmentMethod: "STORE_PICKUP",
  items: [{ name: "Hammer", category: "Tools", unitPrice: 15.0, quantity: 2 }],
};

// Prueba Caso 2: Cliente PRO con volumen
const order2 = {
  customerTier: "PRO",
  fulfillmentMethod: "STANDARD_SHIPPING",
  items: [
    { name: "2x4 Wood Stud", category: "Lumber", unitPrice: 5.0, quantity: 10 },
  ],
};

console.log("Result 1:", calculateOrderPricing(order1));
console.log("Result 2:", calculateOrderPricing(order2));
