const { exec, spawn } = require("child_process");

// const { stdout, stderr } = require("process");

// exec("ls-la", (err, stdout, stderr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn("ls", ["-la",""]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function () {
    console.log("¿Esta muesto?");
    console.log(process.killed);
    console.log(dato.toString());
})

proceso.on("exit", function () {
    console.log("El proceso termino");
    console.log(process.killed);
})
