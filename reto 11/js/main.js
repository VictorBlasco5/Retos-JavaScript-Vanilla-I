//11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. 
//Usa un switch para ello.

let dia = prompt("Dime que día de la semana es").toLocaleLowerCase();

switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
    console.log("Es día laboral")
    break;

    case "sabado":
    case "domingo":
        console.log("Es fin de semana")
    break;

    default:
        console.log("Introduce un día")
}
























// switch(dia) {
//     if (dia = "lunes", "martes", "miercoles", "jueves", "viernes") {
//        console.log("Día laboral");
//    } else if (dia = "sabado", "domingo") {
//        console.log("fin de semana");
//    }else {
//        console.log("nada")
//    }
// }