const nombre = 'sergio'
const apellido = 'ayala'

//const NombreCompleto = nombre + ' ' + apellido
const NombreCompleto = ` hola ${ nombre} ${ apellido}`;

console.log(NombreCompleto);

function getSaludo(nombre){
    return 'hola: ' + nombre;
}
console.log(`este es un texto: ${getSaludo( nombre )}`)