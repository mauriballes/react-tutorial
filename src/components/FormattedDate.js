import React from 'react';

export default class FormattedDate extends React.Component {
    render() {
        return <h2>It is {this.props.date.toLocaleTimeString()}.</h2>;
    }
}