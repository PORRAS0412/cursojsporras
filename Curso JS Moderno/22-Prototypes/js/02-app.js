function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}



const juan = new Cliente ('Camila ',800)

function formatearCliente(cliente){
    const {nombre,saldo} = cliente;
    return `El clietne ${nombre} tiene un saldo de ${saldo} `
}

function formatearEmpresa(cliente){
    const {nombre,saldo,categoria} = cliente;
    return `El clietne ${nombre} tiene un saldo de ${saldo} con categoria ${categoria} `
}

console.log(formatearCliente(juan))


function Empresa (nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const porras = new Empresa ('Andres porras', 500, 'categoria');

console.log(formatearEmpresa(porras))

