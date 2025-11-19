/*2. Salario semanal
• Solicita el número de horas trabajadas y el valor por hora.
• Calcula el salario semanal.
*/
let horas_trabajadas = parseFloat(prompt("Ingrese el numero de horas trabajadas a la semana: "));
let valor_por_hora = parseFloat(prompt("Ingrese el valor por hora trabajada: "));

let salario_semanal = horas_trabajadas * valor_por_hora;

alert("El salario semanal es: " + salario_semanal);