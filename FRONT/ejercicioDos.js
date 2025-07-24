

/*Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
base y altura se deben pedir al usuario que las digite.*/
//1. Datos de entrada
let base = parseFloat(prompt("Ingresa la base del triangulo: "));
let altura = parseFloat(prompt("Ingresa la altura del triangulo: "));
//2. Calculos
let area = (base * altura) / 2;
//3. Presentar la información
alert("El area del triangulo es: " + area);
console.write(
    "<h1 style='color:red;'>El area del triangulo es: " + area+"</h1>"
);


