import React from 'react';

class Avatar extends React.Component {
    render() {
        return (
            <img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
            />
        );
    }
}

class UserInfo extends React.Component {
    render() {
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user} />
                <div className="UserInfo-name">
                    {this.props.user.name}
                </div>
            </div>
        );
    }
}

export default class Comment extends React.Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
            </div>
        );
    }
}