// LOOPS AND ITERATIONS
/*
1. `for` statement
- used to execute a block of code repeatedly for a fixed number of times. It consists of three parts: initialization, condition, and iteration
*/
for (let i = 0; i < 5; i++) {
  console.log(i)
}
/*
2. `do...while` statement
- executes the block of code at least once before checking the condition.
- if the condition is true, the loop continues to execute
*/
let i = 0
do {
  console.log(i * 15)
  i++
} while (i < 5)
/*
3. `while` statement
- executes the block of code only if he given condition is true
*/
let j = 0
while (j < 5) {
  console.log(j)
  j++
}
/*
4. `for...in` statement
- iterates over the properties of an object
- it is not recommended to use this loop for arrays, as it can behave unexpectedly in some situations
*/
const person = { name: 'John', age: 30, occupation: 'Engineer' }
for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`)
}
/*
5. `for...of` statement
- iterates over the iterable objects like arrays, strings, maps, sets, etc.
*/
const colors = ['red', 'green', 'blue']
for (let color of colors) {
  console.log(color)
}
/* 
6. `break / continue`
`break` is used to terminate a loop early
`continue` is used to skip the current iteration and proceed with the next one
*/
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue // Skips the iteration when i is 1
  }
  if (i === 2) {
    break // Terminates the loop when i is 2
  }
  console.log(i)
}
/*
LABELED STATEMENTS
- allow you to associate a label with a loop
- this label can be used with `break` and `conintue` to control the flow of nested loops
*/
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop // Breaking out of both loops
    }
    console.log(`i: ${i}, j: ${j}`)
  }
}

// 8.

// CONTROL FLOW
// 1. CONDITIONAL STATEMENTS
/*
a. `if...else`
- statement that executes a block of coe if the given condition is true
- otherwise, it executes the code inside the `else` block
*/
const age = 25
if (age >= 18) {
  console.log('You are an adult.')
} else {
  console.log('You are a minor.')
}
/*
b. `switch`
- statement that is used to perform different actions
- based on different conditions
 */
const day = 'Wednesday'
switch (day) {
  case 'Monday':
    console.log("It's Monday.")
    break
  case 'Tuesday':
    console.log("It's Tuesday.")
    break
  default:
    console.log("It's some other day.")
}

// 2. EXCEPTION HANDLING
/*
a. `throw` statement
- allows you to create custom errors or exceptions when a specific condition is met
*/
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.')
  }
  return a / b
}
try {
  const result = divide(10, 0)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
/*
b. `try / catch / finally`
- block that contains the code that might throw an exception
- if exception is thrown, it's caught by the `catch` block
   - where you can handle the error
- `finally` block, if present, will execute regardless of whether an exception occurred or not
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero!')
  }
  return a / b
}
try {
  const result = divide(10, 2)
  console.log(result)
} catch (error) {
  console.error(error.message)
} finally {
  console.log('Division operation complete.')
}
/*
UTILIZING ERROR OBJECTS
c. You can use built-in error objects or create custom ones using the `Error` constructor
 */
class JonathanError extends Error {
  constructor(message) {
    super(message)
    this.name = 'JonathanError'
  }
}

function divideTest(a, b) {
  if (b === 0) {
    throw new JonathanError('Stop being unemployed')
  }
  return a / b
}

try {
  const result = divideTest(10, 0)
  console.log(result)
} catch (error) {
  console.error(error)
} finally {
  console.log('Division operation complete.')
}
