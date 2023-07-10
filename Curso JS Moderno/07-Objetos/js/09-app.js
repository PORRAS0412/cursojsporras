"use strict" //activa el modo estricto 

const producto = {
    nombre : "andres porras",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso :'1kg',
    medida : '1m',
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto,medidas); //unir 2 objetos
const resultado2 = {...producto, ...medidas};

console.log(resultado)