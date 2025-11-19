/*3. Promedio de edad en un grupo
• Solicita las edades de 4 personas.
• Calcula el promedio de edad.
*/
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona: "));
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona: "));
let edad3 = parseInt(prompt("Ingrese la edad de la tercera persona: "));
let edad4 = parseInt(prompt("Ingrese la edad de la cuarta persona: "));

let promedio_edad = (edad1 + edad2 + edad3 + edad4) / 4;

alert("El promedio de edad del grupo es: " + promedio_edad);