//Streams es el paso de datos de un lado a otro

const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";


//Con esto empezamos a abrir los datos de un archivo
let readableStream = fs.createReadStream(__dirname + "/input");
//Con esto empezamos a abrir los datos de un archivo
readableStream.setEncoding("utf8");

//Si tenemos un archivo muy pero muy grande podemos enviar toda la 
//informacion a que se procese primero y cuando este todo listo mostralo, 
//se hace asi:
readableStream.on("data", function(chunk) {
    data += chunk;
});

readableStream.on("end", function() {
    console.log(data);
});

//la diferencia de hacer esto se nota en memoria y para cosas grandes como 
//suvir  un archivo de 20GB  a internet.

//Esto es un steam de escritura
process.stdout.write("Hola ");
process.stdout.write("que ");
process.stdout.write("tal");

//Esto es un buffer de lectura y escritura lee del fichero pasa 
//a mayuscula y escribe
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)
