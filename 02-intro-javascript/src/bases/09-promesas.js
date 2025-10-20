import { getHeroeById } from "./08-2.import-import";
import heroes from "../data/heroes";


// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//     const p1 = getHeroeById(2);
//        resolve( p1 )
//         // reject('no se encontro el heroe');
//     },2000)

// });



// promesa.then( (heroe) => {
//     console.log('heroe',heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdSync = (id) => {
return new Promise( (resolve, reject) => {
    setTimeout(() => {
    const p1 = getHeroeById(id);
        if(p1){
            resolve(p1);
        }else{
            reject('no se encontro heroe');
        }
        // reject('no se encontro el heroe');
    },1000)

});
}


getHeroeByIdSync(1)
.then( console.log)
.catch(console.warn)



/* getHeroeByIdSync(31).then( heroe => console.log('heroe',heroe)).catch(err => console.warn(err)) */