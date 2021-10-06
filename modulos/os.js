const os = require("os");

//Architecture
console.log(os.arch());

//Platform
console.log(os.platform());

//CPUS
console.log(os.cpus().length);

//Errores y señales del Sistema
console.log(os.constants);

// Function to convert from bytes to kbytes, mbytes and gbytes
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

// Directory for the user root
console.log(os.homedir());

// Directory for temporal files
console.log(os.tmpdir());

// Hostname of a server
console.log(os.hostname());

// Actived Network interfaces right now
console.log(os.networkInterfaces());
