const carrito =[
    {nombre : 'Monitor 27 pulgadas', precio :500},
    {nombre : 'Television', precio :100},
    {nombre : 'Tablet', precio :200},
    {nombre : 'Audifonos', precio :300},
    {nombre : 'Teclado', precio :400},
    {nombre : 'Celular', precio :700},
];


const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - precio :${producto.precio}`
});

const nuevoArreglo1_1 = carrito.map((producto1 => {
    return `${producto1.nombre} - precio :${producto1.precio}`;
})

)


const nuevoArreglo2 = carrito.map(function(producto){
    return `${producto.nombre} - precio :${producto.precio}`
});


carrito.forEach(producto => {return `${producto.nombre} - precio :${producto.precio}`})




console.log(nuevoArreglo);
console.log(nuevoArreglo1_1);
console.log(nuevoArreglo2);

