// OPERATORS

/* Assignment
- used to assign values to variables
- combine the assignment operator with other arithmetic or bitwise operators to perform an operation and store the result in a variable
*/
let x = 10 // Simple assignment: assigns the value 10 to the variable x
console.log(x)
x += 5 // Same as x = x + 5 (adds 5 to the current value of x and assigns the result back to x)
console.log(x)
x -= 3 // Same as x = x - 3 (subtracts 3 from the current value of x and assigns the result back to x)
console.log(x)
x *= 2 // Same as x = x * 2 (multiplies the current value of x by 2 and assigns the result back to x)
console.log(x)
x /= 4 // Same as x = x / 4 (divides the current value of x by 4 and assigns the result back to x)
console.log(x)
x %= 3 // Same as x = x % 3 (assigns the remainder of dividing the current value of x by 3 back to x)
console.log(x)

/* Comparison
- used to compare two values and return a Boolean result
- indicates whether the value is true or false
*/
let a = 10
let b = 5
console.log(a === b) // Strict equality (false): checks if a is equal to b and also of the same type
console.log(a !== b) // Strict inequality (true): checks if a is not equal to b or of a different type
console.log(a > b) // Greater than (true): checks if a is greater than b
console.log(a < b) // Less than (false): checks if a is less than b
console.log(a >= b) // Greater than or equal to (true): checks if a is greater than or equal to b
console.log(a <= b) // Less than or equal to (false): checks if a is less than or equal to b

/* Arithmetic
- used to perform basic mathematical operations on numeric values
*/
let y = 10
let z = 3
console.log(y + z) // Addition (13): adds y and z
console.log(y - z) // Subtraction (7): subtracts y from z
console.log(y * z) // Multiplication (30): multiplies y by z
console.log(y / z) // Division (3.333...): divides y by z
console.log(y % z) // Modulus (1): returns the remainder of y divided by z
console.log(++y) // Increment (11): increases the value of y by 1 and returns the new value
console.log(--y) // Decrement (9): decreases the value of y by 1 and returns the new value

/* Bitwise
- used to perform operations on individual bits of numeric values
- treat their operands as a sequence of 32 bits
*/
let c = 5 // Binary: 00000000000000000000000000000101
let d = 3 // Binary: 00000000000000000000000000000011
console.log(`---`)
console.log(c & d) // Bitwise AND (1): performs a bitwise AND operation
console.log(c | d) // Bitwise OR (7): performs a bitwise OR operation
console.log(c ^ d) // Bitwise XOR (6): performs a bitwise XOR operation
console.log(~c) // Bitwise NOT (-6): inverts the bits of c
console.log(c << 1) // Left shift (10): shifts the bits of c to the left by 1 position
console.log(c >> 1) // Right shift (2): shifts the bits of c to the right by 1 position
console.log(c >>> 1) // Unsigned right shift (2): shifts the bits of c to the right by 1 position, filling with 0

/* Logical - what others are there?
- used to perform logical operations and return Boolean values
*/
a = true
b = false
console.log(a && b) // Logical AND (false): returns true if both a and b are true
console.log(a || b) // Logical OR (true): returns true if either a or b (or both) are true
a = null
b = 10
let result1 = a ?? 5 // 5, since a is null, it returns the right-hand operand (5)
let result2 = b ?? 5 // 10, since b is not null, it returns the value of the left-hand operand (10)
console.log(result1, result2)
console.log(!a) // Logical NOT (false): inverts the value of a

/* BigInt
- newer data type in JavaScript
- allows you to work with integers of arbitrary precision
- BigInt operators are similar to regular arithmetic operators
   - but are used specifically for BigInt values
*/
let bigIntValue1 = 123456789n
let bigIntValue2 = 987654321n

console.log(bigIntValue1 + bigIntValue2) // BigInt Addition
console.log(bigIntValue1 - bigIntValue2) // BigInt Subtraction
console.log(bigIntValue1 * bigIntValue2) // BigInt Multiplication
console.log(bigIntValue1 / bigIntValue2) // BigInt Division
console.log(bigIntValue1 % bigIntValue2) // BigInt Modulus

/* String
- used to concatenate (combine) strings or perform operations involving strings
*/
let firstName = 'John'
let lastName = 'Doe'
console.log(firstName + ' ' + lastName) // String concatenation ("John Doe")
console.log('Hello, ' + firstName) // Concatenating with a string ("Hello, John")
console.log(firstName.length) // String length (4)

/* Conditional
- ternary operator
- shorthand way to write an if-else statement in a single line
- takes three operands:
   - a condition, a value if the condition is true, and a value if the condition is false
*/
let age = 20
let message = age >= 18 ? 'You are an adult' : 'You are a minor'
console.log(message) // "You are an adult"

/* Comma
- allows you to evaluate multiple expressions 
   - and return the value of the last expression*/
let q = 1,
  r = 2,
  s = 3
console.log(q, r, s) // Output: 1 2 3

/* Unary
- applied to a single operand and perform various operations, such as negation, type conversion, and more
*/
let num = 5
console.log(-num) // Unary negation (-5)
console.log(+num) // Unary plus (5)
console.log(!true) // Logical NOT (false)
console.log(typeof num) // Typeof operator ("number")

/* Relational
- used to compare two values and return a Boolean result
*/
/*
?. (Optional Chaining Operator):
The ?. operator, also known as the optional chaining operator, allows you to safely access nested properties or methods of an object without causing an error if any intermediate property is null or undefined. It is especially useful when dealing with complex data structures or API responses.
Examples: */
const person = {
  name: 'John',
  address: {
    city: 'New York',
    zipcode: 10001,
  },
}

// Without optional chaining:
let city1 = person.address.city // "New York"
let street1 = person.address.street // TypeError: Cannot read property 'street' of undefined
console.log(city1, street1)

// With optional chaining:
let city2 = person.address?.city // "New York"
let street2 = person.address?.street // undefined (no error thrown)
console.log(city2, street2)
/*
The ?. operator essentially checks if the property before it is null or undefined before attempting to access the property or method after it. If the property is null or undefined, the expression short-circuits and returns undefined, avoiding any errors that would occur otherwise.

These operators enhance the capabilities of JavaScript and provide more concise and safe ways to work with values that might be null, undefined, or truthy/falsy. They are especially beneficial in modern JavaScript development, making code more readable and robust.
*/
