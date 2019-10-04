import React from 'react';

export default class ItemStatusFilter extends React.Component {
    render = () => (
            <span>
            <button type="button">Все</button>
            <button type="button">Активные</button>
            <button type="button">Сделанные</button>
        </span>
        )
};