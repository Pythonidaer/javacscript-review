console.log('test')
/* OBJECT
Objects are composite data types that can hold multiple key-value pairs, where each key is a unique string (or symbol) that acts as an identifier, and each value can be of any data type, including other objects.
Objects are used to represent complex data structures and are fundamental in JavaScript programming.
Objects are defined using curly braces `{}` and can be assigned to variables. Each key-value pair in an object is separated by a colon `:` and multiple pairs are separated by commas. Here's an example of creating an object.
Non-primitve data types like objects are mutable, which means you can modify their values even after creation.
*/
const me = {
  // properties
  name: 'Jonathan',
  age: 32,
  isStudent: true,
  // embedded object
  address: {
    city: 'Salem',
    state: 'Massachusetts',
  },
}
/*
To access the values of an object, you can use dot notation or square brackets:
*/
console.log(me.name) // Output: 'Jonathan'
console.log(me['age']) // Output: 32
console.log(me.address.city) // Output: 'Salem'

/* typeof operator
The `typeof` operator in JavaScript is used to determine the data type of a given variable or expression. It returns a string representing the type of the operand.
*/
console.log(`-------`) // Output: 'number'

const age = 25
console.log(typeof age) // Output: 'number'

const name = 'John'
console.log(typeof name) // Output: 'string'

const person = { name: 'John', age: 30 }
console.log(typeof person) // Output: 'object'

const isValid = true
console.log(typeof isValid) // Output: 'boolean'

const func = function () {}
console.log(typeof func) // Output: 'function'

const numArray = [1, 2, 3]
console.log(typeof numArray) // Output: 'object'

console.log(typeof undefinedVariable) // Output: 'undefined'

// historical bug
const nullObject = null
console.log(typeof nullObject) // Output: 'object'

/* BUILT-IN OBJECTS
There are several built-in objects that provide various functionalities and utility methods. These objects are part of the core language and do not require any additional libraries or imports.

Some commonly used built-in objects include:
`Math`: Provides mathematical constants and functions.
`Date`: Used to work with dates and times.
`Array`: Used to work with arrays and provides methods like push, pop, forEach, etc.
`String`: Used to work with strings and provides methods like charAt, length, toUpperCase, etc.
`Number`: Used to work with numbers and provides methods like toFixed, toPrecision, etc.
`RegExp`: Used for working with regular expressions.
`JSON`: Used for parsing and stringifying JSON data.
*/
// There are more than this
const objects = {
  Math, // provides mathematical constants and functions, like trigonometric, logarithmic, and rounding operations.
  Date, // provides methods for getting and setting various date components.
  Array, // provides methods for adding, removing, and iterating over elements in an array.
  String, // provides methods for string manipulation, searching, and parsing.
  Number, // provides methods for numeric manipulation and conversion.
  RegExp, // used for working with regular expressions, which are patterns used to match character combinations in strings.
  JSON, // provides methods for parsing JSON strings into JavaScript objects (JSON.parse()) and converting JavaScript objects into JSON strings (JSON.stringify()).
  Error, // used to create error instances that can be thrown using the throw statement. It provides properties like name and message for error information.
  Function, // provides methods for function manipulation.
  Boolean, // used to perform logical operations and control flow in JavaScript. For example:
  Object, // serves as the base object for all other objects in JavaScript. It provides methods for object manipulation, property access, and iteration.
  Symbol, // used to create unique and immutable identifiers for object properties. It can be used to avoid property name collisions and create private properties or methods.
  Map, // used to store key-value pairs, where both keys and values can be of any data type. It allows for easy insertion, deletion, and retrieval of elements based on keys.
  Set, // used to store unique values, meaning each value can only occur once in the set. It allows for efficient checks for existence and adding/removing elements.
  Promise, // used for asynchronous operations and represents a value that might not be available yet. Promises allow you to handle asynchronous operations using then and catch methods.
  Proxy, // used to create a proxy for another object, allowing custom behavior when accessing or manipulating the properties of the target object.
  Reflect, //  provides methods that mirror the behavior of object operations, like Reflect.get, Reflect.set, Reflect.has, etc. It allows for a more programmatic and consistent way of working with object operations.
  Intl, //  provides internationalization features, such as date, time, and number formatting, based on different locales and languages.
  DataView, // used to read and write multiple numeric data types in binary data. It provides methods to access and modify raw binary data in a specified format.
}
console.log(objects)
// Example of using the `Date` object
const currentDate = new Date()
console.log(currentDate) // Output: Sun Jul 17 2023 11:25:33 GMT+0000 (Coordinated Universal Time)

