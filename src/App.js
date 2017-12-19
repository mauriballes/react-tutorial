import React from 'react';

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

class FormattedDate extends React.Component {
    render() {
        return <h2>It is {this.props.date.toLocaleTimeString()}.</h2>;
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <Welcome name={this.props.name} />
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Clock name="Mauricio" />
                <Clock name="Nicole" />
                <Clock name="Darlyn" />
            </div>
        );
    }
}