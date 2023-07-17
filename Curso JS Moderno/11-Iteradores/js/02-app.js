// for(let i = 0; i <=10;i++){
//     console.log(`El numero en ejecución es:${i}`);
//     if(i === 5 ){
//         console.log('CINCO');
//         continue;
//     }
// }


const carrito = [
    {nombre:'monitor' , precio :500},
    {nombre:'monitor2' , precio :800},
    {nombre:'monitor3' , precio :5800, descuento :true},
    {nombre:'monitor4' , precio :600},
    {nombre:'monitor5' , precio :200},
    {nombre:'monitor6' , precio :100},
]


for(let i =0; i<= carrito.length;i++){
    if(carrito[i].descuento){
    console.log(`El articulo: ${carrito[i].nombre} Tiene descuento`);
    continue;
}
console.log(carrito[i].nombre)
}