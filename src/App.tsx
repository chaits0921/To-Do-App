import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
  text: string;
  complete: boolean;
};

const todos : Array<Todo>= [
  {text: "Walk the Dog", complete: true},
  {text: "Do Homework", complete: false}
];

function App() {
  
  return(
    <React.Fragment>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
    </React.Fragment>
      
  )
}

export default App;
