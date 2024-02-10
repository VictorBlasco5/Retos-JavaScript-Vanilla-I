//10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
//pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
//mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.


let valor = prompt("Dime numero de ventas");

total = 0;


for(let i = 0; valor > i; i++) {
    let ventas = parseInt(prompt("Dime precios"))
    total += ventas
  
}

console.log(total)






////////// otra forma





// var ventas = 0;
// var total = 0;
// ventas = prompt("Introduce un numero");

// while(ventas!=0){
//     var precio = parseInt(prompt("Introduce el precio de la venta:"));
//     total = total + precio;
//     ventas--;
// }
// console.log("El total de ventas es:", total);


