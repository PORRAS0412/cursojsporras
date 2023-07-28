//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();
function eventListeners(){
formulario.addEventListener('submit',agregarTweet)
document.addEventListener('DOMContentLoaded', () =>{
    tweets = JSON.parse(localStorage.getItem('tweets') || [])
})
}

//Funciones

function agregarTweet (e){
    e.preventDefault()
    //text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    if (tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet : tweet
    }

    tweets = [...tweets, tweetObj]

    //una vez agreagado crear html
    crearHTML();
    formulario.reset();
}


//Mostrar mensaje de error


function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')
    formulario.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove();
    }, 1500);
}


//crear HTML

function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach((a,i) => {
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            btnEliminar.onclick = () =>{
                borrarTeet(a.id);
            }

            const li = document.createElement('li');
            li.innerText = a.tweet;
            listaTweets.appendChild(li);
            li.appendChild(btnEliminar)

        })
    }
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}


function limpiarHTML(){
    while (listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}


function borrarTeet (id){
    tweets = tweets.filter(twiter => twiter.id !== id)
    crearHTML();
}