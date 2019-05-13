import React from 'react';
import './Todo.scss';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

function Todo(props) {
  console.log(props);
   return (
     <div 
     className={`todoitem${props.todo.completed ? 'completed' : ''}`} 
     onClick={() => props.handleToggleComplete(props.todo.id)}
     >
        {props.todo.task}
     </div>
   );
}


export default Todo;