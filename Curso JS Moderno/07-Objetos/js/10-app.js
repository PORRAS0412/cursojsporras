
const producto = {
    nombre : 'monitor de 23 pulgadas',
    precio : 300,
    disponible : true,
    mostrarinfor :function (){
        console.log(`el producto: ${this.nombre} tiene un valor de ${this.precio}`)
    }
}

producto.mostrarinfor();
