import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.scss';


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
    
  // Adding a new todo list item

    AddTodoItem = element => {
        element.preventDefault(); //prevents browser from refreshing
        let todoscurrently = this.state.todoscurrently;
        console.log(todoscurrently);
        todoscurrently.push({task: this.state.todo, completed: false, id: Date.now()});
        this.setState({todoscurrently, todo: ''});
    }

  //Holds the input as a state

    ChangeTodo = element => {
      this.setState({[element.target.name]: element.target.value});
    }

  //marking complete by passing the todo.id all the way up from todo.js

    ToggleComplete= (element) => {
      //console.log(element);
      //loop over todo state, find todo item by id, change completed to true, and return updated list to state
      let completecheck = this.state.todoscurrently.map((item) => {
          if(item.id === element) {
            item.completed = !item.completed;
            return item;
          }
          else { return item;
          }
      });
      this.setState({todoscurrently: completecheck});
    }


  //clearing complete
  
  ClearComplete = (e) => {
    e.preventDefault();
    let nocompletes = this.state.todoscurrently.filter(todos => todos.completed === false)
    //console.log(nocompletes);
    this.setState({todoscurrently: nocompletes});
  }

  render() {
    return (
      <div className="appcontainer">
      <h2 className="title">Tasks, Chores..</h2><h4 className="smallertitle">or other things to think about</h4>
        <TodoList 
        todos={this.state.todoscurrently}
        handleToggleComplete= {this.ToggleComplete}/>
        <TodoForm 
        value={this.state.todo}
        handleChangeTodo={this.ChangeTodo}
        handleAddTodoItem={this.AddTodoItem}
        handleClearComplete={this.ClearComplete}/>
      </div>
    );
  }
}

export default App;
