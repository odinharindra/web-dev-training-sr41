## HTTP Methods

HTTP methods, also known as HTTP request methods, are actions that indicate the desired action to be performed on a resource identified by a given URI (Uniform Resource Identifier). Here's a brief explanation of some common HTTP methods along with examples:

### 1. GET:

- The GET method is used to request data from a specified resource.
- It retrieves data from the server without causing any changes to the server state.
- Example: Fetching a list of users from a server.
  ```http
  GET /users HTTP/1.1
  Host: example.com
  ```

### 2. POST:

- The POST method is used to submit data to be processed to a specified resource.
- It sends data to the server to create or update a resource.
- Example: Creating a new user on a server.

  ```http
  POST /users HTTP/1.1
  Host: example.com
  Content-Type: application/json

  {
      "name": "John",
      "age": 30
  }
  ```

### 3. PUT:

- The PUT method is used to update or replace an existing resource.
- It sends data to the server to update the resource with the provided data.
- Example: Updating an existing user's information on a server.

  ```http
  PUT /users/123 HTTP/1.1
  Host: example.com
  Content-Type: application/json

  {
      "name": "John Doe",
      "age": 35
  }
  ```

### 4. DELETE:

- The DELETE method is used to delete a specified resource.
- It sends a request to the server to delete the resource identified by the URI.
- Example: Deleting a user from the server.
  ```http
  DELETE /users/123 HTTP/1.1
  Host: example.com
  ```

### 5. PATCH:

- The PATCH method is used to apply partial modifications to a resource.
- It sends data to the server to partially update the resource with the provided data.
- Example: Partially updating an existing user's information on a server.

  ```http
  PATCH /users/123 HTTP/1.1
  Host: example.com
  Content-Type: application/json

  {
      "age": 40
  }
  ```

### 6. OPTIONS:

- The OPTIONS method is used to describe the communication options for the target resource.
- It can be used to retrieve the supported HTTP methods, CORS (Cross-Origin Resource Sharing) policies, etc.
- Example: Checking the allowed methods for a resource.
  ```http
  OPTIONS /users HTTP/1.1
  Host: example.com
  ```

These are some of the common HTTP methods used in web development. Each method performs a specific action on the server, allowing clients to interact with resources in different ways.
