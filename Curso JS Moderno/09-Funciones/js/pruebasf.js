function sumar (a,b){
    return a + b;
}
const resultado = sumar(2,3);


console.log(resultado)


//ejemplo mas avanzado


let total = 0;

function agregarcarrito (precio){
    return total += precio
}


function calcularimpuesto(total){
    return total * 1.15
}

total = agregarcarrito(600)
total = agregarcarrito(400)



const totalapagar = calcularimpuesto(total)

console.log(totalapagar)

console.log(total)
