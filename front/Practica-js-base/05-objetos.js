 //un objeto puede agrupar multiples datos en una sola variable


 //objet literal
const persona ={
    nombre:'Peter',
    apellido:'Max',
    dni:'1111111-1',
    direccion:{
        ciudad:'San pablo',
        calle:'Desconocido',
        numero:'1234'
    }
}

//agregando elementos a mi objeto
persona.edad = 24;
persona.altura = 175
 //eliminando valores de un objeto

delete persona.altura;
console.log(persona);

//accediendo a valores de un objeto
console.log(persona.nombre); 
console.log(persona.dni);
console.log(persona.direccion.ciudad);
//destructuring de objetos

// let {} = objeto
let {nombre,dni}= persona;

console.log(nombre);
let rut = dni;
console.log(rut)


const maquina = {
    id: 1,
    marca: "John Deere",
    modelo: "6110",
    horas: 4820
};


function mostrarMaquina(maquina) {
    console.log(maquina.marca+'--'+maquina.horas+ ' horas');
  }


  mostrarMaquina(maquina)