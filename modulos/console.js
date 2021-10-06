// console.log()
    //imprime algo en consola
console.log("Hola");

// console.info()
    // es un alias de console.log
console.info("Hola");

// console.error()
    //imprime un error en consola
console.error("Hola");

// console.table()
    // Tabula un grupo de datos 
var tabla = [
    {
        a: 1,
        b: "Z"
    },
    {
        a: 2,
        b: "Otra letra..."
    }
]

console.table(tabla);

// console.group() & console.groupEnd()
    // Agrupa una cantidad de datos en consola
console.group("Conversaciones");
    console.log("Hola");
    console.group("bla.");
        console.log("bla bla bla...");
        console.log("bla bla bla...");
        console.log("bla bla bla...");
    console.groupEnd("bla.");
    console.log("adios");
console.groupEnd('Fin de la Conversación');

function function1() {
    console.group("funcion1");
        console.log("Esto es de la funcion1");
        console.group("Esto tambien");
    function2();
    console.groupEnd("funcion1");
}

function function2() {
    console.group("funcion2");
        console.log("ahora esto es de la funcion2");
    console.group("funcion2");
    
}
console.group("Empezamos...");

function1();

// console.count() & console.countReset()
    // Cuenta la cantidad de veces que se ejecuta algo
    console.count("Veces");
    console.count("Veces");
    console.countReset("Veces");
    console.count("Veces");
    console.count("Veces");
