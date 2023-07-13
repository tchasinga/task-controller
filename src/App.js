import { useState } from 'react';
import GetTaskmanagement from './Components/Dotaskarea.js';
import FormStystem from './Components/FormComponent.js';
import Todolist from './Components/TodoList.js';
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <GetTaskmanagement  />
      <FormStystem  todo={todo}
        todoList={todoList}
        setTodo={setTodo}
        setTodoList={setTodoList}/>
      <Todolist  todoList={todoList}/>
    </div>
  );
}
 
export default App;
