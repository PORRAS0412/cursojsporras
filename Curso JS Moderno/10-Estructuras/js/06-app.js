const usuario = false;
const puedePagar = true;


if(usuario && puedePagar){
    console.log('Si eres usuario y puedes pagar')
}else if(!usuario) {
    console.log('usuario')
}else if(puedePagar) {
    console.log('puede pagar')
}else{
    console.log('No puedes comprar')
}