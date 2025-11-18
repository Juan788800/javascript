/*Conversión de temperatura
• Solicita una temperatura en Celsius.
• Convierte a Fahrenheit usando la fórmula: F = (C × 9/5) + 32.
*/

let temperatura_celsius = parseFloat(prompt(" ingrese el valor de la  temperatura en celsius "))

formula =  (temperatura_celsius * 9 / 5) + 32;

alert(temperatura_celsius+ " grado celsius a fahrenheit son: " +formula);