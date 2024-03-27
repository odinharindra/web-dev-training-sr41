## Making HTTP Calls by handling Ajax

JavaScript Ajax (Asynchronous JavaScript and XML) allows you to make HTTP requests to a server from a web page without needing to reload the entire page. This enables dynamic updates and interactions with server-side resources. Here's a simple explanation with a working example:

### Example: Fetching Data from a Server

Let's create a simple HTML file that fetches data from a server using Ajax and displays it on the web page:

**index.html:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>AJAX Example</title>
  </head>
  <body>
    <h1>Fetching Data with AJAX</h1>
    <div id="output"></div>

    <script>
      // Create an XMLHttpRequest object
      let xhr = new XMLHttpRequest();

      // Define a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Request was successful, update the output
            document.getElementById("output").innerHTML = xhr.responseText;
          } else {
            // Request failed, display an error message
            document.getElementById("output").innerHTML = "Error: " + xhr.status;
          }
        }
      };

      // Open a GET request to the server
      xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

      // Send the request
      xhr.send();
    </script>
  </body>
</html>
```

In this example:

- We create an XMLHttpRequest object using `new XMLHttpRequest()`.
- We define a callback function `onreadystatechange` that gets called whenever the state of the request changes. When the `readyState` is `XMLHttpRequest.DONE` (4), we check if the `status` is 200 (success) and update the `output` element with the response text. If the request fails, we display an error message.
- We open a GET request to a server endpoint (`https://jsonplaceholder.typicode.com/posts/1`), which returns dummy data.
- We send the request using `xhr.send()`.

When you open this HTML file in a browser, it will fetch data from the specified server endpoint and display it on the page inside the `output` div.

This is a basic example of using Ajax in JavaScript to fetch data from a server asynchronously without reloading the entire web page. Ajax enables you to create dynamic and interactive web applications by interacting with server-side resources in the background.
