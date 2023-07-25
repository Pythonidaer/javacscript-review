/*
Asynchronous JavaScirpt:
- because some tasks take time tocomplete
   - like fetching data from a server or reading a file
- to avoid blocking the execution of other tasks
   - JavaScript uses asynchronous programming

Asynchronous operations allow certain tasks to be executed independently
- their results are handled later when they're ready
- this way, other parts of the code can continue running without waiting for the asynchronous task to complete

JavaScript has always been capable of handling asynchronous operations since its early versions.

In ES1, JS provided basic support for async behavior through the use of timers with:
`setTimeout` and `setInterval`

- These functions allowed developers to schedule the execution of functions after a specified delay or at fixed intervals
*/

// Async operations were not as prevalent back in 1997 as they are today, so the support for handling async tasks was limited.
function delayedLog() {
  console.log(
    'This message will be logged after 2000 milliseconds (2 seconds).'
  )
}

setTimeout(delayedLog, 2000)

/*
In ES6 (ES2015), Promises were introduced, which provided a more structured and elegant way of handling asynchronous tasks.
- made it easier to chain multiple asynchronous operations and handle errors in a cleaner manner.

In ES8, async/await was introduced, which is syntactic sugar built on top of Promises. 
- simplified writing of asynchronous code, making it resemble synchronous code, and gained significant developers

*/

/*
Callbacks:
- functions passed as arguments to other functions
- commonly used in asynchronous JavaScript to handle the results of asynchronous operations
- when the asynchronous operation is complete, the callback function is called with the result
*/
function fetchDataFromServer(callback) {
  // Simulating an asynchronous operation with setTimeout
  setTimeout(() => {
    const data = { name: 'Jonathan', age: 32 }
    callback(data)
  }, 3000)
}

function displayData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`)
}

fetchDataFromServer(displayData)

/*
Promises are a way to handle asynchronous operations in a more structured and less nested manner. 
- an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

A Promise can have three states:
1. Pending: The initial state, before the operation is completed or failed
2. Fulfilled: The operation is completed successfully, and the promise has a resulting value.
3. Rejected: the operation failed, and the promise has ar eason for the failure.
*/
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
      const data = { name: 'Jane', age: 25 }
      // Simulating a successful response
      resolve(data)
      // Simulating an error response
      // reject(new Error("Failed to fetch data from the server."));
    }, 1000)
  })
}

fetchDataFromServer()
  .then((data) => {
    console.log(`Name: ${data.name}, Age: ${data.age}`)
  })
  .catch((error) => {
    console.error(error.message)
  })

/*
The `async` keyword is used before a function to make it return a Promise implicitly. 

The `await` keyword can be used inside an `async` function to wait for the resolution of a Promise.
- It allows you to write asynchronous code in a more sequential manner, as if it were asynchronous
- `async/await` makes the code more linear and easier to understand compared to handling Promise chains with `.then()` and `.catch()`
  */
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'Alice', age: 35 }
      resolve(data)
    }, 1000)
  })
}

async function displayData() {
  try {
    const data = await fetchDataFromServer()
    console.log(`Name: ${data.name}, Age: ${data.age}`)
  } catch (error) {
    console.error(error.message)
  }
}

displayData()

// Function to fetch data from an API
function fetchDataFromAPI(apiUrl) {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      return response.json()
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error.message}`)
    })
}

// Two different API URLs
const apiUrl1 = 'https://api.example.com/data1'
const apiUrl2 = 'https://api.example.com/data2'

// Asynchronous function to handle both API requests concurrently
async function fetchMultipleData() {
  try {
    // Use Promise.all to handle multiple async operations concurrently
    const [data1, data2] = await Promise.all([
      fetchDataFromAPI(apiUrl1),
      fetchDataFromAPI(apiUrl2),
    ])

    console.log('Data from API 1:', data1)
    console.log('Data from API 2:', data2)
  } catch (error) {
    console.error(`Error during data fetch: ${error.message}`)
  }
}

// Call the async function to initiate the asynchronous operations
fetchMultipleData()

/*
Handling Promises involves managing the resolved values and potential errors that may occur during the asynchronous operation. There are several common ways to handle Promises, including `then/catch/finally`, `async/await`, and the older `callback` style.

then/catch/finally:
 `.then():` Used to handle the resolved value of a Promise and chain additional asynchronous operations.
  `.catch():` Used to handle errors or rejections that occur during the Promise's execution.
    `.finally():` Used to specify a callback that runs regardless of whether the Promise is resolved or rejected.

*/
const promise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation with setTimeout
  setTimeout(() => {
    const randomNumber = Math.random()
    if (randomNumber > 0.5) {
      resolve(`Success! Random number: ${randomNumber}`)
    } else {
      reject(new Error('Failure! Random number too low.'))
    }
  }, 1000)
})

promise.then(
  (result) => {
    console.log(result) // Output: Success! Random number: 0.8764096378470523
  },
  (error) => {
    console.error(error.message) // Output: Failure! Random number too low.
  }
)

// Using async/await to fetch data from the server
async function fetchDataFromServer() {
  try {
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching dataTWO: ${error.message}`)
    throw error // Rethrow the error to propagate it to the caller if needed
  }
}

// Example usage with async/await
async function fetchData() {
  try {
    const data = await fetchDataFromServer()
    console.log('Data from server:', data)
    // Additional async operations can be performed here
  } catch (error) {
    console.error(`Error in fetchDataTWO: ${error.message}`)
  } finally {
    console.log('Async operation complete.')
  }
}

fetchData()
async function fetchFirst152Pokemon() {
  try {
    const pokemonList = []
    let nextUrl = 'https://pokeapi.co/api/v2/pokemon'

    while (pokemonList.length < 152) {
      const response = await fetch(nextUrl)
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json()
      pokemonList.push(...data.results)

      nextUrl = data.next // Get the URL for the next page
    }

    // Slice the array to get the first 150 Pokémon
    return pokemonList.slice(0, 152)
  } catch (error) {
    console.error('Error fetching Pokémon:', error.message)
    throw error // Rethrow the error to propagate it to the caller if needed
  }
}

// Example usage
fetchFirst152Pokemon()
  .then((pokemonList) => {
    console.log('First 152 Pokémon:', pokemonList)
  })
  .catch((error) => {
    console.error('Error:', error.message)
  })

/*
The Event Loop is a fundamental concept in JavaScript that plays a crucial role in handling asynchronous operations, including those involving `async/await`.

JavaScript is a single-threaded, non-blocking, and event-driven language. It means that JavaScript code is executed sequentially, line by line, in a single thread. Asynchronous operations, such as fetching data from a server, reading files, or waiting for a timer, are performed concurrently without blocking the main thread.


  */
async function fetchData() {
  console.log('Start')

  const data = await fetch('https://api.example.com/data')
  console.log('Data:', data)

  console.log('End')
}

console.log('Before fetchData()')
fetchData()
console.log('After fetchData()')

// Output:
// Before fetchData()
// Start
// After fetchData()
// Data: [fetched data]
// End
