import React from 'react';


// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

//<form onSubmit={}>


const TodoForm = props => {
        return(
        <div>
        <input type="text" placeholder="Add new entry here" name="todo" value={props.value} onChange={props.handleChangeTodo} />
        <button className="enter" onClick={props.handleAddTodoItem}>Submit</button>
        <button className="clear">Clear Completed</button>
        </div>
        );
}

export default TodoForm;