//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = new Date().getFullYear() - 10;

//Generar un objeto con la busqueda

const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //Muestra los automoviles al cargar
    llenarSelect(); // llenar los años
})

//Eventlistenerpara los formulario de busqueda

marca.addEventListener('change',(e) => {
    datosBusqueda.marca = e.target.value;
    filtrarauto();
});

year.addEventListener('change',(e) => {
    datosBusqueda.year = e.target.value;
    filtrarauto();
});

minimo.addEventListener('change',(e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarauto();
});

maximo.addEventListener('change',(e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarauto();
});

puertas.addEventListener('change',(e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarauto();
});

transmision.addEventListener('change',(e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarauto();
});

color.addEventListener('change',(e) => {
    datosBusqueda.color = e.target.value;
    filtrarauto();
});

//Funciones


function mostrarAutos (autos){
    limpiarHTML();
   autos.forEach((a,i)=>{
        const {marca,modelo,year,precio,puertas,color,transmision} = a;
        const autosHtml = document.createElement('p')
        autosHtml.textContent = `
            ${marca} ${modelo}  -${year} -${precio} -${puertas} Puertas -${color} - ${transmision}
        `;
        resultado.appendChild(autosHtml)
   })

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}


function filtrarauto (){
   const resultado = [] =autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarpuertas).filter(filtrarpuertas).filter(filtrarTransmision).filter(filtrarColor);
  

   if(resultado.length){
    mostrarAutos(resultado);
   }else{
    noresultado();
   }

}

function noresultado(){
   const error = document.createElement('div');
   error.classList.add('alerta','error')
   error.textContent= 'No hay resultados para tu búsqueda';
   limpiarHTML()
   resultado.appendChild(error)
}


function filtrarMarca(auto){
const {marca} = datosBusqueda;
   if(marca){
    return auto.marca === marca;
   }
   return auto;
}


function filtrarYear(auto){
    const {year} = datosBusqueda;
       if(year){
        return auto.year === parseInt(year) ;
       }
       return auto;
    }

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
       if(minimo){
        return auto.precio >=  parseInt(minimo) ;
       }
       return auto;
    }

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
       if(maximo){
        return auto.precio <=  parseInt(maximo) ;
       }
       return auto;
    }

function filtrarpuertas(auto){
    const {puertas} = datosBusqueda;
       if(puertas){
        return auto.puertas ==  parseInt(puertas) ;
       }
       return auto;
    }

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
       if(transmision){
        return auto.transmision == transmision ;
       }
       return auto;
    }    

function filtrarColor(auto){
    const {color} = datosBusqueda;
       if(color){
        return auto.color ==  color ;
       }
       return auto;
    }    
    