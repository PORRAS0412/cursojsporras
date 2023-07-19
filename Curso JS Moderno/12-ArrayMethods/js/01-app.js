const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
meses.forEach((mes)=>{
    if(mes === 'Enero'){
        console.log('Si existe enero socail')

    }
}
)
const resultado = meses.includes('Diciembre')
console.log(resultado)


const resultado2 = carrito.some((producto)=>{
    return producto.nombre === 'Celular'
    }
)


console.log(resultado2)


const pruebas = meses.some(valor => mes === 'Febrero')

console.log(pruebas)