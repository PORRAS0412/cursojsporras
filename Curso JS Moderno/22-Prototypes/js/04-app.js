function Cliente (nombre,saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

Cliente.prototype.tipocliente = function (){
    console.log('Desde mi nuevo proto!!')
    let tipo;
    if(this.saldo > 1000){
        tipo = 'Gold'
    }else if (this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }

    return tipo;
}

//Instanciar

const pedro = new Cliente('Pedro',500);


console.log(pedro.tipocliente())
console.log(pedro)



function Empresa (nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const porras = new Empresa ('Andres porras', 500, 'categoria');


console.log(porras)



function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre,saldo)
    this.telefono = telefono;
}

//intanticarlo



const juan = new Persona('Juan',500,3101234567)
console.log(juan)