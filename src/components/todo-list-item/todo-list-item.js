import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    render() {
        let classNames = 'todo-list-item';
        if (this.props.done)  {
            classNames += ' done';
        }
        if (this.props.important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span onClick={this.props.onToggleDone}>{this.props.content}</span>
                <button type="button"
                        className="btn"
                        onClick={this.props.onDelete}>Удалить</button>
                <button type="button"
                        className="btn"
                        onClick={this.props.onToggleImportant}>Сделать важным</button>
            </span>
    );
    }
};

