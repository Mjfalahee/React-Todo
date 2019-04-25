import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoscurrently: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
    
    AddTodoItem = element => {
        element.preventDefault();
        let todoscurrently = this.state.todoscurrently.slice();
        todoscurrently.push({task: this.state.todo, completed: false, id: Date.now()});
        this.setState({todoscurrently, todo: ''});
    }

    ChangeTodo = element => {
      this.setState({[element.target.name]: element.target.value});
    }
  
  render() {
    return (
      <div>
        <TodoList 
        todos={this.state.todoscurrently} />
        <TodoForm 
        value={this.state.todo}
        handleChangeTodo={this.ChangeTodo}
        handleAddTodoItem={this.AddTodoItem}/>
      </div>
    );
  }
}

export default App;
