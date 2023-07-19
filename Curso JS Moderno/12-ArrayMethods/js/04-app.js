const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

 resultado = carrito.filter((prodcuto)=>{
       return prodcuto.precio > 400
})


resultado = carrito.filter(function(valores){
        return valores.precio < 600
})


resultado = carrito.filter(function(valores){
    return valores.nombre !== 'Teclado'
})




console.log(resultado)
