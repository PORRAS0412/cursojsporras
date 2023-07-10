const carrito = [];

//Definir un producot


const producto = {
    nombre : 'monitor 32 pulgadas',
    precio : 400
}


const producto2 = {
    nombre : 'xioami redmi 11',
    precio : 850000,
    disponible : true
}


const producto3 = {
    nombre : 'teclado',
    precio : 50000,
    disponible : true
}

let resultado = [...carrito, producto]; //forma declarativa


console.table(resultado)

resultado = [...resultado,producto2];

console.table(resultado);

resultado = [producto3, ...carrito];

console.table(resultado);