import React from 'react';
import './app-header.css'

const AppHeader = (props) => {
    return (
        <div className="app-header">
            <h1>ToDo List</h1>
            <h2>{props.todos} осталось, {props.done} сделано.</h2>
        </div>
    )
};

export default AppHeader;