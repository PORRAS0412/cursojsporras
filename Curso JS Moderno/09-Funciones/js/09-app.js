const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el id : ${id}`);
    },
    pausar : function(){
        console.log(`Pausando ...`)
    },
    borrar : function (){
        console.log(`Borrando ...`)
    },
    crearplaylist : function (nombre){
        console.log(`creando playlist ... ${nombre}`)
    },
    reproducirplaylist : function (nombre2){
        console.log(`reproduciendo playlist ... ${nombre2}`)
    },
}


reproductor.reproducir(30);
reproductor.pausar()
/*reproductor.borrar = function (){
    console.log(`Borrando ...`)
}*/
reproductor.borrar();
reproductor.crearplaylist('rock')
reproductor.crearplaylist('salsa')
reproductor.reproducirplaylist('heavy metal');
