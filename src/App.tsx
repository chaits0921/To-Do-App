import React, { useState } from 'react';
import {TodoList} from "./TodoList"
type Todo = {
  text: string;
  complete: boolean;
};

const initialTodos : Array<Todo>= [
  {text: "Walk the Dog", complete: true},
  {text: "Do Homework", complete: false}
];

function App() {

  const [todos, setTodos]=useState(initialTodos);


  const toggleTodo : ToggleTodo = (selectedTodo) =>{
    const newTodos = todos.map(todo=> {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }
  
  return(
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </React.Fragment>
      
  )
}

export default App;
