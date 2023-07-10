const producto = {
    nombre : 'monitor 20 pulgadas',
    precio : 300,
    disponible :true
}

const {nombre} = producto;


console.log(nombre)


//destructurin con arreglo



const numeros = [10,20,30,40,50]

const [primero] = numeros;

console.log(primero)

const [ primer,segundo,tercer]= numeros;

console.log(tercer);


const [,,tercero] = numeros;


console.log(tercero)


const [primero1,segundo2,...tercero3] = numeros;

console.log(tercero3)