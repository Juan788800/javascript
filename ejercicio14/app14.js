/*7. Cálculo de descuento simple
• Solicita el precio de un producto.
• Calcula el precio final con un 10% de descuento.
*/

let precio_producto = parseFloat(prompt("Ingrese el precio del producto: "));

let descuento = precio_producto * 0.10;
let precio_final = precio_producto - descuento;

alert("El precio final con un 10% de descuento es: " + precio_final);