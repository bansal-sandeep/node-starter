// In the Node.js module system, each file is treated as a separate module. For example, consider a file named circle.js:
// variables and function defined in module are only scoped to that module only if we need to use them outside the module we need to export them

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
