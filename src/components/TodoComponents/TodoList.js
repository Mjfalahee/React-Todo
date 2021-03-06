import React from 'react';
import Todo from './Todo';
import './Todo.scss';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

function TodoList(props) {
  return (
        <div className="todolist">
        {props.todos.map(todo => 
        <Todo todo={todo} key={todo.id} handleToggleComplete={props.handleToggleComplete}/>)}
        </div>
        );
    }

export default TodoList;