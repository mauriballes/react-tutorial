import React from 'react';
import Clock from './components/Clock';

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