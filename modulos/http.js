const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.info('Nueva Petición');
    console.log(req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    //escribir respuesta al usuario
    //res.write('esto es un mensaje para ver que hace en http');
    res.write('Ruta => '+ req.url);
    switch (req.url) {
        case '/hola':
            res.write('Hola desde la ruta'+ req.url);
            res.end();
            break;
        default:
            res.write('Error 404: no slo que quieres');
            res.end();

    }
}

console.info('escuchando http en el puerto 3000');