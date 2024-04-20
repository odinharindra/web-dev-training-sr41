import React, { Component } from "react";

function render() {
  console.log("I am invoking render method");
}

function checkMe() {
  console.log("I am invoking checkMe method");
}

export class TodosListComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div>This is Todos List Component</div>
        <div>This is Todos List Component</div>
      </React.Fragment>
    );
  }
}
