/*
KEYED COLLECTIONS
Map: 
The Map object in JavaScript is a collection of key-value pairs where keys and values can be of any data type. 
   -Unlike regular objects, Map allows any value as a key, not just strings or symbols. 
   -It maintains the order of insertion, making it suitable for scenarios where the order of items matters. 

Some key methods and properties of Map include:
    -set(key, value): Adds a new key-value pair to the map.
    -get(key): Retrieves the value associated with the given key.
    -has(key): Checks if the specified key exists in the map.
    -delete(key): Removes the entry with the given key from the map.
    size: Returns the number of key-value pairs in the map.

WeakMap: 
WeakMap is similar to Map, but with some differences. 
    - The keys in a WeakMap must be objects, and they are weakly held, meaning they won't prevent garbage collection if there are no other references to the keys. 
    - This makes WeakMap useful for scenarios where you want to associate data with objects without preventing those objects from being garbage collected.

Set: 
The Set object is a collection of unique values of any data type. It doesn't allow duplicates, so each value can appear only once in the set. Set provides methods for adding, deleting, and checking the existence of values. Some key methods and properties of Set include:
    -add(value): Adds a new value to the set.
    -delete(value): Removes the specified value from the set.
    -has(value): Checks if the given value exists in the set.
    -size: Returns the number of elements in the set.

WeakSet: 
WeakSet is similar to Set, but it can only store object references, and they are also weakly held. Like WeakMap, this allows objects stored in a WeakSet to be garbage collected if there are no other references to them.
*/

/*
Structured Data:
JSON (JavaScript Object Notation): JSON is a lightweight data interchange format. It's widely used for transmitting data between a server and a web application as an alternative to XML. JSON data consists of key-value pairs similar to JavaScript objects. It is human-readable and easy for both humans and machines to parse and generate. JSON values can be strings, numbers, objects, arrays, booleans, or null.
*/

/*
Indexed Collections:
    -Arrays: Arrays are ordered, numerically indexed collections of elements. In JavaScript, arrays can contain elements of different data types, and the index starts from 0. Arrays are commonly used for storing and manipulating lists of items. They offer various built-in methods for manipulation, such as push, pop, shift, unshift, splice, and more.

    -Typed Arrays: Typed Arrays are arrays with elements that have a specific binary data type, such as Int8Array, Uint8Array, Float32Array, and others. They are useful when you need to work with binary data or perform low-level operations with binary representations.
*/
// MAP
// Creating a new Map
let myMap = new Map()

// Adding key-value pairs to the Map
myMap.set('name', 'John')
myMap.set('age', 30)
myMap.set('isStudent', true)

// Retrieving values from the Map
console.log(myMap.get('name')) // Output: "John"
console.log(myMap.get('age')) // Output: 30

// Checking if a key exists in the Map
console.log(myMap.has('isStudent')) // Output: true

// Deleting a key-value pair from the Map
myMap.delete('age')

// Getting the size of the Map
console.log(myMap.size) // Output: 2

// WEAKMAP
// Creating a new WeakMap
let weakMap = new WeakMap()

// Creating some objects
let obj1 = {}
let obj2 = {}

// Adding key-value pairs to the WeakMap
weakMap.set(obj1, 'Hello')
weakMap.set(obj2, 'World')

// Retrieving values from the WeakMap
console.log(weakMap.get(obj1)) // Output: "Hello"
console.log(weakMap.get(obj2)) // Output: "World"

// Note: Since there are no other references to obj1 and obj2,
// they can be garbage collected, and the WeakMap will no longer
// have these entries.
console.log(weakMap)

// SET
// Creating a new Set
let mySet = new Set()

// Adding elements to the Set
mySet.add(10)
mySet.add('Hello')
mySet.add(true)

// Checking if an element exists in the Set
console.log(mySet.has('Hello')) // Output: true

// Deleting an element from the Set
mySet.delete(10)

// Getting the size of the Set
console.log(mySet.size) // Output: 2

// WEAKSET
// Creating a new WeakSet
let weakSet = new WeakSet()

// Creating some objects
let obj3 = {}
let obj4 = {}

// Adding objects to the WeakSet
weakSet.add(obj3)
weakSet.add(obj4)

// Note: Since there are no other references to obj1 and obj2,
// they can be garbage collected, and the WeakSet will no longer
// have these objects as elements.

// JSON
// JSON data representing a person
let personJSON = '{"name": "Alice", "age": 25, "isStudent": false}'
console.log(typeof personJSON)

// Parsing JSON data into a JavaScript object
let person = JSON.parse(personJSON)
console.log(typeof person)

// Accessing properties of the JavaScript object
console.log(person.name) // Output: "Alice"
console.log(person.age) // Output: 25
console.log(person.isStudent) // Output: false

// Converting a JavaScript object back to JSON
let updatedPersonJSON = JSON.stringify(person)
console.log(typeof updatedPersonJSON)
console.log(updatedPersonJSON) // Output: '{"name":"Alice","age":25,"isStudent":false}'

// ARRAYS
// Creating a new array
let myArray = [1, 2, 3, 'Hello', true]

// Accessing elements by index
console.log(myArray[0]) // Output: 1
console.log(myArray[3]) // Output: "Hello"

// Adding elements to the end of the array
myArray.push(4)
console.log(myArray) // Output: [1, 2, 3, "Hello", true, 4]

// Removing the last element from the array
myArray.pop()
console.log(myArray) // Output: [1, 2, 3, "Hello", true]

// Adding elements to the beginning of the array
myArray.unshift(0)
console.log(myArray) // Output: [0, 1, 2, 3, "Hello", true]

// Removing the first element from the array
myArray.shift()
console.log(myArray) // Output: [1, 2, 3, "Hello", true]

// TYPED ARRAYS
// Creating a new Int8Array with 4 elements
let int8Array = new Int8Array([10, 20, 30, 40])

// Accessing elements by index
console.log(int8Array[0]) // Output: 10
console.log(int8Array[3]) // Output: 40

// Modifying elements in the Typed Array
int8Array[1] = 25
console.log(int8Array) // Output: Int8Array [10, 25, 30, 40]
