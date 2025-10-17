


const persona = {
    nombre:'tony',
    edad: 45,
    clave: 'iron man',
    rango: 'soldado'
}



/* 
const extractContext = ( {clave,edad} ) => {
 
  
    return {
        nombreClave: clave,
        anio: edad
    }

    
}
const avenge = extractContext( persona);
console.log(avenge);
 */



const extractContext = ( {nombre,clave,edad} ) => {
 
  
    return {
        nombreClave: clave,
        anio: edad,
        latitud: {
            lat:123123,
            log:321312
        }
    }

    
}
const {nombreClave,anio,latitud: {lat,log}} = extractContext( persona);
console.log(nombreClave,anio);
console.log(lat,log);

