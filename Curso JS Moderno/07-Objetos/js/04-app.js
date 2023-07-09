const producto = {
    nombre : "andres porras",
    precio3 : 300,
    disponible : true,
    informacion:{
        medidas : {
            peso :'1kg',
            medida : '1m'
        },
        fabricacion:{
            pais :'china'
        }
    }
}

let nombre2 = producto.nombre

console.log(nombre);

//const {nombre} = producto;  //destructuring

//const {precio} = producto;

const {nombre,precio3,disponible} = producto;


const {precio} = producto.informacion;



let holiprecion = producto.informacion;


const {pais} = producto.informacion.fabricacion;