const boton = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

boton.addEventListener('click',function(){
   
})

boton.addEventListener('click',mostrarOcultarfooter)




function mostrarOcultarfooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        boton.classList.remove('activo')
    }else{
        footer.classList.add('activo')
        boton.classList.add('activo')
    }
    
}



