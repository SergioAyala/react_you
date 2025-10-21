

const apiKey = 'YQkNsMB4dL2j8j6jLNlZ0bKJ0mNPabyk';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


/* peticion.then( resp => {
    resp.json().then(data => {
    console.log(data.data.images.preview.mp4);
    })
}).catch(console.warn);
 */


peticion.then( resp => resp.json())
        .then( ({data} ) => {
            const {url} = data.images.original;

            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );

        })
        .catch(console.warn);