const year = currentDate.getFullYear()
console.log(year) // Output: 2023
/*
When you use the new keyword with a function, it performs the following steps:

Creates a new empty object.
Sets the newly created object's internal [[Prototype]] (also known as __proto__) property to the prototype property of the constructor function.
Calls the constructor function with the newly created object as the this context.
If the constructor function does not explicitly return an object, the new expression will return the newly created object.

It's important to note that using the new keyword is crucial when creating instances of constructor functions. If you forget to use new, the function will execute in the context of the current scope, which could lead to unintended behavior or errors.
*/

/*
BUILT IN OBJECTS
Built-in objects in JavaScript that are not constructor functions are referred to as "singleton objects" or "static objects." These objects are pre-defined by the JavaScript runtime environment and are accessible directly without the need for instantiation.

Unlike constructor functions, which are used to create instances of objects using the new keyword, singleton objects are not intended to be instantiated. Instead, they serve as namespaces or containers for related methods and properties that provide utility functionalities or access to specific features of the JavaScript language or the runtime environment.
*/

/*
here's an exhaustive list of constructor functions and singleton objects in JavaScript based on built-in objects:

Constructor Functions (Intended for instantiation using the new keyword):

Object
Array
String
Number
Boolean
Date
Function
RegExp
Error
Singleton Objects (Not intended for instantiation, accessed directly):

Math
JSON
Symbol
Reflect
Intl
Atomics
SharedArrayBuffer
ArrayBuffer
Promise
Proxy
Map
Set
WeakMap
WeakSet
Math
console
Infinity
NaN
undefined
null
*/

