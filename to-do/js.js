const container = document.querySelector('.container');
const texto = document.querySelector('.inputlista');
const btnEnviar = document.querySelector('.enviar');
const lista = document.querySelector('.lista');
const lista2 = document.querySelector('.lista2');

listenerEvents();

function listenerEvents() {
    btnEnviar.addEventListener('click', agregarTodo);
}

function eliminarItem(e) {
    const elementoPadre = e.target.parentNode;
    elementoPadre.remove();
}

function agregarTodo() {
    mensajeLleno();

    const existeError = document.querySelector('.error');
    if (!existeError) {
        const item = crearItem();
        lista.appendChild(item);
        lista2.appendChild(item)
        limpiarHtml();
    }
}

function crearItem() {
    const diaHoy = new Date();
    const item = document.createElement('tr');
    item.classList.add('item');
    
    const contenido = `
        FECHA: ${diaHoy.getFullYear()}-${diaHoy.getMonth()}-${diaHoy.getDate()} ${diaHoy.getHours()}:${diaHoy.getMinutes()} 
        TAREA: ${texto.value}`;
    
    item.textContent = contenido;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btneliminar');
    btnEliminar.textContent = 'X';
    btnEliminar.addEventListener('click', eliminarItem);
    
    item.appendChild(btnEliminar);

    
    return item;
}

function limpiarHtml() {
    texto.value = '';
}

function mensajeLleno() {
    const lleno = texto.value === '';
    if (lleno) {
        mensajeerror('El campo no puede estar vacio', container);
        return;
    }
}

function mensajeerror(mensaje, apuntador) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');
    apuntador.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 1000);
}
