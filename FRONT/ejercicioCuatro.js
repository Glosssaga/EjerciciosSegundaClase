/* Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
el mes y el valor tanto como de las horas normales de trabajo y las horas extras*/

//1. Datos de entrada
let horasNormales = parseFloat(prompt("Ingrese el número de horas normales trabajadas en el mes:"));
let horasExtras = parseFloat(prompt("Ingrese el número de horas extras trabajadas en el mes:"));
let valorHoraNormal = parseFloat(prompt("Ingrese el valor por hora normal:"));
let valorHoraExtra = parseFloat(prompt("Ingrese el valor por hora extra:"));

// 2. calculos 
let sueldoHorasNormales = horasNormales * valorHoraNormal;
let sueldoHorasExtras = horasExtras * valorHoraExtra;
let sueldoTotal = sueldoHorasNormales + sueldoHorasExtras;

// 3. Como presento la información
// alert()
// console.log()
// console.write()
alert(" Resultado del cálculo:\n\n" +
      "Sueldo por horas normales: $" + sueldoHorasNormales.toFixed(2) + 
      "\nSueldo por horas extras: $" + sueldoHorasExtras.toFixed(2) +
      "\n " +
      "\n Sueldo mensual total: $" + sueldoTotal.toFixed(2));