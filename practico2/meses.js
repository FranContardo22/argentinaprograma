const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese el mes, en numeros del 1 al 12 ");

switch(Number(numero)){
    case 1:
        console.log("La cantidad de dias del mes de Enero es 31");
        break;
    case 2:
        console.log("La cantidad de dias del mes de Febrero es 28");
        break;
    case 3:
        console.log("La cantidad de dias del mes de Marzo es 31");
        break;
    case 4:
        console.log("La cantidad de dias del mes de Abril es 30");
        break;
    case 5:
        console.log("La cantidad de dias del mes de Mayo es 31");
        break;
    case 6:
        console.log("La cantidad de dias del mes de Junio es 30");
        break;
    case 7:
        console.log("La cantidad de dias del mes de Julio es 31");
        break;
    case 8:
        console.log("La cantidad de dias del mes de Agosto es 31");
        break;
    case 9:
        console.log("La cantidad de dias del mes de Septiembre es 30");
        break;
    case 10:
        console.log("La cantidad de dias del mes de Octubre es 31");
        break;
    case 11:
        console.log("La cantidad de dias del mes de Noviembre es 30");
        break;
    case 12:
        console.log("La cantidad de dias del mes de Diciembre es 31"); 
        break;
    }