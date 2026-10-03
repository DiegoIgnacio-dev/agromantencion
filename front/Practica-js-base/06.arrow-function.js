//funciones flecha

//funcion normal
const aprender = function(tecnologia1){
    console.log(`Aprendiendo ${tecnologia1}`)
}
console.log(aprender('javascript'));

const Aprendiendo2 = tecnologia  => `Estoy aprendiendo ${tecnologia}`

console.log(Aprendiendo2('Node.js'))



//arrow function

const aprenderDos = () => {
    console.log('Aprendiendo')
}
let suma =(a,b)=> a + b;

let resultado=suma(4,6);

console.log(resultado)