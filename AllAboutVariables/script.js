/*
In programming, variables are like containers that allow you to store and manipulate data. They have a name (identifier) and a value associated with them. The three main ways to declare variables in JavaScript are using `var`, `let` and `const`.
*/

/*
`var` was the original way to declare variables in JavaScript, until ES2015 was released. It has some issues regarding scoping. It's generally recommended to use `let` and `const` instead of `var`. 
*/

/*
`let` is used for variables whose values can be changed or reassigned. It allows you to declare a variable that can be modified later in your code.
*/

/*
`const` is short for "constant." When you declare a variable using `const`, its value cannot be changed or reassigned after the initial assignment. It's useful for values that should remain constant throughout your program.
*/
// Using var
var age = 32
var name = 'Jonathan Hammond'

// Using let
let employed = false
employed = true // You can change the value of a 'let' variable.

// Using const
const unemploymentDay = 21
const creator = 'Jonathan'
/* The below generates the following error:
Uncaught TypeError: Assignment to constant variable.
unemploymentDay = 22 // This will cause an error because you can't reassign a constant variable.
*/

/*
Hoisting

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or a function before it's been formally declared in your code.

However, it's important to note that only the declarations are hoisted, not the initializations.
*/
console.log(message) // Outputs 'undefined' because the variable is hoisted, but its value is not yet assigned.
var message = 'Hello, hoisting!'
console.log(message) // Outputs 'Hello, hoisting!' because the variable is now initialized.

/*
The term "initialized" refers to the act of assigning an initial value to a variable when it is declared. A variable doesn't contain any specific value until you give it one through initialization.

If a variable is declared but not initializd, it will hold a special value called `undefined`, indicating that it has not been given a valid value yet. It's important to initialize variables properly before using them to avoid unexpected behavior in your code.
*/

// With let and const, hoisting works differently:
// console.log(score); // This would result in an error because 'score' is in the "temporal dead zone" and not accessible yet.
let score = 42
console.log(score) // Outputs 42

/*
Variable Naming Rules:

Variable names can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($)

They must start with a letter, an underscore, or a dollar sign. They cannot start with a digit.

Variable names are case-sensitive, so myVariable and myvariable are different variables.

Avoid using reserved keywords (e.g., let, const, if, else, function, etc.) as variable names.

Some valid names: `age`, `_count`, `myVar`, `total_amount`, `$price`
*/

/*
Variable Scopes (block, function, global);

Variable scope defines where a variable can be accessed oe referenced within your code. JavaScript has three main types of variable scopes:
*/

/*
Block Scope: Introduced with `let` and `const`, block scope limits the accessibility of a variable to the block of code in which it is defined. 

A block is denoted by curley braces `{}`. Variables inside a blcok are not accessible outside of that block.

The primary use case for block scopes is to limit the visibility and lifespan of variables. For example, you might want to use temporary variables within a loop or a conditional statement without polluting the outer scope. Additionally, block-scoped variables are automatically garbage collected once the block is executed, helping manage memory efficiently.
*/
if (true) {
  let x = 10 // Block-scoped variable
  console.log(x) // Outputs 10
}
// Uncaught ReferenceError: x is not defined
// console.log(x); // This would result in an error since 'x' is not accessible here.

/*
Function Scope: Introduced with `var`, function scope limits the accessibility of a variable to the function in which it is defined. Variables declared inside a function are not accessible outside of that function.
*/
function greet() {
  var greetingMessage = 'Hello!' // Function-scoped variable
  console.log(greetingMessage)
}

greet() // Outputs 'Hello!'
// Uncaught ReferenceError: greetingMessage is not defined
// console.log(greetingMessage) // This would result in an error since 'greetingMessage' is not accessible here.

/*
Global Scope: Variables declared outside of any block or function have a global scope. They can be accessed anywhere in your code, including within functions.
*/
const globalVar = 'I am global!' // Global variable

function printGlobal() {
  console.log(globalVar) // You can access the global variable inside functions.
}

printGlobal() // Outputs 'I am global!'
console.log(globalVar) // Outputs 'I am global!'
/*
It's generally considered good practice to use block scope (let and const) and avoid using var due to its hoisting behavior, which can sometimes lead to unexpected bugs. Always try to use the narrowest scope possible for your variables to keep your code organized and maintainable.
*/

let result
{
  let x = 10
  const y = 20
  result = x + y
  console.log(result)
}
console.log(result)

{
  let x = 20
  const y = 30
  result = x + y
  console.log(result)
}
console.log(result)
