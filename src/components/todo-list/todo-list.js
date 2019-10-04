import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = (props) => {
    const items = props.todos.map((item) => {
        const { id, ...itemProps} = item;
        return (
            <li key={id}>
                <TodoListItem { ...itemProps }
                              onDelete={() => props.onDelete(id)}
                              onToggleDone={() => props.onToggleDone(id)}
                              onToggleImportant={() => props.onToggleImportant(id)}/>
            </li>
        );
    }
);
    return (
        <div>
            <ul className='todo-list'>
                { items }
            </ul>
        </div>
    );
};

export default TodoList;