//ARRAYS

const herramientas=['caja de dados','llave de rueda','multimetro'];

console.log(herramientas[0]);


//agregando elementos a un array

herramientas.push('gata hidraulica');
//push agrega al final del arreglo

herramientas.unshift('sierra')
//unshift agrega al inicio

herramientas[4]= 'Tester';
herramientas.push('taladro')

//spread operator

const caja = [...herramientas]

caja.push('tecle');

console.log(caja)
 


//se pueden agregar elementos en cualquier indice aunque aquellos vacios quedaran undefined
console.log(herramientas)
 




let maquinas =[
  {
     id: 1, 
    marca: "John Deere", 
    modelo: "6110", 
    horas: 4820 
  },
  {
    id: 2,
    marca: "New Holland", 
    modelo: "T6050", 
    horas: 3100 
  },
  {
    id: 3, 
    marca: "Case", 
    modelo: "JX95", 
    horas: 5100 
  },
   {
    id: 4, 
    marca: "Massey Ferguson", 
    modelo: "MS292", 
    horas: 3670 
  },
  {
     id: 5,
    marca: "Class", 
    modelo: "Axion", 
    horas: 6800 
  },
  {
    id: 6, 
    marca:"Terex", 
    modelo: "760B", 
    horas: 8700 
  },
];

for(let i = 0;i < maquinas.length;i++){

  //maquinas con el horometro mayor a 4000 horas
  if(maquinas[i].horas > 4000){
    console.log(maquinas[i])
  }
  //todas las maquinas presentes en el array
  console.log(maquinas[i])
  
  //maquina con id igual a 2
  if(maquinas[i].id == 1){
    console.log(maquinas[i])
  }

  //sola las marcas de los equipos
  console.log(maquinas[i].marca)

}
// con un for normmal podemmos recorrer los elementos

function BuscadorMaquinas(buscar){
  let i = 0;
  for(;i<= maquinas.length;i++){
    if(buscar == maquinas[i].marca){
      console.log(maquinas[i])
    }
  }
}

BuscadorMaquinas('Case')