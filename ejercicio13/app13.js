/*Conversión de minutos a horas y segundos
• Solicita un número de minutos.
• Convierte a formato: “X horas y Y segundos”.
*/

let total_minutos = parseInt(prompt("Ingrese el número de minutos que desea convertir a horas y minutos : "));

let horas = Math.floor(total_minutos / 60);
let minutos = total_minutos % 60;

alert(total_minutos + " minutos son: " + horas + " horas y " + minutos + " minutos.");