const process = require("process");

process.on("beforeExit", () => {
    console.log("El proceso va a terminar...")
});

//process.on("");

process.on("exit", () => {
    console.log("Ale, el proceso acabo");
    setTimeout(() => {
        console.log("Esto no se va a ver nunca");
    }, 0);
});

setTimeout(() => {
    console.log("Esto si se va a ver");
}, 0);

process.on("uncaughtException", (err, origin) => {
    console.error("Vaya se nos ha olvidado capturar un Error:/...");
    console.error(err);
    setTimeout(() => {
        console.log("Esto viene desde las excepciones");
    }, 0);
});

funcionQueNoExiste();

console.log("Esto si el error no se recoje, no sale");
