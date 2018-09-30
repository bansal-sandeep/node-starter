// Best Practice: while loading module store it in const instead of var so that it cannot change accidentally
const circle = require('./circle'); // require function returns a export object that is exported

const area = circle.area(4);
const circumference = circle.circumference(4);

console.log(
  `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`
);
