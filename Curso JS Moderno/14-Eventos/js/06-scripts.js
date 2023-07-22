const cardiv = document.querySelector('.card');
const infodiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');



cardiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('click en card')
})


infodiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('click en info')
})


titulo.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('click en titulo')
})

