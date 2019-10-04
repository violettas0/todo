import React from 'react';
import './add-todo-item-form.css'

export default class AddTodoItemForm extends React.Component {
    state = {
        text: ''
    };
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({
            text: ' '
        })
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input placeholder='Новое дело' onChange={this.handleChange} value={this.state.text}/>
                <button type="submit">Добавить</button>
             </form>
        )}
};

