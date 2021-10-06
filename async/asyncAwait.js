// La palabra async  la convierte inmediatamente en asíncrona.

async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });   
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla...");
            resolve(nombre);

            //reject("Hay un Error...")
         }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios, " + nombre);
            resolve();
        }, 1000);
    });   
}

// Await solo es válido dentro de una función asíncrona.

async function main() {
    let nombre = await hola("Carlos");
    await hablar();
    hablar();// Para hacer que se ejecute en segundo plano no debe existi el await
    await hablar();
    await adios(nombre);
    console.log("Termina el proceso.");
}

// Esto nos permitirá saber si nuestra función se está ejecutanod de forma asíncrona.
console.log("Empezamos el proceso...");
main();
console.log("Va a ser la segunda instrucción");
