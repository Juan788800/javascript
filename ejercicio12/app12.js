/*5. Tiempo de viaje
• Solicita la distancia de un recorrido (km) y la velocidad promedio (km/h).
• Calcula el tiempo estimado del viaje en horas.
*/
let distancia = parseFloat(prompt("Ingrese la distancia del recorrido en kilómetros: "));
let velocidad_promedio = parseFloat(prompt("Ingrese la velocidad promedio en km/h: "));

let tiempo_viaje = distancia / velocidad_promedio;

alert("El tiempo estimado del viaje es: " + tiempo_viaje + " horas.");