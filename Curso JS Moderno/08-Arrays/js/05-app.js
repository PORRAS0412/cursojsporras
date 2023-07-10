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

carrito.push(producto) //agregar al final
carrito.push(producto2)


const producto3 = {
    nombre : 'teclado',
    precio : 50000,
    disponible : true
}

carrito.unshift(producto3); //agregar al principio


console.table(carrito)