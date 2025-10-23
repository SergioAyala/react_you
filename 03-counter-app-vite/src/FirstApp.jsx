import React from 'react'

const getResult1 = (a,b) => {
    return a+b;
}
// puedo colocar funciones dentro pero fuera pero si depende una accion debera estar dentro

export const FirstApp = () => {
/*     const getResult = () => {
        return 2;
    } */
    const newMessage = 'sergio';
    const objecto = { message: 'hola mundo',title:'Sergio'};
    const numero = [1,2,3,4,5,6,7,8,9];
    
    return (
    <>
    <h1>{ getResult1(1,5)}</h1>
    
   {/* puedo obtener un json 
     <h1>{ JSON.stringify(objecto) }</h1>
      */}
    <p>soy un subtitulo</p>
    </>
  )
}

// puedo usar fragment o <> </>
/* import {Fragment} from 'react'

export const FirstApp = () => {
  return (
    <Fragment>
    <h1>FirstApp</h1>
    <p>soy un subtitulo</p>
    </Fragment>
  )
}
 */