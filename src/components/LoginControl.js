import React from 'react';
import Greeting from './Greeting';

class LoginButton extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Login</button>;
    }
}

class LogoutButton extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Logout</button>;
    }
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        // Bind for using `this`
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {/* Conditionals */}
                {isLoggedIn ?
                    <LogoutButton onClick={this.handleLogoutClick} />
                    :
                    <LoginButton onClick={this.handleLoginClick} />
                }
            </div>
        );
    }
}