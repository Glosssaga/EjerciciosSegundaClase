/*6. Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
alumnos hombres y mujeres.
 */

//1. Datos de entrada
let mujeres = parseFloat(prompt("Ingrese la cantidad de mujeres"));
let hombres = parseFloat(prompt("Ingrese la cantidad de hombres"));
//2. Calculos
let total = mujeres + hombres;
let porcentajemujeres = mujeres/total*100;
let porcentajehombres = hombres/total*100;
//3. Como presento la información
alert("Total estudiantes: " + total.toFixed(2)+ 
    "\n Porcentaje de mujeres: % " + porcentajemujeres.toFixed(2)+
    "\n Porcentaje de hombres: % " + porcentajehombres.toFixed(2)
);


/*
//1. Datos de entrada
let precio = parseFloat(prompt("Ingrese el precio del producto: "));
//2. Calculos
let iva = precio * 19/100;
let total = precio + iva;
//3. Como presento la información
alert(
    "Precio sin IVA: $" + precio.toFixed(2) +
  "\nIVA (19%): $" + iva.toFixed(2) +
  "\nTotal a pagar: $" + total.toFixed(2)
); */

