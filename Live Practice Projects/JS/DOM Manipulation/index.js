console.log("script is running...");

// 1. Create a DOM element

const button = document.createElement("button");
button.textContent = "Click me!";

console.log(button);

// 2. Refer a DOM element

const demoArea = document.querySelector("#demo_area");

console.log(demoArea);

// 3. Update a DOM element

demoArea.appendChild(button);

demoArea.classList.add("Child-added");

function removeClassName() {
  demoArea.classList.remove("Child-added");
}

function removeChildButton() {
  demoArea.removeChild(button);
}

const placeholderImage = document.querySelector("#placeholder_image");

// setTimeout(removeClassName, 8000);
// 1 Hour = 60 Minutes
// 1 Minute = 60 Seconds
// 1 Second = 1000 Milliseconds

let actionsList = document.querySelector("#actions_list");

let actions = [
  "Create a DOM element",
  "Refer a DOM element",
  "Update a DOM element",
  "Remove a DOM element",
];

function createListItems() {
  actions.forEach(function (action) {
    const liEl = document.createElement("li");
    liEl.setAttribute("class", "list-group-item");
    liEl.textContent = action;
    actionsList.appendChild(liEl);
  });
}
