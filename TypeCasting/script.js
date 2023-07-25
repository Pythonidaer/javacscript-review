/*
Typecasting, also known as type conversion, is the process of converting a value from one data type to another. This is often necessary when performing operations or assignments that involve different data types. Typecasting allows you to ensure that the data being used is in the correct format for the operation to be carried out successfully.

There are two main types of type conversion:

Implicit Type Casting (Automatic Type Conversion):
Implicit type conversion happens when the compiler or runtime automatically converts data types. JavaScript is loosely typed language and most of the time operators automatically convert a value to the right type. A value of one data type is assigned to a variable of another data type that can accommodate the value without loss of information or precision. In this case, the conversion is done without requiring any explicit instructions from the programmer.
*/
// Implicit Type Casting in JavaScript
let num1 = 10 // integer
let num2 = 3.14 // float

let result = num1 + num2
console.log(result) // Output will be 13.14 (num1 is implicitly converted to a float for the addition)

/*
Explicit Type Casting (Manual Type Conversion):
Explicit type casting, as the name suggests, is done manually by the programmer using special functions or syntax provided by the programming language. It involves converting a value from one data type to another, even if there may be potential loss of information or precision.
Examples of explicit type casting:


*/
// Explicit Type Casting in JavaScript
let floatNumber = 3.14
let intNumber = parseInt(floatNumber) // Convert the float to an integer using parseInt()
console.log(intNumber) // Output will be 3 (decimal part is truncated)

let stringNumber = '42'
let intFromString = parseInt(stringNumber) // Convert the string to an integer using parseInt()
console.log(intFromString) // Output will be 42

let floatFromInt = parseFloat(intNumber) // Convert the integer back to a float using parseFloat()
console.log(floatFromInt) // Output will be 3

/*
Coercion
In this example, coercion happens because JavaScript automatically converts the integer 10 to a float to perform the addition with 3.14. The result is a float due to coercion.

JavaScript, like Python, has similar concepts of implicit and explicit type casting, as well as coercion. The specific functions for explicit type casting might differ between languages, but the underlying concept remains the same.

Coercion is a specific form of implicit type conversion that occurs when the programming language automatically converts one data type to another in certain contexts. This automatic conversion takes place to perform an operation or assignment between two values of different data types. The purpose of coercion is to make the operation possible without throwing an error, even if there might be a loss of precision or information.
*/
// Coercion in JavaScript
let coercionResult = 10 + 3.14
console.log(coercionResult) // Output will be 13.14 (the integer 10 is coerced to a float for the addition)
