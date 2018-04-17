import React, { Component } from 'react';

class TodoForm extends Component {

    //Definimos el constructor para preparar datos del formulario    
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        //Los metodos tienen que estar referenciados al propio componente
        //Enlazando el metodo handleInput con objeto this
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(e) {
        //Desestructuring de JS
        const { name, value } = e.target; 
        //this.setState cambia el estado de mis datos
        this.setState({
           [name]: value     
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state); //Accedemos a la propiedad onAddTodo para que reciba los datos de la funcion handleAddTodo
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }
    
    render() {
        return (
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                                name="title"
                                className="form-control"
                                placeholder="Title" 
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                name="responsible"
                                className="form-control"
                                placeholder="Resposible"
                                onChange={this.handleInput} 
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                name="description"
                                className="form-control"
                                placeholder="Description" 
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.handleInput}
                            >
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" 
                                   type="submit" 
                                   value="Submit"
                            />
                        </div>
                    </form>    
                </div>        
        );
    }
}

export default TodoForm;
