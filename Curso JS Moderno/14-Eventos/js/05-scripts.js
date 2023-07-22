window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()

    if(ubicacion.top < 100){
        console.log('El elementoo esta visible')
    }else{
        console.log('aun no')
    }
})