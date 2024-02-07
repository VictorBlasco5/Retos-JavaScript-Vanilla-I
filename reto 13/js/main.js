//13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
//aritmético (String), según este último se realizará la operación correspondiente. Al final
//mostrará el resultado en un cuadro de diálogo.
//Los signos aritméticos disponibles son:
//+: suma los dos operandos.
//-: resta los operandos.
//*: multiplica los operandos.
//   /: divide los operandos, este debe dar un resultado con decimales (double)
//^: 1o operando como base y 2o como exponente.
//%: módulo, resto de la división entre operando1 y operando2.


var numero1 = parseFloat(prompt("Introduce un número"));
var numero2 = parseFloat(prompt("Introduce otro número"));
var numero = prompt("Introduce la operacion");

switch (numero) {
    case "+":
        console.log(numero1 + " + " + numero2 + " = " + (numero1+numero2));
    break;
    case "-":
        console.log(numero1 + " - " + numero2 + " = " + (numero1-numero2));
    break;
    case "*":
        console.log(numero1 + " * " + numero2 + " = " + (numero1*numero2));
    break;
    case "/":
        console.log(numero1 + " / " + numero2 + " = " + (numero1/numero2));
    break;
    case "^":
        console.log(numero1 + " elevado a " + numero2 + " = " + (numero1**numero2));
    break;
    case "%":
        console.log("El módulo de " + numero1 + " / " + numero2 + " = " + (numero1%numero2));
    break;
    default:
        console.log("No has introducido una operación válida");
    break;
}