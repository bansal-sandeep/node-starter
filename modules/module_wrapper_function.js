// Node implicitly wrap module by module wrapper function which has following arguments
// This is only for demonstration purpose
(function(exports, require, module, __filename, __dirname) {
  const sayHello = () => {
    console.log('Hello');
  };

  sayHello();
})();
