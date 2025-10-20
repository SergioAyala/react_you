

const apiKey = 'YQkNsMB4dL2j8j6jLNlZ0bKJ0mNPabyk';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion.then( resp => {
    resp.json().then(data => {
    console.log(data);
    })
}).catch(console.warn);

