import React from 'react';

class ListItem extends React.Component {
    render() {
        return <li>{this.props.value}</li>
    }
}

export default class NumberList extends React.Component {
    render() {
        const numbers = this.props.numbers;
        // Keys are important for React for detect changes 
        // when you use lists or arrays
        const listItems = numbers.map(number =>
            <ListItem key={number.toString()} value={number} />
        );
        return <ul>{listItems}</ul>;
    }
}