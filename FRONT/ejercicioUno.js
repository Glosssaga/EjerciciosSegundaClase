

/*Calcular el salario de un ampleado que gane x monto, donde debemos descontar el 4% de salud y 5% de pension */

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
