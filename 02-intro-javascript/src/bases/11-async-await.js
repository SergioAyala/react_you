/* 
const getImagePromesa = () => {
    const promesa = new Promise((resolve,reject) =>{
        resolve('https://1231231.com');
    })

    return promesa;
}

getImagePromesa().then(console.log); */



/* const getImagePromesa = () => new Promise((resolve) => resolve('https://1231231.com'))
 */    

const getImages = async() =>
{
    try {
    const apiKey = 'YQkNsMB4dL2j8j6jLNlZ0bKJ0mNPabyk';
    const resp = await fetch(`https1://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);    
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);



    console.log(url);
    console.log(data);
    }catch(error){
       console.error(error);
    }
}

getImages();


/* const apiKey = 'YQkNsMB4dL2j8j6jLNlZ0bKJ0mNPabyk';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
 */

/* peticion.then( resp => {
    resp.json().then(data => {
    console.log(data.data.images.preview.mp4);
    })
}).catch(console.warn);
 */


/* peticion.then( resp => resp.json())
        .then( ({data} ) => {
            const {url} = data.images.original;

            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );

        })
        .catch(console.warn); */
