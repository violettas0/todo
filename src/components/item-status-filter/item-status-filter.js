import React from 'react';

export default class ItemStatusFilter extends React.Component {
    state = {
        btn: 'all'
    };

    buttons = [
        {
            filter: 'All',
            content: 'Все',
            toFilter: () => {
                this.setState({
                    btn: 'all'
                });
                this.props.filterAll();
            }},
        {
            filter: 'Active',
            content: 'Активные',
            toFilter: () => {
                this.setState({
                    btn: 'active'
                });
                this.props.filterActive();
            }
        },
        {
            filter: 'Done',
            content: 'Сделанные',
            toFilter: () => {
                this.setState({
                    btn: 'done'
                });
                this.props.filterDone();
            }
        }
    ];
    render() {
        let buttons = this.buttons.map(({filter, content, toFilter}) => {
            let isActive = filter.toLowerCase() === this.state.btn;
            let classBtn = isActive ? 'active' : 'notActive';
            return <button className={`btn ${classBtn}`}
                           type="button"
                           onClick={toFilter}
                           key={filter}
            >{content}</button>
        });
        return(
            <span>
                {buttons}
            </span>
        )}
};