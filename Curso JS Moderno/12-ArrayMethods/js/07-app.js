const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['agosto', 'septiembre', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses3 = ['agosto', 'septiembre', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


const resultado = meses.concat(meses2, meses3)
console.table(resultado)


const resultado2 = [...meses,...meses2,...meses3];

console.table(resultado2)
