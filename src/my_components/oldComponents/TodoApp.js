import React from 'react';

class TodoApp extends React.Component {
    constructor() {
        super();

        this.state = {
            item: '',
            todos: [],
            updating: false
        }
    }

    onInputChange = (event) => {
        const value = event.target.value
        this.setState({
            item: value
        })
    }

    addItem = (event) => {
        event.preventDefault();
        var newdos;
        if (this.state.updating) {
            newdos = [...this.state.todos];
            newdos.splice(this.updating_index, 1, this.state.item);
        }
        else {
            newdos = this.state.todos.slice(0);
            newdos.push(this.state.item);
        }
        const newTodos = newdos
        this.setState({
            todos: newTodos,
            item: '',
            updating: false
        })
    }

    deleteItem(index) {
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1);
        this.setState({
            todos: newTodos
        })
    }

    updateItem(index) {
        const update = this.state.todos[index];
        this.setState({
            item: update,
            updating: true,
        })
        this.updating_index = index;
    }

    clearAll = () => {
        const newTodos = [];
        this.setState({
            todos: newTodos
        });
    }

    render() {
        let list = this.state.todos.map((item, i) => {
            return (
                <li key={i}>
                    {item}
                    <button onClick={() => { this.updateItem(i) }}>Update</button>
                    <button onClick={() => { this.deleteItem(i) }}>Delete</button>
                </li>
            )
        });
        let check_null = (this.state.item === '');
        let button_value = !this.state.updating ? 'Add' : 'Update';
        let no_todo = (this.state.todos.length === 0);
        return (
            <div>
                <h1>Todo Application</h1>
                <form onSubmit={this.addItem}>
                    <input value={this.state.item} type="text" placeholder="Enter new item" onChange={this.onInputChange} />
                    <br />
                    <button type="submit" disabled={check_null}>{button_value} Item</button>
                </form>
                <ul>
                    {list}
                </ul>
                <button onClick={this.clearAll} disabled={no_todo}>Delete All</button>
            </div>
        )
    }
}

export default TodoApp;