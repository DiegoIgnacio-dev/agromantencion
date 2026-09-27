//datos primitivos

//varables declarados como let se pueden modificar segun necesitemos
let Horometro = 4500;
let marca = "New Holland";

//modificando variable Horometro
Horometro = "4850";

console.log(Horometro);

//LAS CONSTANTES NO SE PUEDEN MODIFCAR SE USA PARA DATOS MAS IMPORTANTES
const Patente = "LXGY97";
const rut = "11.111.111-k";

//TIPOS DE DATOS

let texto = "palabra cualquiera";
console.log(typeof texto); //string

let stock = 123;
console.log(typeof stock); //number

let operativo = true;
console.log(typeof operativo); //boolean

//Conversion de tipos

let numero = "1234";
console.log(typeof numero);

//conversion explicita de una cadena de texto a un numero con formato Number
let realNum = Number(numero);
console.log(realNum);
console.log(typeof realNum);

//ARRAYS
const inventario = ["caja de dados", "llave regulable", "grasera", "martillo"];

//estrayendo datos de un array
let herramienta = inventario[1];
console.log(herramienta);

//recorriendo un array con un for
for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}

console.log(typeof inventario); //objeto

let equipo = {
  marca: "Komatzu",
  modelo: "PC200",
  motor: "Diesel",
  horometro: 6580,
  operativo: true,
  ubicacion: {
    zona: "Pozo 1",
    tarea: "Extraccion Aridos",
    operador: "Juan",
  },
};
//extrayendo elementos de equipo
let marcaMaq = equipo.marca;
let operadorMaquinaria = equipo.ubicacion.operador;
console.log(operadorMaquinaria);

console.log(marcaMaq);
console.log(typeof equipo);

const maquina1 = {
    marca: "John Deere",
    modelo: "6110",
    horas: 4820 
};
const maquina2 = { 
    marca: "New Holland",
    modelo: "T6050", 
    horas: 3100 
};
const maquina3 = { 
    marca: "Massey Ferguson",
    modelo: "MS290", 
    horas: 3967
};


//horas promedio de los equipos
//para este ejercicio podemos usar una funcion o simple matematica

let horasTotales = maquina1.horas + maquina2.horas + maquina3.horas 
console.log(horasTotales);

let promedioHoras = horasTotales / 3

console.log(promedioHoras);

//usando una funcion para hacer todo a la vez

const equipoTrabajo=[maquina1,maquina2,maquina3];

console.log(equipoTrabajo)

function CalculoHoras(horasIn){
    let total = 0;
    let conteo = horasIn.length//con esto capturamos el cantidad de items presentes en el array

    for(horasIn of equipoTrabajo){
        total += horasIn.horas
    }




    let promedio = total/conteo//operacion para sacar el promedio
    console.log('Promedio de horas:'+ promedio)
    console.log('Horas totales: '+total)
}

CalculoHoras(equipoTrabajo)


