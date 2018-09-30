// In file system module every module is of two kinds (sync and async) always prefers async one
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', (err, files) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log(files);
  }
});
