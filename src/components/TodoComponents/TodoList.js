import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

function TodoList(props) {
  return (
        <div className="todolistbuilder">
        {/* <p>{props[0].task}</p> */}
        {props.todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </div>
        );
    }

export default TodoList;