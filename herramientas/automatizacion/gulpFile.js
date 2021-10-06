//Trabajando automatizacion de procesos con gulp
const gulp = require("gulp");

const server = require("gulp-server-livereload");

//Iniciar una tarea con gulp, usando task que recibe dos parametros
  //1. El nombre de la tarea.
  //2. Un callback que tambien recibe un callback
gulp.task("build", function (cb) {
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});


gulp.task("serve", function (cb) {
  // pipe encadena streams
  console.log("Abrí la web");
  gulp.src("www").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

// Encadenar tareas
gulp.task("default", gulp.series("build", "serve"));