/* OBJECT PROTOTYPE
Every object is linked to a prototype object from which it can inherit properties and methods.
The prototype is an object that is associated with a constructor function and acts as a template for creating new objects.

When you access a property or method on an object, JavaScript first looks for that property/method on the object itself. If it doesn't find it, it then looks at the object's prototype and continues up the prototype chain until the property/method is found or until the top-level object is reached (which is the Object.prototype).


Certainly! Let's start by explaining the non-primitive data type "Object" in JavaScript.

Non-Primitive JavaScript Data Type:

Object:
In JavaScript, objects are composite data types that can hold multiple key-value pairs, where each key is a unique string (or symbol) that acts as an identifier, and each value can be of any data type, including other objects. Objects are used to represent complex data structures and are fundamental in JavaScript programming.
Objects are defined using curly braces {} and can be assigned to variables. Each key-value pair in an object is separated by a colon : and multiple pairs are separated by commas. Here's an example of creating an object:

javascript
Copy code
const person = {
  name: 'John',
  age: 30,
  isStudent: false,
  address: {
    city: 'New York',
    country: 'USA'
  }
};
In this example, we have an object named person with properties like name, age, isStudent, and an embedded object address.

To access the values of an object, you can use dot notation or square brackets:

javascript
Copy code
console.log(person.name); // Output: 'John'
console.log(person['age']); // Output: 30
console.log(person.address.city); // Output: 'New York'
Non-primitive data types like objects are mutable, which means you can modify their values even after creation.

Next, let's dive into the topics you requested in great detail:

typeof Operator:
The typeof operator in JavaScript is used to determine the data type of a given variable or expression. It returns a string representing the type of the operand. The syntax is as follows:
javascript
Copy code
typeof operand
Here, operand can be a variable, constant, or any expression. The typeof operator will return a string that represents the data type of the operand.

Examples:

javascript
Copy code
const age = 25;
console.log(typeof age); // Output: 'number'

const name = 'John';
console.log(typeof name); // Output: 'string'

const person = { name: 'John', age: 30 };
console.log(typeof person); // Output: 'object'

const isValid = true;
console.log(typeof isValid); // Output: 'boolean'

const func = function() {};
console.log(typeof func); // Output: 'function'

const numArray = [1, 2, 3];
console.log(typeof numArray); // Output: 'object'

console.log(typeof undefinedVariable); // Output: 'undefined'
Note that typeof null returns 'object', which is considered a historical bug in JavaScript.

Built-in Objects:
In JavaScript, there are several built-in objects that provide various functionalities and utility methods. These objects are part of the core language and do not require any additional libraries or imports.
Some commonly used built-in objects include:

Math: Provides mathematical constants and functions.
Date: Used to work with dates and times.
Array: Used to work with arrays and provides methods like push, pop, forEach, etc.
String: Used to work with strings and provides methods like charAt, length, toUpperCase, etc.
Number: Used to work with numbers and provides methods like toFixed, toPrecision, etc.
RegExp: Used for working with regular expressions.
JSON: Used for parsing and stringifying JSON data.
Example of using the Math object:

javascript
Copy code
const radius = 5;
const circumference = 2 * Math.PI * radius;
console.log(circumference); // Output: 31.41592653589793
Example of using the Date object:

javascript
Copy code
const currentDate = new Date();
console.log(currentDate); // Output: Sun Jul 17 2023 11:25:33 GMT+0000 (Coordinated Universal Time)

const year = currentDate.getFullYear();
console.log(year); // Output: 2023
Object Prototype:
In JavaScript, every object is linked to a prototype object from which it can inherit properties and methods. The prototype is an object that is associated with a constructor function and acts as a template for creating new objects.
When you access a property or method on an object, JavaScript first looks for that property/method on the object itself. If it doesn't find it, it then looks at the object's prototype and continues up the prototype chain until the property/method is found or until the top-level object is reached (which is the Object.prototype).

You can access the prototype of an object using the Object.getPrototypeOf() method or using the .__proto__ property (though it's generally recommended to avoid using .__proto__ directly):
*/
// const person = { name: 'John', age: 30 }
// console.log(Object.getPrototypeOf(person)) // Output: {}
// console.log(person.__proto__) // Output: {}
// Object.getPrototypeOf(Array())

/* PROTOTYPAL INHERITANCE
Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. When an object is created, it inherits properties and methods from its prototype, and this process continues up the prototype chain.

When you access a property or method on an object, and the object itself does not have that property or method, JavaScript looks at its prototype, and if the prototype doesn't have it either, it goes up the prototype chain until it finds the property/method or reaches the top-level Object.prototype.

Example of Prototypal Inheritance:
*/
// Base object constructor function
function Person(name, age) {
  this.name = name
  this.age = age
}

// Adding a method to the prototype of Person
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}

// Creating an instance of Person
const john = new Person('John', 30)

// Using the sayHello method inherited from the prototype
john.sayHello() // Output: "Hello, my name is John and I am 30 years old."

function Beverage(name, price) {
  this.name = name
  this.price = price
}

Beverage.prototype.listOption = function () {
  console.log(
    `Greetings! our most popular beverage is the ${this.name}. The price is $${this.price}.`
  )
}

const coffee = new Beverage('Macchiato', 7.55)
coffee.listOption()

/*
Built-in objects in JavaScript that don't have prototype objects are often referred to as singleton objects, and built-in objects that have prototype objects are typically constructor functions. However, there are some exceptions and nuances to consider.
*/
