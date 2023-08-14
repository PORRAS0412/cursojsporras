document.addEventListener('DOMContentLoaded',()=>{
    const uno = document.querySelector('.uno');
    const dos = document.querySelector('.dos');
    const tres = document.querySelector('.tres');
    const cuatro = document.querySelector('.cuatro');
    const cinco = document.querySelector('.cinco');
    const seis = document.querySelector('.seis');
    const siete = document.querySelector('.siete');
    const ocho = document.querySelector('.ocho');
    const nueve = document.querySelector('.nueve');
    const cero = document.querySelector('.cero');
    const AC = document.querySelector('.AC');
    const mas = document.querySelector('.mas');
    const menos = document.querySelector('.menos');
    const producto = document.querySelector('.producto');
    const division = document.querySelector('.division');
    const igual = document.querySelector('.igual');
    
    let pantalla = document.querySelector('#textArea')
    let irmostrando = [];
   

   datos = {}

    addEventListeners();
    function addEventListeners (e){
        uno.addEventListener('click', mostrarEnPantalla)
        dos.addEventListener('click', mostrarEnPantalla)
        tres.addEventListener('click', mostrarEnPantalla)
        cuatro.addEventListener('click', mostrarEnPantalla)
        cinco.addEventListener('click', mostrarEnPantalla)
        seis.addEventListener('click', mostrarEnPantalla)
        siete.addEventListener('click', mostrarEnPantalla)
        ocho.addEventListener('click', mostrarEnPantalla)
        nueve.addEventListener('click', mostrarEnPantalla)
        cero.addEventListener('click', mostrarEnPantalla)
        AC.addEventListener('click',limpiarPantalla)
        mas.addEventListener('click',operar)
        menos.addEventListener('click',operar)
        producto.addEventListener('click',operar)
        division.addEventListener('click',operar)
        igual.addEventListener('click',mostrarResultado)

    }

    function mostrarEnPantalla (e){

        irmostrando = [...irmostrando , e.target.value]
        console.log(irmostrando)
        pantalla.textContent = irmostrando.join('')
      
    
    }

    function limpiarPantalla (){
        
        irmostrando = [];
        pantalla.textContent = irmostrando
        
    }

    

 

    function operar (e){

      let numero1 = parseInt(pantalla.value) 
      if(pantalla.value == ''){
        mostrarerror('No puede estar vacio', container = document.querySelector('.container'))
      }
      let operador = e.target.value
      datos.numa =  parseInt(pantalla.value) ;
      datos.operador = e.target.value;
      const numerooperador = parseInt(numero1) + operador
      console.log(numerooperador)
      pantalla.textContent = numerooperador
      limpiarPantalla();
      
    }

    function mostrarResultado () {
        let numero2 = parseInt(pantalla.value) 
        datos.numb = parseInt(pantalla.value) 
        console.log(numero2)
        console.log(datos)
        
        let {numa,numb,operador} = datos

        switch (operador){
            case '+':
                limpiarPantalla()
                irmostrando = sumar(numa,numb); 
                pantalla.textContent = irmostrando
            break;
            case '-':
                limpiarPantalla()
                irmostrando = restar(numa,numb); 
                pantalla.textContent = irmostrando
            break;
            case '*':
                limpiarPantalla()
                irmostrando = multiplicar(numa,numb); 
                pantalla.textContent = irmostrando
            break;
            case '/':
                limpiarPantalla()
                irmostrando = dividir(numa,numb); 
                pantalla.textContent = irmostrando
            break;

            default:
            break; 
        }     
    }

})


function sumar (numa,numb) {
    return (numa+numb)
}

function restar (numa,numb) {
    return (numa-numb)
}

function multiplicar (numa,numb) {
    return (numa*numb)
}

function dividir (numa,numb) {
    if(numb === 0){
        mostrarerror('No se puede dividir por 0',  container = document.querySelector('.container'));
    }
    return (numa/numb)
}

function mostrarerror (mensaje,apuntador){
    
    
    const error = document.createElement('p');
    error.classList.add('error')
    setTimeout(() => {
        error.remove();
    }, 2000);
    error.textContent = mensaje;
    apuntador.appendChild(error)
}



