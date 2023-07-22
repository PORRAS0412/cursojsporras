const form = document.querySelector('#formulario')

form.addEventListener('submit', validarFormuarlio );

function validarFormuarlio (e){
    e.preventDefault();
    console.log('buscando')
    console.log(e.target.action)
}