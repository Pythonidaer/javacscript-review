/*
In JavaScript, Classes are a fundamental part of modern OOP.
- provide a blueprint for creating objects with shared properties and methods.
- introduced in ES6
- offer a more structured and familiar syntax for devs coming from traditional class-based languages

Class declarations:
- to create a class in JS, used the `class` keyword
- followd by the class name
- Inside of it, define properties and methods
*/
class Person {
  // special method called
  // when an object is instantiated from the class
  // allows you to set initial values to object properties
  constructor(name, age) {
    // properties represent characteristics
    // or data of objects created from the class
    // they are assigned using the `this` keyword
    //  - written within the constructor
    this.name = name
    this.age = age
  }

  // methods are functions defined within the class
  //    and can be called on objects created from the class
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }
}

// Instantiation
// to create objects (instances) from the class
//  you can use the `new` keyword followed by the class name
//   and any necessary constructor arguments
const jonathan = new Person('Jonathan', 32)
jonathan.sayHello()

// Inheritance
// - classes support inheritance
//  - allowing you to create a new class based on an existing one
//  `extends` keyword is used to create a subclass
//  - that inherits the properties and methods from the parent class
class Developer extends Person {
  constructor(name, age, skills) {
    // call the constructor of the parent class
    super(name, age)
    this.skills = skills
  }

  actions() {
    console.log(`${this.name} knows the following skills: ${this.skills}.`)
  }
}

const jonathanDeveloper = new Developer('Jonathan', 32, [
  'HTML',
  'CSS',
  'JavaScript',
])
jonathanDeveloper.sayHello()
jonathanDeveloper.actions()

/*
STATIC METHODS:
- belong to the class itself and not to the instances of the class
- defined using the `static` keyword
- are called directly on the class, not on objects

Static methods are associated with the class itself rather than instances of the class, and they can be used for utility functions or operations that don't require any speciic instance data.
- these methods can be accessed directly on the class without the need for creating an instance
*/

/*
Object-Free: If you only need utility functions and don't require any state or instance-specific data, a class of static methods can be more suitable than creating objects.
*/
class MathUtils {
  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }
}
// classes in JavaScript simplify and improve code organization
// making it easier to create and maintain complex applications
// an essential tool for building OO-solutions in the language
console.log(MathUtils.add(5, 3)) // Output: 8
console.log(MathUtils.subtract(10, 2)) // Output: 8

/*
const MathUtils = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
};

console.log(MathUtils.add(5, 3));         // Output: 8
console.log(MathUtils.subtract(10, 2));   // Output: 8
console.log(MathUtils.multiply(4, 5));    // Output: 20
console.log(MathUtils.divide(10, 2));     // Output: 5

*/
