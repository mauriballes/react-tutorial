import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

class Clock extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Mauricio" />
                <Welcome name="Nicole" />
                <Welcome name="Darlyn" />
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);