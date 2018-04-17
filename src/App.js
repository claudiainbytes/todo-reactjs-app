import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Datos
import { todos } from './todos.json';

//Componentes
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleAddTodo(todo) {
    //Añadimos con el metodo setState a nuestra lista de tareas o todos
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    this.setState({
      //Usando metodo filter. Si el indice es encontrado dentro del arreglo, lo va a quitar
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  render() {
    //Definiendo una variable que va a mostrar cada todo como tarjeta en el renderizado
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i} >
          <div className="card mt-4">
          <div className="card-header">
            <h3>{ todo.title }</h3>
            <span className="badge badge-pill badge-danger ml-2">
              { todo.priority }
            </span>
          </div>
          <div className="card-body">
            <p>{ todo.description }</p>
            <p><mark>{ todo.responsible }</mark></p>
          </div>
          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
          </div>
        </div>  
        </div>
      )
    })

    return (
        <div className="App">
          <Navigation title="Tasks" numtasks={ todos.length } />
          <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
              { todos }
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
