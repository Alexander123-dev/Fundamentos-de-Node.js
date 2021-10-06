//Función principal asíncrona
function asincrina(callback) {
    setTimeout( function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

//Función para mí callback
asincrina( function(err, dato) {
    if (err) {
        console.error("Tenemos un Error:/...");
        //Capturar el error 
        console.error(err);
        return false; //Buena práctica para detener la ejecución de la función
         //throw err; //no va ha Funcionar!!!...
    }
    console.log("Todo ha ido Vien, mi data es", data);
})
