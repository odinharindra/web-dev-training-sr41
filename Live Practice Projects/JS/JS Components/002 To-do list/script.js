console.log("JS Components - To-do list");

const todoInput = document.getElementById("todo_input");

function todos() {
  const todos = JSON.parse(window.localStorage.getItem("todos") || []);

  function addTodo(task) {
    todos.push(task);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Task added: ", task);
    console.log("All tasks: ", todos);
  }

  /**
   * Deletes a todo item from the todos array based on the given index.
   * @param {number} todoIndex - The index of the todo item to delete.
   * @returns None
   */
  function deleteTodo(todoIndex) {
    /**
     * Logs a message indicating the task to delete along with the index of the task.
     * @param {string} todoIndex - The index of the task to be deleted.
     * @returns None
     */
    console.log("Task to delete: ", todoIndex);
    /**
     * Removes a todo item from the todos array at the specified index.
     * @param {number} todoIndex - The index of the todo item to remove.
     * @returns The removed todo item.
     */
    todos.splice(todoIndex, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Task deleted: ", todoIndex);
    console.log("All tasks: ", todos);

    this.renderTodos();
  }

  function getTodos() {
    return todos;
  }

  function renderTodos() {
    const todosList = document.getElementById("todos_list");
    todosList.innerHTML = "";

    todos.forEach((todo, index) => {
      const todoItem = document.createElement("li");
      todoItem.innerHTML = `
      <span class="todo-content">[${index + 1}] ${todo}</span>
      <button onclick="myTodos.deleteTodo(${index})"><i class="bi bi-x-lg"></i> Remove</button>
      `;
      todosList.appendChild(todoItem);
    });
  }

  return {
    addTodo,
    deleteTodo,
    getTodos,
    renderTodos,
  };
}

const todosForm = document.getElementById("todo_form");

const myTodos = todos();
console.log(myTodos.getTodos());
myTodos.renderTodos();

todosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;

  todoInput.value = "";
  myTodos.addTodo(todoValue);
  myTodos.renderTodos();
});

console.log(todosForm);
