document.addEventListener('DOMContentLoaded', () =>{

    const email = {
        email : '',
        asunto : '',
        mensaje : ''

    }

    //selecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const iputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const enviar = document.querySelector('#formulario button[type="submit"]')
    const reset = document.querySelector('#formulario button[type="reset"]')
    const spiner = document.querySelector('#spiner')
    const cc = document.querySelector('#cc')

    
    //Asignareventos

    inputEmail.addEventListener('blur', validar)
    iputAsunto.addEventListener('blur',validar)
    inputMensaje.addEventListener('blur',validar)
    formulario.addEventListener('submit',enviaremail)
    inputCc.addEventListener('blur',validar);
    
    reset.addEventListener('click',(e)=>{
        e.preventDefault();
        resetform()
    })

    function enviaremail (e){
        e.preventDefault();
        spiner.classList.add('flex');
        spiner.classList.remove('hidden');

        setTimeout(() => {
        spiner.classList.remove('flex');
        spiner.classList.add('hidden');
        resetform();

        
            const alertaExito = document.createElement('p');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg' 
            ,'mt-10','font-bold','text-sm','uppercase', 'alertaexito')
            alertaExito.textContent = 'Mensaje enviado Correctamente'
            formulario.appendChild(alertaExito)
    
            setTimeout(() => {
                alertaExito.remove();
            }, 1000);
       
        
        }, 1000);
    }

    function validar (e){
        
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio` , e.target.parentElement);
            email[e.target.name] = '';
            comprobaremail();
            return;
        }
        if(e.target.id === 'email' && !valdiarEmail(e.target.value)){
            mostrarAlerta('El correo no es valido', e.target.parentElement)
            email[e.target.name] = '';
            comprobaremail();
            return;
        }

        if(e.target.id === 'cc' && !valdiarEmail(e.target.value)){
            mostrarAlerta('El correo no es valido', e.target.parentElement)
            email[e.target.name] = '';
            comprobaremail();
            return;
        }

        limpiaralerta(e.target.parentElement);

        //asignar los valores

        email[e.target.name] = e.target.value.trim().toLowerCase()

        comprobaremail();

    }

    function limpiaralerta(referencia) {
        const valdidado = referencia.querySelector('.bg-red-600');
        if (valdidado) {
            valdidado.remove();
        }
    }
    

    function mostrarAlerta(mensaje,referencia){
        //comprueba si ya existe una alerta
        limpiaralerta(referencia)

       const error = document.createElement('p');
       error.textContent = mensaje;
       error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
       //imyectar el error al formulario
       referencia.appendChild(error)
       //formulario.innerHTML = error.innerHTML;
    }

    function valdiarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
        console.log(resultado)
    }

    function comprobaremail(){
        if(Object.values(email).includes('')){
            enviar.classList.add('opacity-50')
            enviar.disabled = true;
            return

        }

        enviar.classList.remove('opacity-50')
        enviar.disabled = false;
     
}

function resetform(){
    email.asunto = '';
    email.email = '';
    email.mensaje = '';
    formulario.reset();
    comprobaremail();
}
})