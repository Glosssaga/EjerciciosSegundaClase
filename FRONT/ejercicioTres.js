/* Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
2 números al usuario. */ 
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
);

