import React from 'react';
import './Todo.scss';

// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

//<form onSubmit={}>


const TodoForm = props => {
        return(
        <div className="inputdiv">
        <form className="inputform" onSubmit={props.handleAddTodoItem}>
        <input className='textbox'
        type="text" 
        placeholder="Add new item here" 
        name="todo" 
        value={props.value} 
        onChange={props.handleChangeTodo}  />
        <button className="enter" onClick={props.handleAddTodoItem}>Submit</button>
        <button className="clear" onClick={props.handleClearComplete}>Clear Completed</button>
        </form>
        </div>
        );
}

export default TodoForm;