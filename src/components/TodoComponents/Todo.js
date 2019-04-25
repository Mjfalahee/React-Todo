import React from 'react';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

function Todo(props) {
   return (
     <div className="todobullets">
      <ul className="bulletitem"> {props.task}</ul>
     </div>
   );
}


export default Todo;