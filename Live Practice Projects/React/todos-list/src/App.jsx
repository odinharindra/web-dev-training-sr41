import logo from "./logo.svg";
import "./App.css";

import { TodosListComponent } from "./TodosList/TodosList";
import { TodosFormComponent } from "./TodoForm/TodoForm";

function App() {
  return (
    <>
      <TodosFormComponent></TodosFormComponent>
      <TodosListComponent></TodosListComponent>
    </>
  );
}

export default App;
