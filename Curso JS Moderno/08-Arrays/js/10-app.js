const carrito = [
    {nombre:'monitor 27 pulgadas',precio :500},
    {nombre:'celular',precio :400},
    {nombre:'xbox',precio :7000},
    {nombre:'play',precio :405},
    {nombre:'telefono',precio :4554},
    {nombre:'camara',precio :7541},
]

const nuevoarrreglo = carrito.map(function(hola){
    return `${producto.nombre} precio : ${producto.precio}`
});


carrito.forEach(function(hola){
    return `${producto.nombre} precio : ${producto.precio}`
});