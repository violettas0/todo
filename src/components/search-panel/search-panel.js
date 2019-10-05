import React from 'react';

export default  class SearchPanel extends React.Component {
    state = {
        text: ''
    };
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        }, () => {this.props.onSearchItems(this.state.text);});
    };
    render() {
        return <input type="search"
                      placeholder="Поиск"
                      onChange={this.handleChange}
                      value={this.state.text}
        />;
    }
};
