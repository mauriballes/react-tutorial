import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Mauricio" />
                <Welcome name="Nicole" />
                <Welcome name="Darlyn" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
