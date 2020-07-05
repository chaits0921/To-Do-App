import React from 'react';
import { TodoListItem } from './TodoListItem';


type todo = {
  text: string,
  complete: boolean,
}
const todos = [
  {text: "Walk the Dog", complete: true},
  {text: "Do Homework", complete: false}
];

function App() {
  
  return(
    <TodoListItem/>
  )
}

export default App;
