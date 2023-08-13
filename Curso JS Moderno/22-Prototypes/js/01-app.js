//objeto literal

const cliente = {
    nombre : 'Andres Porras',
    saldo : 500
}


console.log(cliente)

console.log(typeof cliente);


//  Constructor del objeto
function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente ('Camila ',800)

console.log(juan)