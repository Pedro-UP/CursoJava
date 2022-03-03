/* var dia = prompt("Escribe el dia de la semana");
console.log(dia);

if(dia.toLowerCase()=="lunes"){
    alert("Hoy es Inicio de Semana");
}

if(dia.toLowerCase()=="martes"){
    alert("Hoy es Martes");
}

if(dia.toLowerCase()=="miercoles" || dia.toLowerCase()=="miércoles"){
    alert("Hoy es Miércoles");
}

if(dia.toLowerCase()=="jueves"){
    alert("Hoy es el Taller de JavaScrip");
}

if(dia.toLowerCase()=="viernes"){
    alert("Hoy es Viernez");
}

if(dia.toLowerCase()=="sabado"){
    alert("Hoy es Sabado");
}

if(dia.toLowerCase()=="domingo"){
    alert("Hoy es el Ultimo dia de la Semana");
}
*/

var dia = prompt("Escribe el que dia es hoy");
console.log(dia);

switch(dia.toLowerCase()) {
    case "lunes":
        alert("Hoy es lunes");
        break;

    case"martes":
    alert("Hoy es martes");
    break;

    case"miercoles":
    alert("Hoy es Miercoles");
    break;
    
    case"jueves":
    alert("Hoy es Jueves");
    break;

    default:
    alert("Que tenga un buen dia")
    break;
}
