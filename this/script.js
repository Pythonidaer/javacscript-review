// 'use strict'
/*
`this` allows you to access the object on which a method is called or the context of the function being executed.
- it's behavior varies depending on how and where it's used

Use cases:
*/
// 1. Using `this` in Function Borrinwg:
// - technique where you take a method from one object
// - and use it for another object
// `this` will refer to the object on which the borrowed function is called
const person1 = {
  name: 'Alice',
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}.`)
  },
}

const person2 = {
  name: 'Jonathan',
}

// Borrowing sayHello() from person1 and using it in person2
person2.sayHello = person1.sayHello
person2.sayHello() // Output: Hello, I'm Bob.

// 2. Explicit Binding using `call`, `apply`, and `bind`
// these methods allow you to explicitly set the value of `this` when calling a function
/*
`call`
- immediately invokes the function with the specified `this` value and additional arguments passed individually

`apply`
- works similarly to `call`, but the additional arguments are passed as an array

`bind`
- returns a function with the specified `this` value, which can be invoked later


*/
function sayHello() {
  console.log(`Hello, I'm ${this.name}.`)
}

const person = {
  name: 'Alice',
}

sayHello.call(person) // Output: Hello, I'm Alice.
sayHello.apply(person) // Output: Hello, I'm Alice.
const boundFunction = sayHello.bind(person)
boundFunction() // Output: Hello, I'm Alice.

// 3. Using `this` in a Method
// when `this` is used within an object method
// - it refers to the obejct that owns the method
const person3 = {
  name: 'Dudesicles',
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}.`)
  },
}

person3.sayHello() // Output: Hello, I'm Alice.

// 4. Using `this` in a Function (not a method)
// its value depends on how the function is called
// - if the function called is an object reference
//    - `this` can point to that object
// - if the function is called directly as a standalone
//    - `this` can point to the global object
//       - i.e. `window` in browser, `global` in Node.js
function sayHello() {
  console.log(`Hello, I'm ${this.name}.`)
  console.log(typeof this.name)
  console.log(this)
}

const person4 = {
  name: 'Alice',
}

sayHello.call(person4) // Output: Hello, I'm Alice.
sayHello() // Output: Hello, I'm undefined. (In non-strict mode, "this" is the global object.)

// 5. Using `this` Alone:
// outside of any function or object context
// it will refer to the global object in non-strict mode
// undefined in the strict mode
console.log(this)

// 6. Using `this` in Event Handlers:
// - `this` refers to the DOM element that triggered the event
const button = document.getElementById('myButton')

button.addEventListener('click', function () {
  console.log(this) // Output: <button id="myButton">Click Me</button>
})

// 7. Using `this` in Arrow Functions
// - do not hae their own `this`
// instead, they lexically capture the `this` value
//    - from their surrounding context (enclosing non-arrow)
// This can be useful in avoiding the confusion of `this` changing inside nested functions
const person5 = {
  name: 'Shmalex',
  sayHello: function () {
    // Regular function
    setTimeout(function () {
      console.log(`Hello, I'm ${this.name}.`) // Output: Hello, I'm undefined.
    }, 100)

    // Arrow function
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}.`) // Output: Hello, I'm Shmalex.
    }, 200)
  },
}

person5.sayHello()

const arrayObject = {
  arr: ['a', 'b', 'c'],
  move: [],
  popped: '',
  mover: function () {
    popped = this.arr.pop()
    console.log(this.arr)
    console.log(this.popped)
  },
}

arrayObject.mover()
