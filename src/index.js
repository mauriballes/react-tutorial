import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Comment extends React.Component {
    render() {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img className="Avatar"
                        src={this.props.author.avatarUrl}
                        alt={this.props.author.name}
                    />
                    <div className="UserInfo-name">
                        {this.props.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        );
    }
}

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
