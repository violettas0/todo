import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import './style.css'
import AddTodoItemForm from "../add-todo-item-form";

export default class App extends React.Component {
    state = {
        todoData:  [
            { content: 'aaaaaaaaaa', important: false, done: false, id: 1 },
            { content: 'waaaaaaaaa', important: false, done: false, id: 2 },
            { content: 'damn', important: false, done: false, id: 3 }
        ]
    };
    deleteItem = (id) => {
        this.setState(state => {
            const index = state.todoData.findIndex(item => item.id === id);

            const newTodoData = [
                ...state.todoData.slice(0, index),
                ...state.todoData.slice(index + 1)
            ];
            return {
                todoData: newTodoData
            }
        })
    };
    counter = 4;
    addItem = (text) => {
        this.setState(state => {
            const newItem = {
                content: text,
                important: false,
                done: false,
                id: this.counter++
            };

            const newTodoData = [...state.todoData, newItem];

            return {
                todoData: newTodoData
            }
        })
    };

    toConstructNewArray = (propName, todoData, id) => {
        const index = todoData.findIndex(item => item.id === id);
        const oldItem = todoData[index];

        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...todoData.slice(0, index),
            newItem,
            ...todoData.slice(index + 1)
        ];
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toConstructNewArray('done', todoData, id)
            }
        })
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toConstructNewArray('important', todoData, id)
            }
        })
    };

    render() {
        let doneCount = this.state.todoData.filter((item) => item.done).length;
        let todoCount = this.state.todoData.length - doneCount;
        return (
            <div className="app">
                <AppHeader todos = { todoCount } done = {doneCount} />
                <SearchPanel />
                <ItemStatusFilter />
                <TodoList todos = { this.state.todoData }
                          onDelete={this.deleteItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}/>
                <AddTodoItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
};

