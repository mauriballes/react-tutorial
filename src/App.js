import React from 'react';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Clock name="Mauricio" />
                <Clock name="Nicole" />
                <Clock name="Darlyn" />
                <Toggle />
                <Greeting isLoggedIn={false}/>
            </div>
        );
    }
}