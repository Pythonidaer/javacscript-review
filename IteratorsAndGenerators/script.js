/*
In JavaScript, iterators and generators are features that allow you to work with collections of data in a more flexible and convenient way.
- provide a mechanism for iterating over items in a collection and can be used in loops or other constructs to process data more efficiently.
*/

/*
ITERATORS:
An iterator is an object that provides a way to access elements one by one from a collection (e.g., arrays, sets, maps) in a sequential manner. It follows a specific protocol where it must have a method called next() that returns an object with two properties: value (the current element in the iteration) and done (a boolean indicating if the iteration is complete).

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(element)
}

const iterator = arr[Symbol.iterator]() // Obtain the iterator from the array
console.log(iterator)

let result = iterator.next() // { value: 1, done: false }
while (!result.done) {
    console.log(result.value)
    result = iterator.next()
}
*/

/*
GENERATORS:
Generators are special functions in JavaScript that allow you to define an iterative algorithm in a more concise and readable way. They use the function* syntax to create a generator function. Inside a generator function, you use the yield keyword to produce a sequence of values during the iteration.
Here's an example of a generator function that generates a sequence of numbers from 1 to n:

Generators are particularly useful when dealing with large datasets or infinite sequences, as they allow you to produce values on-the-fly without generating the entire sequence in memory.
*/
function* numberSequence(n) {
  for (let i = 1; i <= n; i++) {
    yield i
  }
}

const iterator = numberSequence(5)

let result = iterator.next() // { value: 1, done: false }
while (!result.done) {
  console.log(result.value)
  result = iterator.next()
}

function* numberSequence(n) {
  for (let i = 1; i <= n; i++) {
    yield i
  }
}

for (const num of numberSequence(5)) {
  console.log(num)
}

/*
ITERABLES IN JAVASCRIPT:
In JavaScript, an iterable is an object that implements the iterable protocol, meaning it has a method with the key Symbol.iterator. When called, this method returns an iterator object that provides a way to access its elements one by one. Here are some common iterable objects/items in JavaScript:

Arrays: Arrays are one of the most common iterable objects in JavaScript. They store a collection of elements and can be iterated over using for...of loops or by manually obtaining the iterator using the Symbol.iterator method.

Strings: Strings are iterable in JavaScript. They can be treated as a sequence of characters and iterated over using for...of loops or by obtaining the iterator with Symbol.iterator.

Maps: Maps are key-value pairs in JavaScript. They implement the iterable protocol, and when iterated over, they provide an array of [key, value] pairs.

Sets: Sets are collections of unique elements and are iterable as well. They allow you to iterate over their values.

Typed Arrays: Typed arrays, such as Int8Array, Float64Array, etc., are also iterable objects. They represent arrays of specific numeric types and can be iterated over.

NodeList: NodeList is a collection of DOM elements returned by various DOM methods like querySelectorAll(). It is iterable and can be looped over using for...of loops.

Arguments object: The arguments object inside a function is an array-like object containing the arguments passed to the function. It is iterable, but it is not a real array, so some array methods may not work directly on it.

Generator Objects: Generator objects are returned by generator functions. They implement the iterable protocol and can be iterated over using for...of loops or by manually obtaining the iterator.

Typed Arrays: Typed arrays, like Int8Array, Uint16Array, etc., are also iterable objects representing arrays of specific numeric types.

Remember that in modern JavaScript, for...of loops are often used to iterate over iterable objects, as they provide a more convenient and readable way to work with sequences of data.
*/
