// Variables local to the module will be private, because the module is wrapped in a function by Node.js (see module wrapper). In this example, the variable PI is private to circle.js.
const { PI } = Math;

const area = r => {
  return PI * r * r;
};

const circumference = r => {
  return 2 * PI * r;
};

module.exports.area = area;
module.exports.circumference = circumference;
