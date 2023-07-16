const autenticado = true;
const puedepagar = true;



console.log(aunteticado && puedepagar ? 'Esta autenticado' : 'No esta autenticado' );

console,log(autenticado? puedepagar ?'Esta autenticado y puede pagaar' : 'Esta autenticado pero no puede pagar  ' : 'No esta autenticado' )


if(autenticado){
         console,log('esta autenticado')
    if (puedepagar) {
        console,log( 'elsa autenticado y puede pagar')
    }else{
        'esta autenticado pero no puede pagar'
    }
}else{
    'no esta autenticado'
}