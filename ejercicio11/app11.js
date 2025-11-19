/*4. Consumo de gasolina
• Solicita la cantidad de kilómetros recorridos y el consumo por kilómetro
(litros/km).
• Calcula los litros totales consumidos.
*/
let kilometros_recorridos = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos: "));
let consumo_por_km = parseFloat(prompt("Ingrese el consumo por kilómetro (litros/km): "));

let litros_totales = kilometros_recorridos * consumo_por_km;

alert("Los litros totales consumidos son: " + litros_totales);