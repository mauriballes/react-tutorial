import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

const element = <Welcome name="Mauricio" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);
