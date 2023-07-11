const numero1 = 20;
const numero2 = '20';

console.log(parseInt(numero2)) // esto es una funcion

console.log(numero1.toString()) // esto es un metodo

function sumar(a,b) {
    console.log(a+b)   
}

let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apelldio');
function saludar(nombre,apellido){
    alert(`Bienvenido ${nombre} ${apellido}`)
}

saludar(nombre,apellido)