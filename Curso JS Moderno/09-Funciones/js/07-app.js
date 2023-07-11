iniciarapp();

function iniciarapp (){
    console.log('inicindo app ...')
    segundafuncion();
}

function segundafuncion() {
    console.log('Desde la segund fucnión')
    usuarioautenticado('ANDRES PORRAS');
}

function usuarioautenticado (usuario){
    console.log('utenticando usuario, espere ...')
    console.log(`usuario ${usuario} autenticado con exito`)
}