'use strict'
/*
In JavaScript, "Strict Mode" is a feature introduced in ES5 that enforces a more rigid set of rules and best practices, making the code safer, less error-prone, and improving overall code quality.

When you enable strict mode, certain types of silent errors are turned into explicit errors, making debugging easier and improving the predictability of the language.

*/
// Uncaught ReferenceError: word is not defined
// word = 5

// Uncaught SyntaxError: Duplicate parameter name not allowed in this context (at script.js:11:27)
// function myFunction(test, test) {
function myFunction() {
  //   'use strict'
  //   Otherwise would be the Window object
  console.log(this)
  // function code with strict mode nabled
  /*
Once Strict Mode is enabled, it remains in effect for the entire script or the containing function and its inner functions.
  */
}
myFunction()

// Uncaught SyntaxError: Unexpected eval or arguments in strict mode (at script.js:23:7)
// const arguments = true
