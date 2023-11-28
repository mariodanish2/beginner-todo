import { useState } from "react";
import { AiFillPlusCircle} from "react-icons/ai";
import { nanoid } from "nanoid";
import todosData from "./datas";
import Todo from "./components/Todo";


function App() {
  const [todos, setTodos] = useState(todosData);

  const handleAddTodo = ()=>{
    setTodos(prev=>{
      const newTodo = {id: nanoid(), name: "New Todo", deadline: "Yesterday"};
      return [...prev, newTodo];
    });
  }


  return (
    <div className="app">
      <header>
        <div className="logo">TODO</div>
        <div className="menu" onClick={handleAddTodo}><AiFillPlusCircle /> Add</div>
      </header>
      <main>
        <h1>My Todos</h1>
        <div className="todos">
          {
            todos.map(todo => <Todo key={todo.id} todoName={todo.name} todoDeadline={todo.deadline} />)
          }
        </div>
      </main>
      <footer>
        &copy; 2023. All rights reserved.
      </footer>
    </div>
  )
}

export default App
