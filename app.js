// In Node js we don't have window object like client side javascript, instead we have global
// console is a part of global object
console.log(global);
console.log(global.Math.PI);

global.console.log('Hello');

var message = 'Hello';
console.log(global.message); // undefined
// Note:- In node variable and function defined are not added to global object they are only scoped to that file or module
