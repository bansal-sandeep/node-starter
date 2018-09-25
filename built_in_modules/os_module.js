const os = require('os');

let val;
val = os.freemem();
val = os.hostname();
val = os.totalmem();

console.log(val);
