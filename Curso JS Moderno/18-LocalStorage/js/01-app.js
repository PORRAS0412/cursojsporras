localStorage.setItem('nombre',1);

const producto = {
    nombre : 'Monitor',
    precio:300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoo', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',JSON.stringify(meses))