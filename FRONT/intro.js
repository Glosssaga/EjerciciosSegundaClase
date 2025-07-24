//Como declarar una variable
/*let respuesta = confirm("¿Eres mayor de edad?");
aleert("Tu respuesta es : " + respuesta);*/


/*let respuesta = prompt("¿Eres mayor de edad?");
aleert("Tu respuesta es : " + respuesta);
console.log("tu respuesta es: "+ respuesta);
console.write("tu respuesta es: "+ respuesta);

prompt ();
let n1 = 10;
let n2 = 20;
alert("El numero es:" + (n1+n2));


/* Ctrl + Shift + P
Escribe: Live Server: Open with Live Server
Presiona Enter */

/*EJERCICIO 1: Calcular el salario de un ampleado que gane x monto, donde debemos descontar el 4% de salud y 5% de pension 
// 1. datos de entrada
let salario = prompt("Digite el salario del empleado");
let salud, pension, salarioAPagar;
// 2. calculos 
salud = salario * 4/100; //salario * 0.04;
pension = salario * 5/100; //salario * 0.05;
salarioAPagar = salario - (salud + pension);
// 3. Como presento la información
// alert()
// console.log()
// console.write()
alert("Salario del empleado : "+salario+"\n"
    +"descuento en salud 4% : "+salud+"\n"
    +"descuento en pension 5% : "+pension+"\n"
    +"salario a pagar : "+salarioAPagar
)
console.log(
    "Salario del empleado : "+salario+"\n"
    +"descuento en salud 4% : "+salud+"\n"
    +"descuento en pension 5% : "+pension+"\n"
    +"salario a pagar : "+salarioAPagar
)
console.write(
    "<h1 style='color:red;'>Salario del empleado : "+salario+"</h1>"
    +"descuento en salud 4% : "+salud+"<br>"
    +"descuento en pension 5% : "+pension+"<br>"
    +"salario a pagar : "+salarioAPagar
);
*/

/*EJERCICIO 2: Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
base y altura se deben pedir al usuario que las digite.
//1. Datos de entrada
let base = parseFloat(prompt("Ingresa la base del triangulo: "));
let altura = parseFloat(prompt("Ingresa la altura del triangulo: "));
//2. Calculos
let area = (base * altura) / 2;
//3. Presentar la información
alert("El area del triangulo es: " + area);
console.write(
    "<h1 style='color:red;'>El area del triangulo es: " + area+"</h1>"
); */

/* EJERCICIO 3: Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
2 números al usuario. 
// 1. datos de entrada
let num1 = parseFloat(prompt("Ingresa el primer numero"));
let num2 = parseFloat(prompt("Ingresa el segundo numero"));
let suma, resta, multiplicacion, division, modulo;
// 2. calculos 
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num2 !== 0 ? num1 / num2 : "Error: No se puede dividir en cero";
modulo = num2 !== 0 ? num1 % num2 : "Error: modulo en cero";
// 3. Como presento la información
// alert()
// console.log()
// console.write()
alert("==== RESULTADOS ==== \n\n" + 
    "Suma: " + suma + "\n" + 
    "Resta: " + resta + "\n" +
    "Multiplicacion: " + multiplicacion + "\n" + 
    "Division: " + division + "\n" +
    "Módulo: " + modulo
); */

/* EJERCICIO 4:  Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
el mes y el valor tanto como de las horas normales de trabajo y las horas extras
// Hora ordinaria diurna 6189-nocturna 8355-extra diurna 7736-nocturna 10831-diurna dominical festiva 10831-nocturna 12997-
extra diurna dominical 12378-nocturna 15472
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
      "\n " + "\n Sueldo mensual total: $" + sueldoTotal.toFixed(2)
    ); */

/*EJERCICIO 5: Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.
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

/*EJERCICIO 6: Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
alumnos hombres y mujeres.
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
); */

/* EJERCICIO 7: Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.
//1. Datos de entrada
let nota1 = parseFloat(prompt("Ingrese la nota nuemro 1"));
let nota2 = parseFloat(prompt("Ingrese la nota nuemro 2"));
let nota3 = parseFloat(prompt("Ingrese la nota nuemro 3"));
let promedio;
//2. Calculos
if(
    nota1 >= 1 && nota1 <=5 &&
    nota2 >= 1 && nota2 <=5 &&
    nota3 >= 1 && nota3 <=5
){
    promedio = (nota1 + nota2 + nota3) / 3;
    alert(
        "El promedio de las notas del alumno es: " + promedio.toFixed(2));
}else{
    alert("Error: Todas las notas deben estar entre 1 y 5");
}
*/
