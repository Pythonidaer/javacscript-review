/* In JavaScript, data types are used to represent different kinds of values that can be manipulated and stored in variables. */

/* Primitive Data Types */

/*
STRING:
A string is a sequence of characters enclosed within single quotes (''), double quotes (""), or backticks (``). Strings are used to represent textual data. For example:
*/
const firstName = 'John'
const lastName = 'Doe'
const message = `Hello, ${firstName} ${lastName}!`

/*
UNDEFINED:
Undefined is a data type that represents a variable that has been declared but has not been assigned any value. It also indicates the absence of a return value in functions. If you try to access an uninitialized variable, it will be undefined. For example:
*/
let x
console.log(x) // Output: undefined

function sample() {
  let x = 'sample'
  console.log(x)
}
console.log(sample())

/*
NUMBER:
The number data type represents both integer and floating-point numbers. JavaScript uses the `number` type to store numeric values. For example:
*/
const age = 25
const pi = 3.14

/*
BOOLEAN:
The boolean data type represents two values: `true` or `false`. Booleans are used to perform:
- logical operations
- control flow in JavaScript.
For example: 
*/
const isLoggedin = true
const isWorking = false

/*
NULL:
The `null` data type represents an intentional absence of any value. It is used to signify that a variable has no value or that a value is explicitly non-existent. For example:
*/
let undefinedUser
const user = null
if (3 > 4) user = 'Jon'
console.log(undefinedUser, user)

/*
BIGINT:
The `BigInt` data type was introduced in ECMAScript 2020 to represent integers larger than the maximum safe integer value that can be represented by the `number` type. It is created by appending `n` to the end of an integer literal or by using the `BigInt()` constructor. For example:
*/
const largeNumber = 1234567890123456789012345678901234567890n
/*
In JavaScript, the maximum safe integer that can be represented by the number type is 2^53 - 1, which is equal to 9007199254740991.

The number type in JavaScript follows the IEEE 754 double-precision floating-point format, which allows it to represent a wide range of numbers. However, due to the limitations of the floating-point format, it cannot precisely represent integers beyond a certain magnitude.

The maximum safe integer, 9007199254740991, is the largest integer value that can be safely represented without losing precision. If you try to represent an integer larger than this value using the number type, it may lead to rounding errors or loss of precision.

The output is still 9007199254740992, which is incorrect. This demonstrates how the number type loses precision when dealing with integers beyond the maximum safe integer.

const largeNumber = 9007199254740992;
console.log(largeNumber); // Output: 9007199254740992

const largerNumber = 9007199254740992 + 1;
console.log(largerNumber); // Output: 9007199254740992


To work with integers larger than the maximum safe integer without losing precision, you can use the BigInt data type, which was introduced in ECMAScript 2020:

const largeBigInt = 9007199254740992n;
console.log(largeBigInt); // Output: 9007199254740992n

const largerBigInt = 9007199254740992n + 1n;
console.log(largerBigInt); // Output: 9007199254740993n

With BigInt, you can accurately represent integers of any size, but keep in mind that BigInt is a separate data type from number, and you need to use the n suffix to create BigInt literals.
*/

/*
SYMBOL:
The `Symbol` data type was introducd in ECMAScript 2015. A symbol is a unique and immutable data type used as an identifier for object properties. Symbols are often used as keys for object properties to avoid potential name collisions. For example:

Remember that primitive data types in JavaScript are immutable, which means their values cannot be changed after they are created.

The Symbol data type in JavaScript provides several benefits and use cases that make it a valuable addition to the language. Some of the key benefits of using Symbol are:

Unique property keys: Symbols are guaranteed to be unique. This uniqueness makes them ideal for use as property keys in objects, especially when you want to create non-enumerable properties or avoid potential name collisions. Since symbols are unique, they won't conflict with other property names, even if the same symbol is used as a key in different objects.

Private properties and methods: Symbols can be used to create private properties and methods in classes or objects. Since symbols are not accessible using the dot notation or brackets, they are hidden from unintended access. This helps encapsulate internal implementation details and prevents accidental manipulation of private members.

Avoiding name conflicts in libraries: Symbols can be used by libraries and frameworks to define their own methods or properties without the risk of conflicting with properties or methods defined in the user's code. This helps ensure better modularity and encapsulation.

Symbol registry: JavaScript also provides a global symbol registry using Symbol.for() and Symbol.keyFor(). These methods allow you to share symbols across different parts of your application, even in different realms like iframes or workers. This enables easy inter-process communication using shared symbols.

It's important to note that symbols are not enumerable by default, which means they won't be iterated over in loops like for...in or Object.keys(). This further aids in creating non-enumerable properties for internal use.

Overall, the Symbol data type enhances the capabilities of JavaScript, providing a powerful and unique way to create and work with properties, methods, and keys with specific, non-conflicting identities. It's particularly useful for scenarios where unique and hidden identifiers are required to ensure proper encapsulation and avoid naming collisions.
*/
const sym = Symbol('description')
const test = Symbol('description')
const obj = {
  [sym]: 'This is a symbol property',
}
console.log(obj)
