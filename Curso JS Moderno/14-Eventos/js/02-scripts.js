const nav = document.querySelector('.navegacion')

//registrar un evento


nav.addEventListener('click',() => {
    console.log('clieck en el nav')
})



nav.addEventListener('mouseenter',() => {
    console.log('entrando a la navegacion')
    nav.style.backgroundColor = 'blue'
})



nav.addEventListener('mouseout',() => {
    console.log('saliendo a la navegacion')
    nav.style.backgroundColor = 'red'
})


// mousedown -similaralclick
// click
// dblclieck = doble click
// mouseup //cuando sultas el click
