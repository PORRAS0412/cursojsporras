//  variables 

const carrito = document.querySelector('#carrito');
const conetendorcarrito = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.querySelector('#vaciar-carrito')
const  listarCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []

cargarEventListeners();
function cargarEventListeners(){
    
    //cuando agregas un curso
    listarCursos.addEventListener('click', agregarCurso);

    //eliminar cursos del carrito

    carrito.addEventListener('click', eliminarcurso);
    
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    } )

    //vaciar carrito
    vaciarcarritoBtn.addEventListener('click',vaciarcarrito)
}


//Funciones
function agregarCurso (e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSelecionado = e.target.parentElement.parentElement
        leerDtosCurso(cursoSelecionado);
  
    }
}

//Elikinar datos carrito

function eliminarcurso (e){

    if(e.target.classList.contains('borrar-curso')){
        const cursoaeliminarid = e.target.getAttribute('data-id')
        //elimina del arreglo

        articulosCarrito = articulosCarrito.filter(curso =>{
            return  curso.idcurso !== cursoaeliminarid
        })
        carritoHTML();
        console.log(articulosCarrito)
    }
}

//leer datos curso

function leerDtosCurso(curso){
    // console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio : curso.querySelector('span').textContent,
        idcurso : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

//calidar si el curso ya esta en el carrito
    const existe = articulosCarrito.some((curso) =>curso.idcurso === infoCurso.idcurso)
    if(existe){
        const cursos = articulosCarrito.map((curso,i)=>{
          if(curso.idcurso === infoCurso.idcurso){
            curso.cantidad  ++;
            return curso;
          } else{
            return curso;
          }
        });
        articulosCarrito = [...cursos]
    }else{
        articulosCarrito = [...articulosCarrito , infoCurso]
    }
    console.log(articulosCarrito);
        carritoHTML();

    //Agregar elementos al arreglo de carrito
   
}


//Muestra el carrito de compras en el html

function carritoHTML(){

    //Limpiar el html
    limpiarHTML();
    //recorre el carrito y genera el html
    articulosCarrito.forEach((curso)=>{
        const {imagen,titulo,precio,cantidad,idcurso} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <img src = "${imagen}" width = "100">
            </td>
            <td>
            ${titulo}
            </td>
            <td>
            ${precio}
            </td>
            <td>
            ${cantidad}
            </td>
            <td>
            <a href="#" class="borrar-curso" data-id="${idcurso}">X </a>
            </td>
        `;
        //agega el html del carrito en el tbody
        conetendorcarrito.appendChild(row);
    })

        //agregar el carrito de compars a storage
        sincronizarStorage();
}


function sincronizarStorage (){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito))
}

//Elimina los cursos del tbody


function limpiarHTML(){
    //forma lenta
    //  conetendorcarrito.innerHTML = '';
     while(conetendorcarrito.firstChild){
      conetendorcarrito.removeChild(conetendorcarrito.firstChild)
     }


}

function vaciarcarrito (){
    articulosCarrito = []
    limpiarHTML();
}