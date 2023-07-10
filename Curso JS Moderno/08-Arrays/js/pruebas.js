const carrito = [
    {nombre:'monitor 27 pulgadas',precio :500},
    {nombre:'celular',precio :400},
    {nombre:'xbox',precio :7000},
    {nombre:'play',precio :405},
    {nombre:'telefono',precio :4554},
    {nombre:'camara',precio :7541},
]


for (let i = 0; i < carrito.length; i++){
console.table(carrito[i].nombre)
console.log(`${carrito[i].nombre} precio : ${carrito[i].precio}`)
}


carrito.forEach(function(hola){
    console.log(`${producto.nombre} precio : ${producto.precio}`)
});