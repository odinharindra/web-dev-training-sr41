console.log("Script loaded");

// Handling AJAX with javascript

function add(num1, num2, callBack) {
  let sum = num1 + num2;
  callBack(sum);
}

function outputSum(sum) {
  console.log(sum);
}

add(5, 10, outputSum);

function sendMessage(message, callback) {
  // send_message_action();
  // sendMessageSentDeliveryReport();

  setTimeout(() => {
    callback();
  }, 5000);
}

// Call back function
// Promise

// Ajax way of handling http request
//  Fetch APi

// HTTP methods
// GET
// POST
// PUT
// DELETE
// PATCH

// Explain GET request
// Get request is used to request data from a specified resource.
// It is used to retrieve data from a server. The data returned by the server is stored in the response object.

// Explain POST request
// Post request is used to submit data to be processed to a specified resource.
// It is used to send data to a server to create/update a resource.

// Explain PUT request
// PUT request is used to update data to a specified resource.
// It is used to send data to a server to update a resource.
