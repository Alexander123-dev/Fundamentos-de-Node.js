//Entendiendo web scrapping con puppeteer...
//Funciona de forma asincrona

const puppeteer = require("puppeteer");

// Funcion autoejecutable
(async () => {
    console.log("lanzamos navegador");
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch( { headless: false } ); 
        //lo que hace es que el navegador no
        //se lance en segundo plano

    const page = await browser.newPage();// Abrir una pagina en el navegador
    await page.goto("https://es.wikipedia.org/wiki/Node.js");// Ir a una pagina

//Ejecutar un script, con page.evaluate, lo que hace es evaluar lo que le 
    //digamos dentro de la pagina y devolver el resultado
    var titulo1 = await page.evaluate(()  => {
        const h1 = document.querySelector("h1");
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1);
// Usamos browser.close para cerrar el navegador despues de haber extraido 
    //los datos;
    console.log("Cerramos navegador");
    browser.close();
    console.log("Navegardor cerrado");
}) ();
