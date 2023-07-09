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

const {medidas} = producto;

const {informacion:{fabricacion:{pais}}} = producto;