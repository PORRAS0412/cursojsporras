const reproductor = {
    cancion : '',
    reproducir : id => {console.log(`reproduciendo cancion con el id : ${id}`);},
    pausar : () =>{console.log(`Pausando ...`)},
    borrar : () =>{ console.log(`Borrando ...`)},
    crearplaylist : nombre => console.log(`creando playlist ... ${nombre}`),
    reproducirplaylist : nombre2 => console.log(`reproduciendo playlist ... ${nombre2}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get Obtenercancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'soltero feliz'
reproductor.Obtenercancion 
reproductor.reproducir(30);
reproductor.pausar()
/*reproductor.borrar = function (){
    console.log(`Borrando ...`)
}*/
reproductor.borrar();
reproductor.crearplaylist('rock')
reproductor.crearplaylist('salsa')
reproductor.reproducirplaylist('heavy metal');
