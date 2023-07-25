// FUNCTIONS

/*
Functions in JavaScript are blocks of code that can be defined and executed at any point in the program.
They allow you to encapsulate a set of instructions and reuse them throughout your code.
Functions are essential for organizing code, improving readability, and promoting code reusability.

Defining and Calling Functions:
To define a function, you use the `function` keyword followed by the function name, a set of parentheses `()`, and a set of curly braces `{}` to enclose the function body.
The function name is used to call the function later
*/
function addNumbers(a, b) {
  return a + b
}
const result = addNumbers(5, 3)
console.log(result) // Output: 8

/*
Function parameters are variables listed inside the function's parentheses, used to receive input values from the input call.
When you call a function, you can pass arguments that will be assigned to these parameters.

Default Params:
ES6 introduced default function parameters, allowing you to specify default values for parameters if no arguments are provided during the function call.
To do this, you assign a default value directly to the parameter.
- When you define with parameters, those parameters act as placeholders for the arguments you pass into them.
- Default values are not unintialized variables in the traiditonal sense
- If a function is called without the required arguments, the corresponding parameters become undefined
*/
function greet(name = 'Guest') {
  return `Hello, ${name}!`
}

console.log(greet()) // Output: Hello, Guest!
console.log(greet('John')) // Output: Hello, John!

/*
Rest Params:
Rest parameters enable a function to accept an indefinite number of arguments as an array.
It allows you to handle variable-length argument lists.

`...numbers` collects all the arguments into an array called [numbers]
*/
function sumNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sumNumbers(1, 2, 3)) // Output: 6
console.log(sumNumbers(1, 2, 3, 4, 5)) // Output: 15

/*Arrow Functions:
- provide a shorter syntax for writing functions
- partivularly useful for one-liners and when you need to maintain the lexical `this`context
- don't have their own `this`, `arguments`, `super`, or `new.target` bindings, which means they inherit these values from the surrounding code
- when we say "lexical `this` context", we refer to how arrow functions handle the value of `this` inside their bodies.
- In JavaScript, the value of `this` depends on how a function is called
   - it can behave differently based on the context of the function invocation
- arrow functions have a uniqur behavior in relation to `this`, which sets them apart from regular functions
- in ()=>, `this` is determined by the surrounding lexical context, specifically the value of `this` in the outer (enclosing) function or scope where the arrow function is defined.
- ()=> do not have their own `this` value
   - instead, they inherit the `this` value from the enclosing scope
*/
const addNumbers2 = (a, b) => a + b
console.log(addNumbers2(2, 3))

console.log(`-------`)
function regularFunction() {
  console.log('Regular function this:', this)
}

const arrowFunction = () => {
  console.log('Arrow function this:', this)
}

const obj = {
  name: 'John',
  regularFunction: regularFunction,
  arrowFunction: arrowFunction,
}

regularFunction() // Output: Regular function this: [object Window]
arrowFunction() // Output: Arrow function this: [object Window]
obj.regularFunction() // Output: Regular function this: { name: 'John', ... }
obj.arrowFunction() // Output: Arrow function this: { name: 'John', ... }
/*
 if we call regularFunction from the obj context using obj.regularFunction(), its `this` value becomes the obj object itself because it's explicitly bound to the obj context.

On the other hand, calling obj.arrowFunction() maintains the same lexical `this` context as when the arrow function was defined (i.e., in the global scope). The arrow function inherits the this value from its enclosing scope (global in this case), and it does not change when called from within the obj context.

The ability to maintain the lexical `this` context in arrow functions is often used to prevent issues with `this` binding and provides a more intuitive behavior when working with nested functions or asynchronous code. However, it's essential to understand the difference between regular functions and arrow functions and when to use each of them based on the desired behavior of `this`.
*/
console.log(`-------`)

// Output: 5

/*
IIFEs (Immediately Invoked Function Expressions):
- a function that is executed immediately after it is defined
- is typically used to create a new scope
   - and avoid polluting the global namespace
*/
// (
//   function () {
//     console.log('This is an IIFE!')
//   }
// )()
// this syntax invokes it immediately
// Output: This is an IIFE!

/*
arguments object:
- a special object available inside every function
- contains an array-like list of all the arguments passed to the function, even if no explicit parameters are defined
*/
function showArgs() {
  // not a real array
  // lacks some array methods
  // but can be converted into a property array if needed
  console.log(arguments)
  console.log(typeof arguments)
}
showArgs(1, 'hello', true)
// Output: { '0': 1, '1': 'hello', '2': true }

/*
Scope & Function Stack:
Scope refers to the visibility and a11y of variables in different parts of your code during runtime.
The function stack represents the order in which functions are called and executed
*/

/*
Recursion:
A programming technique where a function calls itself to solve a problem
- often used for tasks that can be broken down into smaller, similar subproblems
*/
function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(5)) // Output: 120 (5 * 4 * 3 * 2 * 1)

const factorial2 = (n) => (n === 0 ? 1 : n * factorial(n - 1))
console.log(factorial2(5)) // Output: 120 (5 * 4 * 3 * 2 * 1)

/*
Lexical Scoping:
- refers to how variable scope is determined by the position of the variables in the source code
- JavaScript uses lexical scoping, meaning a variable declared inside a function is accessible only within that function and any nested functions
*/
function outer() {
  const x = 10

  function inner() {
    console.log(x) // Accesses the `x` from the outer function
  }

  inner()
}
outer() // Output: 10

/* Closures:
- combination of a function and the lexical environment within
   - which that function was declared
- allows a function to maintain access to its own scope
   - even when the function is executed outside the scope
*/
function outer() {
  const x = 10

  function inner() {
    console.log(x) // Accesses the `x` from the outer function
  }

  return inner
}
const closureFunc = outer()
closureFunc() // Output: 10

/*
Built-in Functions:
- JavaScript provides a set of built-in functions that you can use without defining them
- for example, `length` and `join`
*/
const message = 'Hello, World!'
console.log(message.length) // Output: 13

const numbers = [1, 2, 3, 4]
console.log(numbers.join('-')) // Output: "1-2-3-4"

/*
Higher-Order Functions:
- take advtange of functions being first-class citizens
- enable you to work with functions in a more dynamic and flexible way
*/
// STORING FUNCTIONS IN VARIABLES
const myFunction = function () {
  console.log('Hello from myFunction!')
}
// Holds the reference to the function
console.log(myFunction) // Output: [Function: myFunction]
myFunction()

// CALLING DIRECTLY WITHOUT STORING IN A VARIABLE
function sayHello() {
  console.log('Hello!')
}
sayHello() // Output: Hello!
/*
The key difference between these two scenarios is that when you store a function in a variable, you can treat it as data and pass it around, use it as a callback for other functions, or assign it dynamically at runtime. This flexibility is not possible when defining functions directly with names.
*/
function greet(greetingFunction) {
  //   greetingFunction() // Call the passed function
}

function sayHello() {
  console.log('Hello!')
}

function sayGoodbye() {
  console.log('Goodbye!')
}

greet(sayHello) // Output: Hello!
greet(sayGoodbye) // Output: Goodbye!
/*
Functions can be stored in variables to make use of their first-class nature, enabling greater flexibility in how they are used and executed within your JavaScript code. When you define functions directly with names, they are used in a more traiditional manner and called directly by their names when needed.
*/
