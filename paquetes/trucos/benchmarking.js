//Se puede ejecutar un proceso que pronostique cuanto debe tardarce en 
//ejecutar algo y asi identificar donde hay fallas para corregir y hacer que 
//todo ejecute mas rapido
console.time("todo");

let suma = 0;
console.time("bucle");


for(let i = 0; i < 1000000; i++) {
    suma += 1;
}

console.timeEnd("bucle");

let suma2 = 0;
console.time("bucle 2");

for(let j = 0; j < 1000000; j++) {
    suma2 += 1;
}

console.timeEnd("bucle 2");

console.timeEnd("todo");

//con las funciones asincronas funciona asi
console.time("bucle async");
console.log("Empieza el proceso asincrono");
asincrona()
    .then(() => console.timeEnd("bucle async"))

function asincrona() {
    return new Promise( (resolve) => {
        setTimeout( function() {
            console.log("Terimina el proceso asíncrono");
            resolve();
        }, 0);
    })
}

//Así podemos entender cuando tarda un codigo en ejecutarce esto se conoce 
    //como benchmarking
