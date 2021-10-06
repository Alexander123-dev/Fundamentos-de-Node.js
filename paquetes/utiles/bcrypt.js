//importamos el modulo
const bcrypt = require("bcrypt");

//declaramos el pass o palabra a encriptar
const password = "1234Segura!";

//bcrypt.hash no permite generar un hash
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);
    //bcrypt.compare nos devuelve un boleano si hash y contraseña son iguales

    bcrypt.compare(password, hash, function(err, res) {
        //console.log(err);
        console.log(res);
    });
});
