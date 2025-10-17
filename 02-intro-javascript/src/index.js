


const personajes = ['goku','vegata','trunks'];

const [, ,p3] = personajes;


// console.log(p3);

const retornaArreglo = () => {
    return['abc',123];
}

const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros)

//tarea

const tesState  = (valor) => { 
    return [ valor, () => {console.log('hola mundo')}];
}

const [nombre,setNombre] = tesState ('GOKU');


console.log( nombre);
setNombre();
//setNombre();

//arr[1]();
//console.log(arr);