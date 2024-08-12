### **Fetch API:  Notes with `async/await`**

#### **What is Fetch API?**

- **Definition**: The Fetch API is a tool built into modern web browsers that allows your web applications to communicate with servers. This tool helps your app get data from servers and send data back to them easily.

#### **What Does Fetch API Do?**

- **Getting Information**: Fetch API lets your app request information from other websites or services, like fetching the latest news, weather updates, or Instagram posts.
- **Sending Information**: You can also use the Fetch API to send information to servers, such as submitting a form or uploading a photo.

#### **Why Should We Use Fetch API?**

- **Easy and Modern**: The Fetch API is easy to use and follows modern web development practices. It makes the code more readable and straightforward.
- **Handles Network Requests Smoothly**: It’s designed to handle all types of network requests in a clean and flexible way, making it simpler to work with data.

#### **How Should We Use Fetch API with `async/await`?**

Using `async/await` makes the code look more like regular synchronous code, which is easier to read and understand.

#### **Basic Use: Getting Information**

Here's how you use `fetch()` to get information from a server using `async/await`:

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

- **Steps**:
  1. **Declare an `async` function**: Start by declaring your function with the `async` keyword.
  2. **`await fetch('URL')`**: Use `await` before `fetch()` to wait for the fetch call to complete.
  3. **Check the response**: Ensure that the response is okay (i.e., `response.ok` is true).
  4. **Parse the response**: Use `await response.json()` to convert the response to a usable format (JSON).
  5. **Handle the data**: Use the data as needed in your application.
  6. **Catch errors**: Use a `try/catch` block to handle any errors that occur during the fetch process.

#### **Sending Data:**

To send information to a server, you can specify the type of request and include the data to be sent, also using `async/await`:

```javascript
async function sendData() {
    try {
        const response = await fetch('https://example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'John', age: 30 })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

sendData();
```

- **Steps**:
  1. **Declare an `async` function**: Start by declaring your function with the `async` keyword.
  2. **`await fetch('URL', options)`**: Use `await` before `fetch()` with the URL and an options object.
  3. **Specify method and headers**: Set the `method` to `'POST'` or another appropriate HTTP method. Include the `headers` to tell the server what type of data is being sent.
  4. **Include the body**: Add the `body` with the actual data converted to a JSON string using `JSON.stringify()`.
  5. **Check the response**: Ensure that the response is okay (i.e., `response.ok` is true).
  6. **Parse the response**: Use `await response.json()` to convert the response to a usable format (JSON).
  7. **Handle the data**: Use the data as needed in your application.
  8. **Catch errors**: Use a `try/catch` block to handle any errors that occur during the fetch process.

#### **Why Use `async/await`?**

- **Readability**: Code using `async/await` looks cleaner and more like regular synchronous code, making it easier to read and understand.
- **Error Handling**: Using `try/catch` blocks with `async/await` provides a clearer way to handle errors compared to chaining `.catch()` methods.
- **Flow Control**: `async/await` allows for a more straightforward approach to controlling the flow of asynchronous operations, avoiding deeply nested `.then()` calls.

---

### **Glossary**

- **API (Application Programming Interface)**: A set of rules and tools that allows different software applications to communicate with each other.
- **Fetch API**: A modern JavaScript interface that allows you to make HTTP requests to servers.
- **HTTP Request**: A request made by a client to a server asking for a resource or service, such as a web page or data.
- **URL (Uniform Resource Locator)**: The address of a specific resource or server on the internet.
- **Promise**: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
- **`async`/`await`**: Keywords in JavaScript that allow you to write asynchronous code in a synchronous style.
  - **`async`**: Declares an asynchronous function, which returns a promise.
  - **`await`**: Pauses the execution of the function until the promise is resolved.
- **`try`/`catch`**: A block of code used to handle errors in JavaScript.
  - **`try`**: Contains the code that might throw an error.
  - **`catch`**: Contains the code that runs if an error occurs in the `try` block.
- **JSON (JavaScript Object Notation)**: A lightweight format for storing and transporting data, often used when data is sent from a server to a web page.
- **HTTP Methods**: Different types of requests that can be made to a server, such as GET, POST, PUT, and DELETE.
  - **GET**: Requests data from a server.
  - **POST**: Sends data to a server to create or update a resource.
  - **PUT**: Sends data to a server to update a resource.
  - **DELETE**: Requests the deletion of a resource from a server.
- **Headers**: Additional information sent with an HTTP request or response.
- **Body**: The part of an HTTP request or response that contains the actual data being sent or received.

---

### **Summary**

The Fetch API is a useful tool for making network requests in your web apps. It helps you easily get and send data to servers, making your applications more dynamic and interactive. Using `async/await` makes the code cleaner and easier to manage, enhancing the overall development experience.

