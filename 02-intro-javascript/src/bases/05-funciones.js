


function saludar2 ( nombre ){
    return `hola, ${ nombre } `
}

const saludar3 =  ( nombre ) => {
    return `hola, ${ nombre } `
}

const saludar4 = () => 'hola hijo'

const getUser = () => 
({
        uid: 1,
        username: 'sergio',
    })


// console.log(saludar2('papa'))
// console.log(saludar3('mama'))
// console.log(saludar4())
// console.log(getUser())

const user = getUser();
// console.log(user)


// tarea 

function getUsuarioActivo( nombre){
    return {
             uid: 2,
        username: 'camilo',
    }
}

const userActivo = getUsuarioActivo('camilo');
// console.log(userActivo);

// tarea realizado

const getUsuarioActivo2 = (nombre) =>
    ({
        uid: 2,
        username: 'camilo'
    })


const userActivo2 = getUsuarioActivo('camilo');
const userActivo3 = getUsuarioActivo('eddie');
console.log(userActivo3)