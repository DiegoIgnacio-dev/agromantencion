//If sirve para evaluar condiciones usando la condicion SI(if) algo se cumple (TRUE) que se realize 
// tal tarea si no(else) que se realize lo siguiente

let activo = true;
let apagado = false;
let estadoMaquina = activo
// en caso de resultar true se ejecutara el bloque de codigo


if(estadoMaquina){
    console.log("maquina trabajando");
}



//operador ternario  declaracion = condicion ? resultado true :resultado false
//es una manera mas corta de usar el if else

let registroMaquina = (estadoMaquina)? 'equipo encendido':'equipo apagado';

console.log(registroMaquina);


//cantidad de combustible

let cantidadDiesel = 10

if(cantidadDiesel <= 10){
    console.log('poco cobustible en el acopio');

}else if(cantidadDiesel >= 11 && cantidadDiesel <= 50){
    console.log('volumen medio de combustible');

}else if(cantidadDiesel >= 51 && cantidadDiesel <=  100 ){
    console.log('Volumen normal de commbustible')
}

//mismo ejercicio pero con operador ternario

let estadoContenedor  = (cantidadDiesel <= 10)? 'poco cobustible en el acopio':
(cantidadDiesel >= 11 && cantidadDiesel <= 50)? 'volumen medio de combustible':
(cantidadDiesel >= 51 && cantidadDiesel <=  100 )? 'Volumen normal de commbustible':'';

console.log(estadoContenedor);

//funciones
//me permiten reutilizar codigo sin la nececidad de escribir varias veces lo mismmo

//formato normal
function nivelCombustible(nivel){

    if(nivel <= 10){
    console.log('poco cobustible en el acopio');

    }else if(nivel >= 11 && nivel <= 50){
        console.log('volumen medio de combustible');

    }else if(nivel >= 51 && nivel <=  100 ){
        console.log('Volumen normal de commbustible')
    }
}

nivelCombustible(10);//poco cobustible en el acopio
nivelCombustible(22);//'volumen medio de combustible'


//exprecion de funcion
let suma = function(){
    return 23 *24;
}

console.log(suma());

//funcion para determinar si un equipo necesita mantencion por horas

function necesitaMantencion(horas,proxMant){
    if(horas >=  proxMant){
        console.log('Equipo necesita manencion')
    }else if(horas < proxMant){
        let horasRestantes=proxMant - horas;
        console.log('Proxima mantencion en '+ horasRestantes +' horas');
    }

}

necesitaMantencion(4560,5000)