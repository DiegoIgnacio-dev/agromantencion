//ejercicio logica de programacion
//funcion que valide el ingreso del kilometraje

function validarHorometro(horas){
    if(!isNaN(horas) && horas > 0){
        console.log('Horometro Valido');
        return "Horometro correcto";
    }else if(horas < 0){
        console.log('Horometro Invalido')
    }else{
        console.log('Campo invalido')
    }
}

let respuesta = validarHorometro(10);
console.log(respuesta);
validarHorometro('1000');//Horometro Valido
validarHorometro(5678);//Horometro Valido
validarHorometro('-178');//Horometro invalido
validarHorometro('a');//Horometro Invalido