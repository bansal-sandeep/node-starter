// In the Node.js module system, each file is treated as a separate module. For example, consider a file named foo.js:
const circle = require('./circle'); // require function returns a export object that is exported

const area = circle.area(4);
const circumference = circle.circumference(4);

console.log(
  `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`
);
