const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


meses.forEach((mes,indice) => {
    if(mes === 'Abril'){
        console.log(`Encontramos abril en el indice ${indice} `)
    }
})

const febrero = meses.findIndex((mes,indice)=>{
    return mes === 'Mayo';
});

const pruebasonjetos = carrito.findIndex((mes,indice)=>{
    return mes.nombre === 'Celular';
});


console.log(febrero)
console.log(pruebasonjetos)