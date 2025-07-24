/*Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.
*/

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
); 
