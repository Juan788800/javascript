/*12.	Factura de compra simple
• Solicita el nombre de un producto, su precio y la cantidad comprada.
• Calcula el total a pagar.
• Muestra: "El total a pagar por [cantidad] [producto] es: [total]".
*/
let producto = prompt("Ingrese el nombre del producto por favor : ");
let precio = parseFloat(prompt("Ingrese el precio del producto por favor : "));
let cantidad = parseInt(prompt("Ingrese la cantidad comprada por favor : "));

let total = precio * cantidad;

alert("El total a pagar por " + cantidad + " " + producto + " es: " + total);