const os = require('fs');

let val;
val = os.readdirSync('./');

// Async form
val = os.readdir('./', (err, files) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('result', files);
  }
});

console.log(val);
