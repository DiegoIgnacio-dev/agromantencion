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

//destructuring de objetos

// let {} = objeto
let {nombre,dni}= persona;

console.log(nombre);
let rut = dni;
console.log(rut)