"use strict" //activa el modo estricto 

const producto = {
    nombre : "andres porras",
    precio : 300,
    disponible : true,
}

Object.freeze(producto)

producto.disponible= false; //sale error porque ahora si se comporta como un objeto

console.log(Object.isFrozen(producto))