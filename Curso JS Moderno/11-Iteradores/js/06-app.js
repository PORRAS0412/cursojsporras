

const pendientes = ['tarea','comer','proyecto','Estudiar js'];


// pendientes.forEach((indice,pendiente) => {
//     console.log(pendiente)
// });

// pendientes.forEach((valores,index) => {
//     console.log(`los vaores son ${valores} ${index}`)
// })

const carrito = [
    {nombre: 'Andres porras', edad:21},
    {nombre: 'Andres porras1', edad:22},
    {nombre: 'Andres porras2', edad:23},
    {nombre: 'Andres porras3', edad:41},
    {nombre: 'Andres porras4', edad:25},
    {nombre: 'Andres porras5', edad:216},
]


carrito.forEach((producto) => {
    console.table( ` La persona ${producto.nombre} tiene una edad de . ${producto.edad}`)
})

carrito.map((producto) => {
    console.table( ` La persona ${producto.nombre} tiene una edad de . ${producto.edad}`)
})


const arreglonuevo = carrito.map((producto,index)=>{
    console.log(`el producto es: ${producto.nombre}`)
})