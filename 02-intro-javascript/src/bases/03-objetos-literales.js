const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 37,
    direccion: {
        ciudad: 'stgo',
        zipcode: 12312321,
        lat: 21321312,
        lng: 321321
    }
};

console.log( persona);


const persona2 = {...persona};

persona2.nombre='camilo'
console.log(persona);
console.log(persona2);