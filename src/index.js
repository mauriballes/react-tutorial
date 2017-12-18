import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
    return user.firstname + ' ' + user.lastname
}

const user = {
    firstname: 'Mauricio',
    lastname: 'Ballesteros'
};

function tick() {
    const element = (
        <div>
            <h1>Hello, {formatName(user)}</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);