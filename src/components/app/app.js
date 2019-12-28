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
            { content: 'Выпить кофе', important: false, done: false, id: 1 },
            { content: 'Почитать новые статьи на Хабре', important: false, done: false, id: 2 },
            { content: 'Сверстать лендинг', important: false, done: false, id: 3 }
        ],
        searchWord: '',
        filter: 'all'
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
        this.setState((state) => {
            return {
                todoData: this.toConstructNewArray('important', state.todoData, id)
            }
        })
    };

    searchItems = (text) => {
        this.setState({
            searchWord: text,
            filter: 'search'
        });
    };
    filterAll = () => {
        this.setState({
            filter: 'all'
        })
    };
    filterActive = () => {
        this.setState({
            filter: 'active'
        })
    };
    filterDone = () => {
        this.setState({
            filter: 'done'
        })
    };
    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        };
    }
    search(items, word) {
        return items.filter((item) => item.content.toLowerCase().includes(word.toLowerCase()));
    }

    render() {
        let doneCount = this.state.todoData.filter((item) => item.done).length;
        let todoCount = this.state.todoData.length - doneCount;
        const filteredData = this.filter(this.search(this.state.todoData, this.state.searchWord), this.state.filter);
        return (
            <div className="app">
                <AppHeader todos = { todoCount } done = {doneCount} />
                <SearchPanel onSearchItems={this.searchItems}/>
                <ItemStatusFilter filterAll={this.filterAll}
                                  filterActive={this.filterActive}
                                  filterDone={this.filterDone}/>
                <TodoList todos = { filteredData }
                          onDelete={this.deleteItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}/>
                <AddTodoItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
};

