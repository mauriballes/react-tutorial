import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default class Blog extends React.Component {
    render() {
        const sidebar = (
            <ul>
                {this.props.posts.map(post =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );
        const content = this.props.posts.map(post =>
            <Post key={post.id} title={post.title} content={post.content}/>
        );
        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        );
    }
}