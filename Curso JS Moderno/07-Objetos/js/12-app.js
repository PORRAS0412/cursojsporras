//pbjeto literal
/*const producto = {
    nombre : 'monitor de 23 pulgadas',
    precio : 300,
    disponible : true,
}*/

//constuir un objeto

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    }

const producto2 = new Producto('Televisor plasma',500);

console.log(producto2);