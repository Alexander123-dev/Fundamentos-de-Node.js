//funciones
//se crea una promesa que indica el estado del proceso.
//en vez de devolver callback se usara promesa

function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });   
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla...");
           // resolve(nombre);

            reject("Hay un Error...")
         }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios, " + nombre);
            resolve();
        }, 1000);
    });   
}

//--
//lo que se ejecutara....

console.log("Inciando el proceso...");
hola("Carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminando el proceso");
    })
//cualquier hilo de ejcucion lo llevará al catch para ejecutar su funcion
//console
    .catch(error => {
        console.error("Ha habido un Error:/...");
        console.error(error);
    })