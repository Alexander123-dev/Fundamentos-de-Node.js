function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch(err) {
            console.error("Error en mi funcion asincrona");
            cb(err);
        }
    });
}

try {
    seRompeAsincrona(function () {
        console.log("Hay un Error...")
    });
    //otraFuncion();
    //seRompe();
} catch(err) {
    console.error("Vaya, algo se ha roto...");
    console.error(err.message);
    console.log("Pero no pasa nada, lo hemos capturado")
}

console.log("Esto de aqui esta al final")