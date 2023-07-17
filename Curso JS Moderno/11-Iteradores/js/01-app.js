for( let i = 0; i < 10 ;i++){
    console.log(`Numero : ${i}`)
};

for( let i = 0; i <= 10 ;i+=2){
    console.log(`Numero : ${i}`)
};



for(let i = 0; i <= 9500 ; i++){
    let division = i / 2;
    if(Number.isInteger(division)){
        console.log(`El numero: ${i} es par`)
    }else{
        console.log(`El numero: ${i} no es par`)
    }
}


const carrito = [
    {nombre : 'Monitor de 27 pugadas', precio :500},
    {nombre : 'Celular xioami', precio :600},
    {nombre : 'televisor samsung', precio :100},
    {nombre : 'Moto apache 200 trt', precio :4500},
    {nombre : 'camio de mudansas', precio :5500},
    {nombre : 'computador portatil', precio :900}
]


for(let i = 0; i<=carrito.length;i++){
    console.table(`${carrito[i].nombre} ${carrito[i].precio}  `) 
}
