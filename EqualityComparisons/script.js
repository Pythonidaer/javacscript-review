/*
Value Comparison Operators:
`==` (Loose Equality)
- compares two values after performing type coercion
- attempts to convert oeprands to a common type before making the comparison
- if operands have different data types, JavaScript will try to convert one or both values to a common type and then check if they are both equal
*/
console.log(5 == '5') // Output: true
console.log(null == undefined) // Output: true
console.log(1 == true) // Output: true
// `==` can lead to unexpected results due to type coercion
// generally recommended to use `===` to avoid potential issues
/*
`===` (Strict Equality)
- compares two values for equality without performing type coercion
- checks both the value and the data type of the operands
*/
console.log(5 === '5') // Output: false
console.log(null === undefined) // Output: false
console.log(1 === true) // Output: false
/*
`Object.is()`
- method is used to compare values in a more precise manner
- behaves similarly to `===`, but with a few differences
  - considers `-0` and `+0` as not equal
  - considers `NaN` values as equal
*/
console.log(Object.is(0, -0)) // Output: false
console.log(Object.is(NaN, NaN)) // Output: true
/*
Equality Algorithms:
isLooselyEqual: This is not a built-in function, but rather a concept referring to using the loose equality operator == for value comparison. As mentioned earlier, it performs type coercion before making the comparison.

isStrictlyEqual: This is also not a specific function but refers to using the strict equality operator === for value comparison. It compares both the value and the data type without performing type coercion.

SameValueZero: This is an algorithm used for comparing two values that considers +0 and -0 as equal and treats NaN as equal to itself. This algorithm is similar to Object.is() in terms of comparing values.

SameValue: This algorithm is similar to SameValueZero, but it treats all NaN values as distinct, meaning it does not consider two NaN values as equal.
*/
