const pendientes = ['tarea','comer','proyecto','Estudiar js'];



const automovil = {
    nombre : 'camaro',
    año : 2023,
    color : 'rojo' 
}


for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}


for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor)
}