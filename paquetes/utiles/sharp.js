//importamos el modulo
const sharp = require("sharp");
//ruta de la imagen a modificar
sharp("original.png")
//scalamos la imagen a 500 de alto
  .resize(80)
//otorgamos una escala de grises
  .grayscale()
//generamos el archivo modificado
  .toFile("original.png")