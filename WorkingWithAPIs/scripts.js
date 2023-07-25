var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var responseData = JSON.parse(xhr.responseText)
    console.log(responseData)
  } else {
    console.error('Request failed with status:', xhr.status)
  }
}

xhr.onerror = function () {
  console.error('Request failed')
}

xhr.send()

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error('Fetch error:', error)
  })

const dataToSend = {
  name: 'John Doe',
  email: 'john@example.com',
}

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataToSend),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error('Fetch error:', error)
  })

const updatedData = {
  id: 123,
  name: 'Updated Name',
  email: 'updated@example.com',
}

fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error('Fetch error:', error)
  })

fetch('https://api.example.com/users/123', {
  method: 'DELETE',
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    console.log('Resource deleted successfully')
  })
  .catch((error) => {
    console.error('Fetch error:', error)
  })

/*
AXIOS:
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Axios error:', error);
  });

SUPERAGENT:
const request = require('superagent');

request.get('https://api.example.com/data')
  .then(response => {
    console.log(response.body);
  })
  .catch(error => {
    console.error('Superagent error:', error);
  });

  */
