const busqueda =document.querySelector('.busqueda')

// busqueda.addEventListener('keydown',()=>{

//     console.log(`Escribiendo`)
// })


// busqueda.addEventListener('keyup',()=>{

//     console.log(`soltar`)
// })


// busqueda.addEventListener('blur',()=>{

//     console.log(`soltar`)
// })

// busqueda.addEventListener('copy',()=>{

//     console.log(`copiado`)
// })


// busqueda.addEventListener('paste',()=>{

//     console.log(`copiado`)
// })

// busqueda.addEventListener('cut',()=>{

//     console.log(`copiado`)
// })

busqueda.addEventListener('input',(evento)=>{
    if(evento.target.value===''){
        alert('deebs escribir algo')
    }
    console.log(evento.target.value)
})
