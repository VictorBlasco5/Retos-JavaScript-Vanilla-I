//10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
//pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
//mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.




let valor = parseInt(prompt("Dime el número de ventas"))

let ventas = [];

for (let i = 0; i < valor; i++) {
    ventas.push(prompt("Dime las ventas"));
}
console.log(ventas)





