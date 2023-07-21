const enlace = document.createElement('a');


enlace.textContent = 'Opcion nueva';
enlace.href = '/nuevo-enlace';

console.log(enlace)

enlace.setAttribute ('data-enlace', 'nuevoenlace')

//selecionar la navegacion

const navegacion = document.querySelector('.navegacion')
navegacion.insertBefore(enlace,navegacion.children[1])

// crear un 

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = 'preci'
parrafo3.classList.add('precio')

// 

const info = document.createElement('div');

info.classList.add('info')


console.log(info)

info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//crear la imagen


const imagen = document.createElement('img')


imagen.src = 'img/hacer2.jpg'


//crear card

const card = document.createElement('div')
card.classList.add('card')

card.appendChild(imagen)

card.appendChild(info)

//insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards')
// contenedor.appendChild(card)

contenedor.insertBefore(card ,contenedor.children[0])
