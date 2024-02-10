//6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
//calcule el precio final con IVA. El IVA será una constante que sera del 21%



let numero = parseFloat(prompt("Dime el precio"));
const iva = 0.21;


let resultado = numero + (numero * iva);
console.log(resultado)









