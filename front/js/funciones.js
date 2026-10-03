import { listaMaquinas } from "./maquinas.js";
//los import siempre deben ir al principio de nuestros archivos
console.log(listaMaquinas);

function busquedaMaquina(indice){
    for(let i = 0 ; i < listaMaquinas.length;i++){
        if(listaMaquinas[i].idConductor == indice){
            console.table(listaMaquinas[i])
        }
    }
}
//usando un promt en el navegador podremos buscar un elemento dentro de nuestro arreglo de objetos importado desde otro documento
let i = prompt();
busquedaMaquina(i);

doc