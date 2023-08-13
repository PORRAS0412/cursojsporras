//Constructores

function Seguro (marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(){
    console.log(this.marca)
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case '1':
        cantidad = base * 1.15;
        break;
        case '2':
        cantidad = base * 1.05;
        break;
        case '3':
        cantidad = base * 1.35;
        break;
        default:
        break;
    }

    //Leer el año
    

    console.log(cantidad)
}

function UI (){}

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
          min = max - 20;

   const selectYear = document.querySelector('#year');

    for(let i = max; i >min ;i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option)
    }

}

//Muestra alertas en pantalla

UI.prototype.mostrarMensaje = (mensaje, tipo) =>{
    const div = document.createElement('div')
    if(tipo === 'error'){
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje;
    //Inseryar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'))

    setTimeout(() => {
        div.remove();
    }, 2000);
}



const ui = new UI();
console.log(ui)

document.addEventListener('DOMContentLoaded', ()=>{
ui.llenarOpciones();
})

addEventListeners();

function addEventListeners (){
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit',cotizarSeguro)
}


function cotizarSeguro (e){
    e.preventDefault();
    //leer la marca selecionada
    const marca = document.querySelector('#marca').value;
    console.log(marca);

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;
    console.log(marca);

    //leer tipo de cobertura

    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo)

    console.log('Cotizando')

    if (marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...','exito')

    //Instancia el seguro
    const seguro = new Seguro (marca,year,tipo)
    seguro.cotizarSeguro();
    console.log(seguro)

    //utilizar el protoype 


}
